"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.featherErrorHandler = void 0;
const errors_1 = __importDefault(require("@feathersjs/errors"));
const featherErrorHandler = async (context) => {
    if (context.error) {
        const error = context.error;
        if (!error.code) {
            const newError = new errors_1.default.GeneralError('server error');
            context.error = newError;
            return context;
        }
        if (error.code === 404 || process.env.NODE_ENV === 'production') {
            error.stack = null;
        }
        return context;
    }
};
exports.featherErrorHandler = featherErrorHandler;
//# sourceMappingURL=error-handler.js.map