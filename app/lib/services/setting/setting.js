"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setting = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const setting_schema_1 = require("./setting.schema");
const setting_class_1 = require("./setting.class");
const setting_shared_1 = require("./setting.shared");
__exportStar(require("./setting.class"), exports);
__exportStar(require("./setting.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const setting = (app) => {
    // Register our service on the Feathers application
    app.use(setting_shared_1.settingPath, new setting_class_1.SettingService((0, setting_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: setting_shared_1.settingMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(setting_shared_1.settingPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(setting_schema_1.settingExternalResolver),
                schema_1.hooks.resolveResult(setting_schema_1.settingResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(setting_schema_1.settingQueryValidator), schema_1.hooks.resolveQuery(setting_schema_1.settingQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(setting_schema_1.settingDataValidator), schema_1.hooks.resolveData(setting_schema_1.settingDataResolver)],
            patch: [schema_1.hooks.validateData(setting_schema_1.settingPatchValidator), schema_1.hooks.resolveData(setting_schema_1.settingPatchResolver)],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.setting = setting;
//# sourceMappingURL=setting.js.map