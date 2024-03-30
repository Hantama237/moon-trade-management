"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trade = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const trade_schema_1 = require("./trade.schema");
const trade_class_1 = require("./trade.class");
const trade_shared_1 = require("./trade.shared");
__exportStar(require("./trade.class"), exports);
__exportStar(require("./trade.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const trade = (app) => {
    // Register our service on the Feathers application
    app.use(trade_shared_1.tradePath, new trade_class_1.TradeService((0, trade_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: trade_shared_1.tradeMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(trade_shared_1.tradePath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(trade_schema_1.tradeExternalResolver),
                schema_1.hooks.resolveResult(trade_schema_1.tradeResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(trade_schema_1.tradeQueryValidator), schema_1.hooks.resolveQuery(trade_schema_1.tradeQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(trade_schema_1.tradeDataValidator), schema_1.hooks.resolveData(trade_schema_1.tradeDataResolver)],
            patch: [schema_1.hooks.validateData(trade_schema_1.tradePatchValidator), schema_1.hooks.resolveData(trade_schema_1.tradePatchResolver)],
            remove: [],
            addBinanceTrade: [schema_1.hooks.validateData(trade_schema_1.tradeEntryValidator)],
            calculatePositionSize: [schema_1.hooks.validateData(trade_schema_1.tradeEntryValidator)],
            getAccountSummary: [],
            getTradeHistory: [],
            syncTrade: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.trade = trade;
//# sourceMappingURL=trade.js.map