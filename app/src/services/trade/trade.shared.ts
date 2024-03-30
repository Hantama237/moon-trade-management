// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Trade, TradeData, TradePatch, TradeQuery, TradeService } from './trade.class'

export type { Trade, TradeData, TradePatch, TradeQuery }

export type TradeClientService = Pick<TradeService<Params<TradeQuery>>, (typeof tradeMethods)[number]>

export const tradePath = 'trade'

export const tradeMethods = ['find', 'get', 'create', 'patch', 'remove','getAccountSummary', 'addBinanceTrade','calculatePositionSize','getTradeHistory','syncTrade'] as const

export const tradeClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(tradePath, connection.service(tradePath), {
    methods: tradeMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [tradePath]: TradeClientService
  }
}
