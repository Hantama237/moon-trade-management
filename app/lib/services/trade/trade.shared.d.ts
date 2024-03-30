import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Trade, TradeData, TradePatch, TradeQuery, TradeService } from './trade.class';
export type { Trade, TradeData, TradePatch, TradeQuery };
export type TradeClientService = Pick<TradeService<Params<TradeQuery>>, (typeof tradeMethods)[number]>;
export declare const tradePath = "trade";
export declare const tradeMethods: readonly ["find", "get", "create", "patch", "remove", "getAccountSummary", "addBinanceTrade", "calculatePositionSize", "getTradeHistory", "syncTrade"];
export declare const tradeClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [tradePath]: TradeClientService;
    }
}
