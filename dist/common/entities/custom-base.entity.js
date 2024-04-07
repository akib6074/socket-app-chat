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
exports.CustomBaseEntity = void 0;
const typeorm_1 = require("typeorm");
const enum_config_1 = require("../enum/enum.config");
class CustomBaseEntity extends typeorm_1.BaseEntity {
}
exports.CustomBaseEntity = CustomBaseEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CustomBaseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)({
        default: 1,
    }),
    __metadata("design:type", Number)
], CustomBaseEntity.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        name: "is_active",
        enum: enum_config_1.ActiveStatus,
        default: `${enum_config_1.ActiveStatus.enabled}`,
    }),
    __metadata("design:type", Number)
], CustomBaseEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "created_by", nullable: true }),
    __metadata("design:type", Number)
], CustomBaseEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "updated_by", nullable: true }),
    __metadata("design:type", Number)
], CustomBaseEntity.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp",
        name: "created_at",
        nullable: true,
    }),
    __metadata("design:type", Date)
], CustomBaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "timestamp",
        name: "updated_at",
        nullable: true,
    }),
    __metadata("design:type", Date)
], CustomBaseEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=custom-base.entity.js.map