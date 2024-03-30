"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradeEntryValidator = exports.tradeEntrySchema = exports.tradeQueryResolver = exports.tradeQueryValidator = exports.tradeQuerySchema = exports.tradeQueryProperties = exports.tradePatchResolver = exports.tradePatchValidator = exports.tradePatchSchema = exports.tradeDataResolver = exports.tradeDataValidator = exports.tradeDataSchema = exports.tradeExternalResolver = exports.tradeResolver = exports.tradeValidator = exports.tradeSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const users_schema_1 = require("../users/users.schema");
// Main data model schema
exports.tradeSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    entry_date: typebox_1.Type.Number(),
    exit_date: typebox_1.Type.Number(),
    symbol: typebox_1.Type.String(),
    entry_price: typebox_1.Type.Number(),
    stop_loss_price: typebox_1.Type.Number(),
    take_profit_price: typebox_1.Type.Number(),
    size: typebox_1.Type.Number(),
    notes: typebox_1.Type.String(),
    snapshot_path: typebox_1.Type.String(),
    user_id: typebox_1.Type.Number(),
    user: typebox_1.Type.Ref(users_schema_1.userSchema),
    binance_order_id: typebox_1.Type.Number(),
    realized_pnl: typebox_1.Type.Number(),
    fee: typebox_1.Type.Number()
}, { $id: 'Trade', additionalProperties: false });
exports.tradeValidator = (0, typebox_1.getValidator)(exports.tradeSchema, validators_1.dataValidator);
exports.tradeResolver = (0, schema_1.resolve)({
    user: (0, schema_1.virtual)(async (trade, context) => {
        if (!trade.user_id)
            return undefined;
        // Associate the user that sent the message
        return context.app.service('users').get(trade.user_id);
    })
});
exports.tradeExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.tradeDataSchema = typebox_1.Type.Pick(exports.tradeSchema, [
    'symbol',
    'entry_price',
    'stop_loss_price',
    'take_profit_price',
    'size',
    'binance_order_id',
    'entry_date'
], {
    $id: 'TradeData'
});
exports.tradeDataValidator = (0, typebox_1.getValidator)(exports.tradeDataSchema, validators_1.dataValidator);
exports.tradeDataResolver = (0, schema_1.resolve)({
    user_id: async (_value, _message, context) => {
        // Associate the record with the id of the authenticated user
        return context.params.user?.id;
    }
});
// Schema for updating existing entries
exports.tradePatchSchema = typebox_1.Type.Partial(exports.tradeSchema, {
    $id: 'TradePatch'
});
exports.tradePatchValidator = (0, typebox_1.getValidator)(exports.tradePatchSchema, validators_1.dataValidator);
exports.tradePatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.tradeQueryProperties = typebox_1.Type.Pick(exports.tradeSchema, ['id', 'entry_date', 'symbol']);
exports.tradeQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.tradeQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.tradeQueryValidator = (0, typebox_1.getValidator)(exports.tradeQuerySchema, validators_1.queryValidator);
exports.tradeQueryResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.tradeEntrySchema = typebox_1.Type.Pick(exports.tradeSchema, [
    'symbol',
    'entry_price',
    'stop_loss_price',
    'take_profit_price',
    'size'
], {
    $id: 'TradeEntry'
});
exports.tradeEntryValidator = (0, typebox_1.getValidator)(exports.tradeEntrySchema, validators_1.dataValidator);
//# sourceMappingURL=trade.schema.js.map