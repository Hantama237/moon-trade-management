import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { TradeService } from './trade.class';
export declare const tradeSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    entry_date: import("@sinclair/typebox").TNumber;
    exit_date: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString<string>;
    entry_price: import("@sinclair/typebox").TNumber;
    stop_loss_price: import("@sinclair/typebox").TNumber;
    take_profit_price: import("@sinclair/typebox").TNumber;
    size: import("@sinclair/typebox").TNumber;
    notes: import("@sinclair/typebox").TString<string>;
    snapshot_path: import("@sinclair/typebox").TString<string>;
    user_id: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    binance_order_id: import("@sinclair/typebox").TNumber;
    realized_pnl: import("@sinclair/typebox").TNumber;
    fee: import("@sinclair/typebox").TNumber;
}>;
export type Trade = Static<typeof tradeSchema>;
export declare const tradeValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const tradeResolver: import("@feathersjs/schema").Resolver<{
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
}, HookContext<TradeService<import("./trade.class").TradeParams>>>;
export declare const tradeExternalResolver: import("@feathersjs/schema").Resolver<{
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
}, HookContext<TradeService<import("./trade.class").TradeParams>>>;
export declare const tradeDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    entry_date: import("@sinclair/typebox").TNumber;
    exit_date: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString<string>;
    entry_price: import("@sinclair/typebox").TNumber;
    stop_loss_price: import("@sinclair/typebox").TNumber;
    take_profit_price: import("@sinclair/typebox").TNumber;
    size: import("@sinclair/typebox").TNumber;
    notes: import("@sinclair/typebox").TString<string>;
    snapshot_path: import("@sinclair/typebox").TString<string>;
    user_id: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    binance_order_id: import("@sinclair/typebox").TNumber;
    realized_pnl: import("@sinclair/typebox").TNumber;
    fee: import("@sinclair/typebox").TNumber;
}>, ["symbol", "entry_price", "stop_loss_price", "take_profit_price", "size", "binance_order_id", "entry_date"]>;
export type TradeData = Static<typeof tradeDataSchema>;
export declare const tradeDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const tradeDataResolver: import("@feathersjs/schema").Resolver<{
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
}, HookContext<TradeService<import("./trade.class").TradeParams>>>;
export declare const tradePatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    entry_date: import("@sinclair/typebox").TNumber;
    exit_date: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString<string>;
    entry_price: import("@sinclair/typebox").TNumber;
    stop_loss_price: import("@sinclair/typebox").TNumber;
    take_profit_price: import("@sinclair/typebox").TNumber;
    size: import("@sinclair/typebox").TNumber;
    notes: import("@sinclair/typebox").TString<string>;
    snapshot_path: import("@sinclair/typebox").TString<string>;
    user_id: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    binance_order_id: import("@sinclair/typebox").TNumber;
    realized_pnl: import("@sinclair/typebox").TNumber;
    fee: import("@sinclair/typebox").TNumber;
}>>;
export type TradePatch = Static<typeof tradePatchSchema>;
export declare const tradePatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const tradePatchResolver: import("@feathersjs/schema").Resolver<{
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
}, HookContext<TradeService<import("./trade.class").TradeParams>>>;
export declare const tradeQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    entry_date: import("@sinclair/typebox").TNumber;
    exit_date: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString<string>;
    entry_price: import("@sinclair/typebox").TNumber;
    stop_loss_price: import("@sinclair/typebox").TNumber;
    take_profit_price: import("@sinclair/typebox").TNumber;
    size: import("@sinclair/typebox").TNumber;
    notes: import("@sinclair/typebox").TString<string>;
    snapshot_path: import("@sinclair/typebox").TString<string>;
    user_id: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    binance_order_id: import("@sinclair/typebox").TNumber;
    realized_pnl: import("@sinclair/typebox").TNumber;
    fee: import("@sinclair/typebox").TNumber;
}>, ["id", "entry_date", "symbol"]>;
export declare const tradeQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        entry_date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("symbol" | "id" | "entry_date")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        entry_date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<string>;
                $gte: import("@sinclair/typebox").TString<string>;
                $lt: import("@sinclair/typebox").TString<string>;
                $lte: import("@sinclair/typebox").TString<string>;
                $ne: import("@sinclair/typebox").TString<string>;
                $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            entry_date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        entry_date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    entry_date: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type TradeQuery = Static<typeof tradeQuerySchema>;
export declare const tradeQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const tradeQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        symbol?: number | undefined;
        id?: number | undefined;
        entry_date?: number | undefined;
    };
    $select: ("symbol" | "id" | "entry_date")[];
    $and: ({
        symbol?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string | string[];
            $nin: string | string[];
        } & {}> | undefined;
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
        entry_date?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
    } | {
        $or: {
            symbol?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string | string[];
                $nin: string | string[];
            } & {}> | undefined;
            id?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number | number[];
                $nin: number | number[];
            } & {}> | undefined;
            entry_date?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number | number[];
                $nin: number | number[];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        symbol?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string | string[];
            $nin: string | string[];
        } & {}> | undefined;
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
        entry_date?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
    }[];
}> & {
    symbol?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string | string[];
        $nin: string | string[];
    } & {}> | undefined;
    id?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number | number[];
        $nin: number | number[];
    } & {}> | undefined;
    entry_date?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number | number[];
        $nin: number | number[];
    } & {}> | undefined;
} & {}, HookContext<TradeService<import("./trade.class").TradeParams>>>;
export declare const tradeEntrySchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    entry_date: import("@sinclair/typebox").TNumber;
    exit_date: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString<string>;
    entry_price: import("@sinclair/typebox").TNumber;
    stop_loss_price: import("@sinclair/typebox").TNumber;
    take_profit_price: import("@sinclair/typebox").TNumber;
    size: import("@sinclair/typebox").TNumber;
    notes: import("@sinclair/typebox").TString<string>;
    snapshot_path: import("@sinclair/typebox").TString<string>;
    user_id: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    binance_order_id: import("@sinclair/typebox").TNumber;
    realized_pnl: import("@sinclair/typebox").TNumber;
    fee: import("@sinclair/typebox").TNumber;
}>, ["symbol", "entry_price", "stop_loss_price", "take_profit_price", "size"]>;
export type TradeEntry = Static<typeof tradeEntrySchema>;
export declare const tradeEntryValidator: import("@feathersjs/schema").Validator<any, any>;
