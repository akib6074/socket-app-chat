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
exports.UniqueIdLogicEntity = void 0;
const typeorm_1 = require("typeorm");
const custom_base_entity_1 = require("./custom-base.entity");
let UniqueIdLogicEntity = class UniqueIdLogicEntity extends custom_base_entity_1.CustomBaseEntity {
};
exports.UniqueIdLogicEntity = UniqueIdLogicEntity;
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "id_for",
        nullable: false,
    }),
    __metadata("design:type", String)
], UniqueIdLogicEntity.prototype, "idFor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        name: "id_length",
        nullable: false,
    }),
    __metadata("design:type", Number)
], UniqueIdLogicEntity.prototype, "idLength", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "id_format",
        nullable: true,
    }),
    __metadata("design:type", String)
], UniqueIdLogicEntity.prototype, "idFormat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "token_reset_logic",
        nullable: true,
    }),
    __metadata("design:type", String)
], UniqueIdLogicEntity.prototype, "tokenResetLogic", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        name: "starting_id",
        nullable: false,
    }),
    __metadata("design:type", Number)
], UniqueIdLogicEntity.prototype, "startingId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "int",
        name: "last_gen_id",
        nullable: true,
    }),
    __metadata("design:type", Number)
], UniqueIdLogicEntity.prototype, "lastGenId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bit",
        name: "reset_flag",
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], UniqueIdLogicEntity.prototype, "resetFlag", void 0);
exports.UniqueIdLogicEntity = UniqueIdLogicEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "rcon_unique_id_logic", schema: "dbo" })
], UniqueIdLogicEntity);
//# sourceMappingURL=unique-id.entity.js.map