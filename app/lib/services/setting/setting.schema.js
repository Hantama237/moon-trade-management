"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingQueryResolver = exports.settingQueryValidator = exports.settingQuerySchema = exports.settingQueryProperties = exports.settingPatchResolver = exports.settingPatchValidator = exports.settingPatchSchema = exports.settingDataResolver = exports.settingDataValidator = exports.settingDataSchema = exports.settingExternalResolver = exports.settingResolver = exports.settingValidator = exports.settingSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.settingSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    key: typebox_1.Type.String(),
    value: typebox_1.Type.String()
}, { $id: 'Setting', additionalProperties: false });
exports.settingValidator = (0, typebox_1.getValidator)(exports.settingSchema, validators_1.dataValidator);
exports.settingResolver = (0, schema_1.resolve)({});
exports.settingExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.settingDataSchema = typebox_1.Type.Pick(exports.settingSchema, ['key', 'value'], {
    $id: 'SettingData'
});
exports.settingDataValidator = (0, typebox_1.getValidator)(exports.settingDataSchema, validators_1.dataValidator);
exports.settingDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.settingPatchSchema = typebox_1.Type.Partial(exports.settingSchema, {
    $id: 'SettingPatch'
});
exports.settingPatchValidator = (0, typebox_1.getValidator)(exports.settingPatchSchema, validators_1.dataValidator);
exports.settingPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.settingQueryProperties = typebox_1.Type.Pick(exports.settingSchema, ['id', 'key']);
exports.settingQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.settingQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.settingQueryValidator = (0, typebox_1.getValidator)(exports.settingQuerySchema, validators_1.queryValidator);
exports.settingQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=setting.schema.js.map