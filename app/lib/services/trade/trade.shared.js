"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradeClient = exports.tradeMethods = exports.tradePath = void 0;
exports.tradePath = 'trade';
exports.tradeMethods = ['find', 'get', 'create', 'patch', 'remove', 'getAccountSummary', 'addBinanceTrade', 'calculatePositionSize', 'getTradeHistory', 'syncTrade'];
const tradeClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.tradePath, connection.service(exports.tradePath), {
        methods: exports.tradeMethods
    });
};
exports.tradeClient = tradeClient;
//# sourceMappingURL=trade.shared.js.map