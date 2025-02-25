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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsController = void 0;
const common_1 = require("@nestjs/common");
const chats_service_1 = require("./chats.service");
const create_chat_dto_1 = require("./dto/create-chat.dto");
const update_chat_dto_1 = require("./dto/update-chat.dto");
const common_2 = require("../../common");
const swagger_1 = require("@nestjs/swagger");
const message_dto_1 = require("./dto/message.dto");
let ChatsController = class ChatsController {
    constructor(chatsService, responseService) {
        this.chatsService = chatsService;
        this.responseService = responseService;
    }
    create(createChatDto) {
        const payload = this.chatsService.create(createChatDto);
        return this.responseService.toDtoResponse(common_1.HttpStatus.OK, "Successful", payload);
    }
    sendMessage(messageDto) {
        const payload = this.chatsService.sendMessage(messageDto);
        return this.responseService.toDtoResponse(common_1.HttpStatus.OK, "Successful", payload);
    }
    findAll() {
        return this.chatsService.findAll();
    }
    findOne(id) {
        const payload = this.chatsService.findOne(+id);
        return this.responseService.toDtosResponse(common_1.HttpStatus.OK, "Successful", payload);
    }
    update(id, updateChatDto) {
        return this.chatsService.update(+id, updateChatDto);
    }
    remove(id) {
        return this.chatsService.remove(+id);
    }
};
exports.ChatsController = ChatsController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_2.DtoValidationPipe({ skipMissingProperties: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_dto_1.CreateChatDto]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_2.DtoValidationPipe({ skipMissingProperties: false }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.SendMessageDto]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chat_dto_1.UpdateChatDto]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatsController.prototype, "remove", null);
exports.ChatsController = ChatsController = __decorate([
    (0, swagger_1.ApiTags)("Chat"),
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chats_service_1.ChatsService,
        common_2.ResponseService])
], ChatsController);
//# sourceMappingURL=chats.controller.js.map