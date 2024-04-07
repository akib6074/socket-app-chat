"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_redis_1 = require("nestjs-redis");
const redis_enum_1 = require("../enum/redis.enum");
let RedisConfigModule = class RedisConfigModule {
};
exports.RedisConfigModule = RedisConfigModule;
exports.RedisConfigModule = RedisConfigModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            nestjs_redis_1.RedisModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => [
                    {
                        url: configService.get(redis_enum_1.Redis.REDIS_SESSION),
                        name: 'REDIS_SESSION',
                    },
                    {
                        url: configService.get(redis_enum_1.Redis.REDIS_REGISTER),
                        name: 'REDIS_REGISTER',
                    },
                    {
                        url: configService.get(redis_enum_1.Redis.REDIS_PREVENT_DOS_ATT),
                        name: 'REDIS_PREVENT_DOS_ATT',
                    },
                    {
                        url: configService.get(redis_enum_1.Redis.REDIS_TMP_FILE),
                        name: 'REDIS_TMP_FILE',
                    },
                ],
                inject: [config_1.ConfigService],
            }),
        ],
    })
], RedisConfigModule);
//# sourceMappingURL=redis-config.module.js.map