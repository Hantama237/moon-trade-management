import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Trade, TradeData, TradeEntry, TradePatch, TradeQuery } from './trade.schema';
export type { Trade, TradeData, TradePatch, TradeQuery };
export interface TradeParams extends KnexAdapterParams<TradeQuery> {
}
export declare class TradeService<ServiceParams extends Params = TradeParams> extends KnexService<Trade, TradeData, TradeParams, TradePatch> {
    getAccountSummary(): Promise<{
        success: boolean;
        message: string;
        data: {
            balance: any;
            profit: any;
            profit_percent: string;
            loss: any;
            loss_percent: string;
        };
    }>;
    getTradeHistory(): Promise<{
        success: boolean;
        message: string;
        data: {
            symbol: string;
            id: number;
            size: number;
            user: {
                password?: string | undefined;
                id: number;
                email: string;
            };
            entry_date: number;
            exit_date: number;
            entry_price: number;
            stop_loss_price: number;
            take_profit_price: number;
            notes: string;
            snapshot_path: string;
            user_id: number;
            binance_order_id: number;
            realized_pnl: number;
            fee: number;
        }[];
    }>;
    addBinanceTrade(data: TradeEntry, params: TradeParams): Promise<{
        success: boolean;
        message: string;
    }>;
    calculatePositionSize(data: TradeData, params: TradeParams): Promise<{
        success: boolean;
        message: string;
        data: {
            risk: number;
            distance: string;
            size: string;
            size_crypto: string;
        };
    }>;
    syncTrade(trade_id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            success: boolean;
            message: string;
            data: {
                realized_pnl: number;
                fee: number;
            };
        };
    }>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
