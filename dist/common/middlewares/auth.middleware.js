"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_redis_1 = require("nestjs-redis");
const error_dto_1 = require("../dtos/reponse/error.dto");
const response_dto_1 = require("../dtos/reponse/response.dto");
const system_error_dto_1 = require("../dtos/reponse/system-error.dto");
const redis_enum_1 = require("../enum/redis.enum");
const jwt = require("jsonwebtoken");
let AuthMiddleware = AuthMiddleware_1 = class AuthMiddleware {
    constructor(configService, redisService) {
        this.configService = configService;
        this.redisService = redisService;
    }
    static toResponse(res, message) {
        const systemErrorDto = new system_error_dto_1.SystemErrorDto('UNAUTHORIZED', 'Error', message);
        const errorDto = new error_dto_1.ErrorDto(null, systemErrorDto);
        const responseDto = new response_dto_1.ResponseDto(new Date().getTime(), common_1.HttpStatus.UNAUTHORIZED, message, errorDto, null);
        return res.json(responseDto);
    }
    async use(req, res, next) {
        try {
            const token = req?.headers['authorization']?.split('Bearer ')[1];
            if (!token) {
                return AuthMiddleware_1.toResponse(res, 'Token is not found in requested header!');
            }
            let expireTime = this.configService.get(redis_enum_1.Redis.TOKEN_EXPIRE_TIME);
            let tokenExpireTime = 3600;
            const privateKEY = this.configService
                .get('PRIVATE_KEY')
                .replace(/\\n/g, '\n');
            jwt.verify(token, privateKEY, {
                algorithms: ['RS256'],
            }, (err, decoded) => {
                if (err)
                    return AuthMiddleware_1.toResponse(res, 'Token is invalid!!');
                else {
                    const token = decoded;
                    expireTime = token.exp - token.iat;
                }
            });
            await this.redisService
                .getClient(redis_enum_1.Redis.REDIS_SESSION)
                .expire(token, expireTime)
                .then((res) => {
                tokenExpireTime = res;
            });
            if (tokenExpireTime <= 0) {
                return AuthMiddleware_1.toResponse(res, 'Expired due to inactivity!');
            }
            next();
        }
        catch (error) {
            console.log(error);
            return AuthMiddleware_1.toResponse(res, 'Authorization is denied!');
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = AuthMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        nestjs_redis_1.RedisService])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map