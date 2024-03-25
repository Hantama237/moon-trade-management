// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Trade, TradeData, TradePatch, TradeQuery } from './trade.schema'

import {newEntryWithTPSL, getPositionSize} from './helper/binance.futures'
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
  async addBinanceTrade(data: TradeData,params: TradeParams) {
    let result = await newEntryWithTPSL(data.symbol,data.entry_price > data.stop_loss_price ? 'BUY' : 'SELL',data.size.toFixed(3), data.stop_loss_price.toFixed(2),data.take_profit_price.toFixed(2))
    if(result.success){
      this.create(data)
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
    let settings = await app.service('setting').find({
      query:{
        key:'risk',
        $limit: 1
      }
    });
    let risk : number= parseFloat(settings.data[0].value)
    let position_size: number = getPositionSize(risk,data.entry_price,data.stop_loss_price)
    console.log((position_size/data.entry_price))
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
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mysqlClient'),
    name: 'trade'
  }
}
