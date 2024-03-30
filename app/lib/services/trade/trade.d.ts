import type { Application } from '../../declarations';
import { TradeService } from './trade.class';
import { tradePath } from './trade.shared';
export * from './trade.class';
export * from './trade.schema';
export declare const trade: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [tradePath]: TradeService;
    }
}
