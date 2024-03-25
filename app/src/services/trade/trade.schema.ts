// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TradeService } from './trade.class'
import { userSchema } from '../users/users.schema'


// Main data model schema
export const tradeSchema = Type.Object(
  {
    id: Type.Number(),
    entry_date: Type.Number(),
    exit_date: Type.Number(),
    symbol: Type.String(),
    entry_price: Type.Number(),
    stop_loss_price: Type.Number(),
    take_profit_price: Type.Number(),
    size: Type.Number(),
    notes: Type.String(),
    snapshot_path: Type.String(),
    user_id: Type.Number(),
    user: Type.Ref(userSchema),
  },
  { $id: 'Trade', additionalProperties: false }
)
export type Trade = Static<typeof tradeSchema>
export const tradeValidator = getValidator(tradeSchema, dataValidator)
export const tradeResolver = resolve<Trade, HookContext<TradeService>>({
  user: virtual(async (trade, context) => {
    if(!trade.user_id) return undefined;
    // Associate the user that sent the message
    return context.app.service('users').get(trade.user_id)
  })
})

export const tradeExternalResolver = resolve<Trade, HookContext<TradeService>>({})

// Schema for creating new entries
export const tradeDataSchema = Type.Pick(tradeSchema, [
  'symbol',
  'entry_price',
  'stop_loss_price',
  'take_profit_price',
  'size',
], {
  $id: 'TradeData'
})
export type TradeData = Static<typeof tradeDataSchema>
export const tradeDataValidator = getValidator(tradeDataSchema, dataValidator)
export const tradeDataResolver = resolve<Trade, HookContext<TradeService>>({
  user_id: async (_value, _message, context) => {
    // Associate the record with the id of the authenticated user
    return context.params.user?.id
  },
  entry_date: async () => {
    return Date.now()
  }
})

// Schema for updating existing entries
export const tradePatchSchema = Type.Partial(tradeSchema, {
  $id: 'TradePatch'
})
export type TradePatch = Static<typeof tradePatchSchema>
export const tradePatchValidator = getValidator(tradePatchSchema, dataValidator)
export const tradePatchResolver = resolve<Trade, HookContext<TradeService>>({})

// Schema for allowed query properties
export const tradeQueryProperties = Type.Pick(tradeSchema, ['id', 'entry_date','symbol'])
export const tradeQuerySchema = Type.Intersect(
  [
    querySyntax(tradeQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type TradeQuery = Static<typeof tradeQuerySchema>
export const tradeQueryValidator = getValidator(tradeQuerySchema, queryValidator)
export const tradeQueryResolver = resolve<TradeQuery, HookContext<TradeService>>({})

