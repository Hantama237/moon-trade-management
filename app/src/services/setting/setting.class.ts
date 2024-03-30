// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Setting, SettingData, SettingPatch, SettingQuery } from './setting.schema'
import { BinanceFuturesClient } from '../../helper/binance.futures'
import fs from 'fs'

export type { Setting, SettingData, SettingPatch, SettingQuery }

export interface SettingParams extends KnexAdapterParams<SettingQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class SettingService<ServiceParams extends Params = SettingParams> extends KnexService<
  Setting,
  SettingData,
  SettingParams,
  SettingPatch
> {
  async getSettingValue(key: string){
    let settings = await this.find({
      query:{
        key:key,
        $limit: 1
      }
    });
    return {
      success:true,
      message:'success',
      data: settings.data[0].value
    }
  }
  async updateExchangeInfo(){
    let exchange_info = await BinanceFuturesClient.getExchangeInfo();
    let symbol_precision = [];
    for(let crypto of exchange_info.symbols){
      symbol_precision.push({
        symbol: crypto.symbol,
        precision: crypto.quantityPrecision
      })
    }
    this.update(3,{
      key: 'precision',
      value: JSON.stringify(symbol_precision)
    })
    return {
      success: true,
      message: "success",
      data: true
    }
  }
  async getAssetPrecision(symbol: string){
    let setting = await this.get(3);
    let precisions = JSON.parse(setting.value);
    for(let precision of precisions){
      if(precision.symbol == symbol){
        return {
          success: true,
          message:"success",
          data: precision.precision
        }
      }
    }
    return {
      success:false,
      message:"not found",
    }
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mysqlClient'),
    name: 'setting'
  }
}
