"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.SettingService = void 0;
const knex_1 = require("@feathersjs/knex");
const binance_futures_1 = require("../../helper/binance.futures");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class SettingService extends knex_1.KnexService {
    async getSettingValue(key) {
        let settings = await this.find({
            query: {
                key: key,
                $limit: 1
            }
        });
        return {
            success: true,
            message: 'success',
            data: settings.data[0].value
        };
    }
    async updateExchangeInfo() {
        let exchange_info = await binance_futures_1.BinanceFuturesClient.getExchangeInfo();
        let symbol_precision = [];
        for (let crypto of exchange_info.symbols) {
            symbol_precision.push({
                symbol: crypto.symbol,
                precision: crypto.quantityPrecision
            });
        }
        this.update(3, {
            key: 'precision',
            value: JSON.stringify(symbol_precision)
        });
        return {
            success: true,
            message: "success",
            data: true
        };
    }
    async getAssetPrecision(symbol) {
        let setting = await this.get(3);
        let precisions = JSON.parse(setting.value);
        for (let precision of precisions) {
            if (precision.symbol == symbol) {
                return {
                    success: true,
                    message: "success",
                    data: precision.precision
                };
            }
        }
        return {
            success: false,
            message: "not found",
        };
    }
}
exports.SettingService = SettingService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mysqlClient'),
        name: 'setting'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=setting.class.js.map