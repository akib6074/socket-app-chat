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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_2 = require("../../common");
const dummy_user_1 = require("../../common/dtos/jsons/dummy-user");
let UsersService = class UsersService {
    constructor(usersRepository, exceptionService, bcryptService, permissionService, conversionService, requestService) {
        this.usersRepository = usersRepository;
        this.exceptionService = exceptionService;
        this.bcryptService = bcryptService;
        this.permissionService = permissionService;
        this.conversionService = conversionService;
        this.requestService = requestService;
        this.create = async (createUserDto) => {
            try {
                createUserDto.password = await this.bcryptService.hashPassword(createUserDto.password);
                createUserDto = this.requestService.forCreate(createUserDto);
                const dtoToEntity = await this.conversionService.toEntity(createUserDto);
                const data = this.usersRepository.create(dtoToEntity);
                await this.usersRepository.save(data);
                return 'User Created Successfully!';
            }
            catch (error) {
                throw new common_2.SystemException(error);
            }
        };
        this.findAll = async () => {
            try {
                const userId = this.permissionService.returnRequest().id;
                const friendIds = await this.usersRepository.findOne({
                    select: ['friend_list'],
                    where: { ...common_2.isActive, id: userId },
                });
                const list = await this.usersRepository.find({
                    select: ['id', 'firstName', 'lastName'],
                    where: {
                        id: (0, typeorm_2.In)(friendIds.friend_list)
                    }
                });
                return list;
            }
            catch (error) {
                console.warn(error.message);
            }
        };
        this.findOneByEmail = async (emailOrUserName) => {
            try {
                const user = await this.usersRepository.findOne({
                    where: { email: emailOrUserName },
                });
                this.exceptionService.notFound(user, 'User is not found by phone or email');
                return await this.conversionService.toDto(user);
            }
            catch (error) {
                throw new common_2.SystemException(error.message);
            }
        };
        this.seeder = async () => {
            try {
                const data = dummy_user_1.dummyusers;
                data.map(async (item) => {
                    await this.usersRepository.save(item);
                });
                return true;
            }
            catch (error) {
                throw new common_2.SystemException(error);
            }
        };
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(common_2.UsersEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, common_2.ExceptionService,
        common_2.BcryptService,
        common_2.PermissionService,
        common_2.ConversionService,
        common_2.RequestService])
], UsersService);
//# sourceMappingURL=users.service.js.map