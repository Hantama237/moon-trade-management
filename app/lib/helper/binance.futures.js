"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositionSize = exports.getTradeResult = exports.newEntryWithTPSL = exports.BinanceFuturesClient = void 0;
const feathers_1 = require("@feathersjs/feathers");
const configuration_1 = __importDefault(require("@feathersjs/configuration"));
const binance_1 = require("binance");
const app = (0, feathers_1.feathers)().configure((0, configuration_1.default)());
// const API_KEY = '3fe8b4b3eb2e074645f1414ddba174e3c93b8fb23760cc1525fe4ec86dca1f3e'
// const API_SECRET = '4d392b80d9b86221523a430926a20165eb06bfc5577466c5aca85f42736c3da3'
const API_KEY = app.get('binance_api_key');
const API_SECRET = app.get('binance_api_secret');
exports.BinanceFuturesClient = new binance_1.USDMClient({
    api_key: API_KEY,
    api_secret: API_SECRET,
}, undefined, false);
async function newEntryWithTPSL(symbol, side, quantity, sl_price, tp_price) {
    let responses = await exports.BinanceFuturesClient.submitMultipleOrders([
        {
            symbol: symbol,
            side: side,
            type: "MARKET",
            quantity: quantity
        }
    ]);
    if ('clientOrderId' in responses[0]) {
        let tp_sl_trade = [
            {
                symbol: symbol,
                side: side == "SELL" ? "BUY" : "SELL",
                type: "STOP_MARKET",
                closePosition: "true",
                stopPrice: sl_price,
                timeInForce: 'GTE_GTC'
            }
        ];
        if (parseFloat(tp_price) > 0) {
            tp_sl_trade.push({
                symbol: symbol,
                side: side == "SELL" ? "BUY" : "SELL",
                type: "TAKE_PROFIT_MARKET",
                closePosition: "true",
                stopPrice: tp_price,
                timeInForce: 'GTE_GTC'
            });
        }
        responses.concat(await exports.BinanceFuturesClient.submitMultipleOrders(tp_sl_trade));
        console.log(responses);
        return {
            "success": true,
            "message": "success",
            "data": responses[0]
        };
    }
    return {
        "success": false,
        "message": responses[0].msg,
        "data": undefined
    };
}
exports.newEntryWithTPSL = newEntryWithTPSL;
async function getTradeResult(symbol, startTime, endTime) {
    let response = await exports.BinanceFuturesClient.getIncomeHistory({
        symbol: symbol,
        startTime: startTime,
        endTime: endTime
    });
    let fee = 0;
    let realized_pnl = 0;
    for (let income of response) {
        if (income.incomeType == 'REALIZED_PNL') {
            realized_pnl += parseFloat(income.income);
        }
        else {
            fee += parseFloat(income.income);
        }
    }
    return {
        success: true,
        message: "success",
        data: {
            realized_pnl: realized_pnl,
            fee: fee
        }
    };
}
exports.getTradeResult = getTradeResult;
function getPositionSize(risk, price, sl_price) {
    return ((risk / Math.abs(sl_price - price)) * price);
}
exports.getPositionSize = getPositionSize;
//# sourceMappingURL=binance.futures.js.map