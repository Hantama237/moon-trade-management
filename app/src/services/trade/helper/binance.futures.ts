import { feathers } from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import { USDMClient, OrderSide, FuturesOrderType, NewOrderResult, NewOrderError } from 'binance'
const app = feathers().configure(configuration())
const API_KEY = '3fe8b4b3eb2e074645f1414ddba174e3c93b8fb23760cc1525fe4ec86dca1f3e'//app.get('binance_api_key');
const API_SECRET = '4d392b80d9b86221523a430926a20165eb06bfc5577466c5aca85f42736c3da3'//app.get('binance_api_secret');

export const BinanceFuturesClient = new USDMClient({
  api_key: API_KEY,
  api_secret: API_SECRET,
},undefined,true);

export interface EntryResult {
    success: boolean;
    message: string;
    data?: (NewOrderResult | NewOrderError)[];
}

export async function newEntryWithTPSL(symbol: string, side: OrderSide, quantity: string, sl_price: string, tp_price: string): Promise<EntryResult>{
    let responses = await BinanceFuturesClient.submitMultipleOrders([
        {
            symbol: symbol,
            side: side,
            type: "MARKET",
            quantity: quantity
        }
    ])
    if('clientOrderId' in responses[0]){
        responses.concat(await BinanceFuturesClient.submitMultipleOrders([
            {
                symbol:symbol,
                side: side == "SELL" ? "BUY" : "SELL",
                type: "STOP_MARKET",
                closePosition: "true",
                stopPrice: sl_price,
                timeInForce: 'GTE_GTC'
            },
            {
                symbol:symbol,
                side: side == "SELL" ? "BUY" : "SELL",
                type: "TAKE_PROFIT_MARKET",
                closePosition: "true",
                stopPrice: tp_price,
                timeInForce: 'GTE_GTC'
            }
        ]))
        console.log(responses);
        return {
            "success": true,
            "message": "success",
            "data": responses
        };
    }
    return {
        "success": false,
        "message": responses[0].msg,
    };
}
export function getPositionSize(risk: number, price: number,sl_price: number){
    return ((risk/Math.abs(sl_price - price))*price);
}