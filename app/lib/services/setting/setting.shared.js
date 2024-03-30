"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingClient = exports.settingMethods = exports.settingPath = void 0;
exports.settingPath = 'setting';
exports.settingMethods = ['find', 'get', 'create', 'patch', 'remove', 'getSettingValue', 'updateExchangeInfo', 'getAssetPrecision'];
const settingClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.settingPath, connection.service(exports.settingPath), {
        methods: exports.settingMethods
    });
};
exports.settingClient = settingClient;
//# sourceMappingURL=setting.shared.js.map