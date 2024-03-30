"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRuntime = void 0;
const logger_1 = require("../logger");
const logRuntime = async (context, next) => {
    const startTime = Date.now();
    // Run everything else (other hooks and service call)
    await next();
    const duration = Date.now() - startTime;
    logger_1.logger.info(`Calling ${context.method} on ${context.path} took ${duration}ms`);
};
exports.logRuntime = logRuntime;
//# sourceMappingURL=log-runtime.js.map