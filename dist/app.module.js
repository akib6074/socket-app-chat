"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const core_module_1 = require("./core/core.module");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const public_middleware_1 = require("./common/middlewares/public.middleware");
const pagination_middleware_1 = require("./common/middlewares/pagination.middleware");
const middleware_config_1 = require("./common/middlewares/middleware.config");
const public_urls_1 = require("./public.urls");
const database_module_1 = require("./common/database/database.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes("*");
        consumer.apply(public_middleware_1.PublicMiddleware).forRoutes("*");
        consumer.apply(pagination_middleware_1.PaginationMiddleware).forRoutes("*");
        consumer
            .apply(middleware_config_1.AuthMiddleware)
            .exclude(...public_urls_1.publicUrls)
            .forRoutes("*");
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.TypeormConfigModule,
            core_module_1.CoreModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map