import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Setting, SettingData, SettingPatch, SettingQuery, SettingService } from './setting.class';
export type { Setting, SettingData, SettingPatch, SettingQuery };
export type SettingClientService = Pick<SettingService<Params<SettingQuery>>, (typeof settingMethods)[number]>;
export declare const settingPath = "setting";
export declare const settingMethods: readonly ["find", "get", "create", "patch", "remove", "getSettingValue", "updateExchangeInfo", "getAssetPrecision"];
export declare const settingClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [settingPath]: SettingClientService;
    }
}
