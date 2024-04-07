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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ChatsService = class ChatsService {
    constructor(chatEntityRepository, usersEntityRepository, permissionService, requestService, conversionService) {
        this.chatEntityRepository = chatEntityRepository;
        this.usersEntityRepository = usersEntityRepository;
        this.permissionService = permissionService;
        this.requestService = requestService;
        this.conversionService = conversionService;
        this.create = async (createChatDto) => {
            try {
                const senderId = this.permissionService.returnRequest().id;
                const user = await this.usersEntityRepository.findOne({ where: { id: senderId } });
                createChatDto.sender = user;
                createChatDto = this.requestService.forCreate(createChatDto);
                const dtoToEntity = await this.conversionService.toEntity(createChatDto);
                const data = this.chatEntityRepository.create(dtoToEntity);
                const payload = await this.chatEntityRepository.save(data);
                return this.conversionService.toDto(payload);
            }
            catch (error) {
                throw new common_2.SystemException(error);
            }
        };
        this.sendMessage = async (messageDto) => {
            try {
                return Promise.resolve(messageDto);
            }
            catch (error) {
                throw new common_2.SystemException(error);
            }
        };
        this.findOne = async (id) => {
            try {
                const userId = this.permissionService.returnRequest().id;
                const allMessages = await this.chatEntityRepository.query(`
      SELECT cc.id, cc.message, cu.id AS sender_id, cu2.id AS receiver_id,
      CASE 
        WHEN cu2.id = ${userId} THEN false
          ELSE true
        END AS myself
      FROM co_chats cc
      LEFT JOIN co_users cu ON cu.id = cc.sender_id
      LEFT JOIN co_users cu2 ON cu2.id = cc.receiver_id
      WHERE (sender_id = ${id} AND receiver_id = ${userId})
      OR (receiver_id = ${id} AND sender_id = ${userId})
      ORDER BY id ASC;
      `);
                return allMessages;
            }
            catch (error) {
                throw new common_2.SystemException(error);
            }
        };
    }
    findAll() {
        return `This action returns all chats`;
    }
    update(id, updateChatDto) {
        return `This action updates a #${id} chat`;
    }
    remove(id) {
        return `This action removes a #${id} chat`;
    }
};
exports.ChatsService = ChatsService;
exports.ChatsService = ChatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(common_2.ChatEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(common_2.UsersEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, common_2.PermissionService,
        common_2.RequestService,
        common_2.ConversionService])
], ChatsService);
//# sourceMappingURL=chats.service.js.map