import type { TransportConnection, Application } from '@feathersjs/feathers';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import './services/setting/setting.shared';
export type { Setting, SettingData, SettingQuery, SettingPatch } from './services/setting/setting.shared';
import './services/trade/trade.shared';
export type { Trade, TradeData, TradeQuery, TradePatch } from './services/trade/trade.shared';
import './services/users/users.shared';
export type { User, UserData, UserQuery, UserPatch } from './services/users/users.shared';
export interface Configuration {
    connection: TransportConnection<ServiceTypes>;
}
export interface ServiceTypes {
}
export type ClientApplication = Application<ServiceTypes, Configuration>;
/**
 * Returns a typed client for the my-app app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => ClientApplication;
