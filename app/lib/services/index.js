"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const setting_1 = require("./setting/setting");
const trade_1 = require("./trade/trade");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(setting_1.setting);
    app.configure(trade_1.trade);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map