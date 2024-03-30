import type { Application } from '../../declarations';
import { SettingService } from './setting.class';
import { settingPath } from './setting.shared';
export * from './setting.class';
export * from './setting.schema';
export declare const setting: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [settingPath]: SettingService;
    }
}
