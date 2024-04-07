// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Trade, TradeData, TradeEntry, TradePatch, TradeQuery } from './trade.schema'

import {newEntryWithTPSL, getPositionSize, getTradeResult, getCurrentPrice} from '../../helper/binance.futures'
import {app} from '../../app'
import { NewOrderError } from 'binance'

export type { Trade, TradeData, TradePatch, TradeQuery }

export interface TradeParams extends KnexAdapterParams<TradeQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TradeService<ServiceParams extends Params = TradeParams> extends KnexService<
  Trade,
  TradeData,
  TradeParams,
  TradePatch
> {
  async getAccountSummary(){
    // console.log(await app.service('setting').getAssetPrecision('BNBUSDT'))
    // console.log(await app.service('setting').updateExchangeInfo())
    let capital = parseFloat((await app.service('setting').getSettingValue('capital')).data);
    let profit_result = await this.Model.table('trade').where('realized_pnl','>',0).sum({realized_pnl:'realized_pnl',fee:'fee'})
    let loss_result = await this.Model.table('trade').where('realized_pnl','<',0).sum({realized_pnl:'realized_pnl',fee:'fee'})
    let total_profit = (profit_result[0].realized_pnl??0) + (profit_result[0].fee??0);
    let total_loss = (loss_result[0].realized_pnl??0) + (loss_result[0].fee??0);
    return {
      success: true,
      message: "success",
      data: {
        balance: (capital + total_profit + total_loss).toFixed(2),
        profit: total_profit.toFixed(2),
        profit_percent: (((total_profit)/capital)*100).toFixed(2),
        loss: total_loss.toFixed(2),
        loss_percent: (((total_loss)/capital)*100).toFixed(2),
      }
    };
  }
  async getTradeHistory(){
    let trade_history = await this.find({
      query:{
        $limit: 4,
        $sort: {
          id: -1
        }
      }
    })
    return {
      success: true,
      message: "success",
      data: trade_history.data
    }
  }
  async addBinanceTrade(data: TradeEntry,params: TradeParams) {
    let precision = await app.service('setting').getAssetPrecision(data.symbol);
    let mark_price = await getCurrentPrice(data.symbol);
    
    
    if(!mark_price.success){
      return {
        success:false,
        message:"get price failed"
      }
    }
    console.log(mark_price);
    data.entry_price = parseFloat(mark_price.data as string);
    data.size = parseFloat((await this.calculatePositionSize(data as TradeData, params)).data.size_crypto);
    console.log(data.size.toFixed(precision.data));
    let result = await newEntryWithTPSL(data.symbol, 'LIMIT', data.entry_price > data.stop_loss_price ? 'BUY' : 'SELL',data.size.toFixed(precision.data), data.entry_price.toFixed(2), data.stop_loss_price.toFixed(2),data.take_profit_price.toFixed(2))
    if(result.success && result.data){
      let trade_data = data as TradeData;
      trade_data.binance_order_id = result.data.orderId;
      trade_data.entry_date = Date.now() - 60000; 
      this.create(trade_data)
      return{
        success:true,
        message:"success"
      }
    }
    return {
      success:false,
      message:result.message
    }
  }
  async calculatePositionSize(data: TradeData, params: TradeParams){
    let risk : number= parseFloat((await app.service('setting').getSettingValue('risk')).data)
    let position_size: number = getPositionSize(risk, data.entry_price, data.stop_loss_price)
    return {
      success: true,
      message: "success",
      data: {
        risk: risk,
        distance: ((((data.entry_price - data.stop_loss_price)/data.entry_price)*100)).toFixed(2),
        size: position_size.toFixed(2),
        size_crypto: (position_size/data.entry_price).toString(),
      }
    }
  }
  async syncTrade(trade_id: number){
    let trade = await this.get(trade_id);
    let result = await getTradeResult(trade.symbol,trade.entry_date,trade.exit_date)
    this.patch(trade_id,{
      realized_pnl: result.data.realized_pnl,
      fee: result.data.fee
    })
    return {
      success:true,
      message:"success",
      data: result
    }
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mysqlClient'),
    name: 'trade'
  }
}
