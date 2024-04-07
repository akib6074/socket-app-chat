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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const custom_base_entity_1 = require("./custom-base.entity");
const chat_entity_1 = require("./chat.entity");
let UsersEntity = class UsersEntity extends custom_base_entity_1.CustomBaseEntity {
};
exports.UsersEntity = UsersEntity;
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'first_name',
        unique: false,
        nullable: false,
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'last_name',
        unique: false,
        nullable: false,
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'email', unique: true, nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'user_id', unique: false, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'password', unique: false, nullable: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'reset_password_token',
        type: 'varchar',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'reset_password_validity',
        type: 'date',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "resetPasswordValidity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'reset_password_flag',
        type: 'boolean',
        unique: false,
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "resetPasswordFlag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address', type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone', type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { array: true, nullable: true }),
    __metadata("design:type", Array)
], UsersEntity.prototype, "friend_list", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => chat_entity_1.ChatEntity, (chatEntity) => chatEntity.sender),
    __metadata("design:type", Array)
], UsersEntity.prototype, "senderMessages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => chat_entity_1.ChatEntity, (chatEntity) => chatEntity.receiver),
    __metadata("design:type", Array)
], UsersEntity.prototype, "receiverMessages", void 0);
exports.UsersEntity = UsersEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'co_users', schema: 'public' }),
    (0, typeorm_1.Index)(['id', 'email', 'userId'])
], UsersEntity);
//# sourceMappingURL=user.entity.js.map