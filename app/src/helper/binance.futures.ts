import { feathers } from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import { USDMClient, OrderSide, FuturesOrderType, NewOrderResult, NewOrderError, NewFuturesOrderParams, FuturesPositionTrade } from 'binance'
const app = feathers().configure(configuration())
// const API_KEY = '3fe8b4b3eb2e074645f1414ddba174e3c93b8fb23760cc1525fe4ec86dca1f3e'
// const API_SECRET = '4d392b80d9b86221523a430926a20165eb06bfc5577466c5aca85f42736c3da3'
const API_KEY = app.get('binance_api_key');
const API_SECRET = app.get('binance_api_secret');

export const BinanceFuturesClient = new USDMClient({
  api_key: API_KEY,
  api_secret: API_SECRET,
},undefined,false);

export interface EntryResult {
    success: boolean;
    message: string;
    data?: NewOrderResult;
}

export async function newEntryWithTPSL(symbol: string,type: FuturesOrderType, side: OrderSide, quantity: string, price: string, sl_price: string, tp_price: string, ): Promise<EntryResult>{
    let responses : any[] = [];
    
    let response = await BinanceFuturesClient.submitNewOrder(
        {
            symbol: symbol,
            side: side,
            type: type,
            quantity: quantity,
            price: price,
            timeInForce: 'GTC'
        } as NewFuturesOrderParams<string>
    )
    responses.push(response);
    if('clientOrderId' in response){
        response = await BinanceFuturesClient.submitNewOrder(
            {
                symbol:symbol,
                side: side == "SELL" ? "BUY" : "SELL",
                type: "STOP_MARKET",
                closePosition: "true",
                stopPrice: sl_price,
                timeInForce: 'GTE_GTC'
            } 
        )
        responses.push(response);
        if('clientOrderId' in response){
            if(parseFloat(tp_price) > 0){
                response = await BinanceFuturesClient.submitNewOrder(
                    {
                        symbol:symbol,
                        side: side == "SELL" ? "BUY" : "SELL",
                        type: "TAKE_PROFIT_MARKET",
                        closePosition: "true",
                        stopPrice: tp_price,
                        timeInForce: 'GTE_GTC'
                    } as NewFuturesOrderParams<string>
                )
                responses.push(response);
            }
        }
        return {
            "success": true,
            "message": "success",
            "data": responses[0]
        };
    }
    return {
        "success": false,
        "message": responses[0].msg,
        "data":undefined
    };
}
export async function getTradeResult(symbol: string, startTime: number, endTime: number){
    let response = await BinanceFuturesClient.getIncomeHistory({
        symbol: symbol,
        startTime: startTime,
        endTime: endTime
    });
    let fee = 0
    let realized_pnl = 0;
    for(let income of response){
        if(income.incomeType == 'REALIZED_PNL'){
            realized_pnl += parseFloat(income.income)
        }else{
            fee += parseFloat(income.income)
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
export async function getCurrentPrice(symbol: string){
    let response = await BinanceFuturesClient.getMarkPrice({
        symbol: symbol
    })
    if('markPrice' in response) return {
        "success": true,
        "message": "success",
        "data": response.markPrice
    }
    return {
        "success": false,
        "message": response,
        "data":undefined
    };
    
}
export function getPositionSize(risk: number, price: number,sl_price: number){
    return ((risk/Math.abs(sl_price - price))*price);
}