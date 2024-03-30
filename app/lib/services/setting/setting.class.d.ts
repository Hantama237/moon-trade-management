import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Setting, SettingData, SettingPatch, SettingQuery } from './setting.schema';
export type { Setting, SettingData, SettingPatch, SettingQuery };
export interface SettingParams extends KnexAdapterParams<SettingQuery> {
}
export declare class SettingService<ServiceParams extends Params = SettingParams> extends KnexService<Setting, SettingData, SettingParams, SettingPatch> {
    getSettingValue(key: string): Promise<{
        success: boolean;
        message: string;
        data: string;
    }>;
    updateExchangeInfo(): Promise<{
        success: boolean;
        message: string;
        data: boolean;
    }>;
    getAssetPrecision(symbol: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
