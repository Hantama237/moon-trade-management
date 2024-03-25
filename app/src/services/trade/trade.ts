// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  tradeDataValidator,
  tradePatchValidator,
  tradeQueryValidator,
  tradeResolver,
  tradeExternalResolver,
  tradeDataResolver,
  tradePatchResolver,
  tradeQueryResolver
} from './trade.schema'

import type { Application } from '../../declarations'
import { TradeService, getOptions } from './trade.class'
import { tradePath, tradeMethods } from './trade.shared'

export * from './trade.class'
export * from './trade.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const trade = (app: Application) => {
  // Register our service on the Feathers application
  app.use(tradePath, new TradeService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: tradeMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(tradePath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(tradeExternalResolver),
        schemaHooks.resolveResult(tradeResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(tradeQueryValidator), schemaHooks.resolveQuery(tradeQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(tradeDataValidator), schemaHooks.resolveData(tradeDataResolver)],
      patch: [schemaHooks.validateData(tradePatchValidator), schemaHooks.resolveData(tradePatchResolver)],
      remove: [],
      addBinanceTrade: [schemaHooks.validateData(tradeDataValidator)],
      calculatePositionSize: [schemaHooks.validateData(tradeDataValidator)],
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [tradePath]: TradeService
  }
}
