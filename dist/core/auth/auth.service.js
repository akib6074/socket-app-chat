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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const jwt = require("jsonwebtoken");
const common_2 = require("../../common");
const nestjs_redis_1 = require("nestjs-redis");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
let AuthService = AuthService_1 = class AuthService {
    constructor(usersRepository, bcryptService, configService, redisService, permissionService, jwtService) {
        this.usersRepository = usersRepository;
        this.bcryptService = bcryptService;
        this.configService = configService;
        this.redisService = redisService;
        this.permissionService = permissionService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async login(authDto) {
        try {
            const validateUser = await this.validateUser(authDto);
            const payload = await this.generatePayload(validateUser);
            const accessToken = await this.generateToken(payload);
            await this.redisService
                .getClient(common_2.Redis.REDIS_SESSION)
                .set(accessToken, JSON.stringify(payload));
            payload.accessToken = accessToken;
            return payload;
        }
        catch (error) {
            throw new common_2.SystemException(error.message);
        }
    }
    async validateUser(authDto) {
        try {
            const user = await this.usersRepository.findOne({ where: { email: authDto?.email } });
            if (!user) {
                throw new common_2.SystemException({
                    status: common_1.HttpStatus.BAD_REQUEST,
                    message: "Wrong credentials!"
                });
            }
            const isPasswordMatched = await this.bcryptService.comparePassword(authDto.password, user?.password);
            if (!isPasswordMatched) {
                throw new common_2.SystemException({
                    status: common_1.HttpStatus.BAD_REQUEST,
                    message: "User password is not valid",
                });
            }
            return user;
        }
        catch (error) {
            console.log(error);
            throw new common_2.SystemException(error.message);
        }
    }
    async generatePayload(userDto) {
        const userResponseDto = new common_2.UserResponseDto();
        userResponseDto.id = userDto.id;
        userResponseDto.userId = userDto?.userId;
        userResponseDto.firstName = userDto?.firstName;
        userResponseDto.lastName = userDto?.lastName;
        userResponseDto.email = userDto?.email;
        userResponseDto.isUser = true;
        return Promise.resolve(userResponseDto);
    }
    async generateToken(payload) {
        const privateKEY = this.configService
            .get('PRIVATE_KEY')
            .replace(/\\n/g, '\n');
        let accessToken = jwt.sign({ ...payload }, privateKEY, {
            expiresIn: '365d',
            algorithm: 'RS256',
        });
        this.logger.log('access token: ' + accessToken);
        return Promise.resolve(accessToken);
    }
    async loginOut() {
        try {
            const accessToken = this.permissionService.returnRequest().accessToken;
            await this.redisService.getClient(common_2.Redis.REDIS_SESSION).del(accessToken);
            return true;
        }
        catch (error) {
            console.warn(error.message);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(common_2.UsersEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, common_2.BcryptService, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof nestjs_redis_1.RedisService !== "undefined" && nestjs_redis_1.RedisService) === "function" ? _c : Object, common_2.PermissionService, typeof (_d = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _d : Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map