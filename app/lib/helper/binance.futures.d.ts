import { USDMClient, OrderSide, FuturesOrderType, NewOrderResult } from 'binance';
export declare const BinanceFuturesClient: USDMClient;
export interface EntryResult {
    success: boolean;
    message: string;
    data?: NewOrderResult;
}
export declare function newEntryWithTPSL(symbol: string, type: FuturesOrderType, side: OrderSide, quantity: string, price: string, sl_price: string, tp_price: string): Promise<EntryResult>;
export declare function getTradeResult(symbol: string, startTime: number, endTime: number): Promise<{
    success: boolean;
    message: string;
    data: {
        realized_pnl: number;
        fee: number;
    };
}>;
export declare function getCurrentPrice(symbol: string): Promise<{
    success: boolean;
    message: string;
    data: import("binance").numberInString;
} | {
    success: boolean;
    message: import("binance").MarkPrice[];
    data: undefined;
}>;
export declare function getPositionSize(risk: number, price: number, sl_price: number): number;
