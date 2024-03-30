import { USDMClient, OrderSide, NewOrderResult } from 'binance';
export declare const BinanceFuturesClient: USDMClient;
export interface EntryResult {
    success: boolean;
    message: string;
    data?: NewOrderResult;
}
export declare function newEntryWithTPSL(symbol: string, side: OrderSide, quantity: string, sl_price: string, tp_price: string): Promise<EntryResult>;
export declare function getTradeResult(symbol: string, startTime: number, endTime: number): Promise<{
    success: boolean;
    message: string;
    data: {
        realized_pnl: number;
        fee: number;
    };
}>;
export declare function getPositionSize(risk: number, price: number, sl_price: number): number;
