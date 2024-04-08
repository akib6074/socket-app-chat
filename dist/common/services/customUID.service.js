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
exports.CustomeUIDService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_config_1 = require("../entities/entities.config");
const is_active_query_1 = require("../queries/is-active.query");
const moment_1 = require("moment");
let CustomeUIDService = class CustomeUIDService {
    constructor(uniqueIdLogicRepository) {
        this.uniqueIdLogicRepository = uniqueIdLogicRepository;
        this.generateCustomeId = async (prefix, format) => {
            try {
                const customUserId = await this.uniqueIdLogicRepository.findOne({
                    where: { idFor: prefix, ...is_active_query_1.isActive },
                });
                let number;
                let format = customUserId.idFormat;
                if (prefix == "credit-sales-invoice") {
                    format = format + (0, moment_1.default)().format("YYMMDD") + '-';
                }
                let reset;
                if (customUserId.resetFlag === true) {
                    number = 1000000000000000 + customUserId.startingId;
                    customUserId.lastGenId = 1;
                    customUserId.resetFlag = false;
                    await this.uniqueIdLogicRepository.save(customUserId);
                }
                else {
                    number = 1000000000000000 + customUserId.lastGenId + 1;
                    customUserId.lastGenId = customUserId.lastGenId + 1;
                    await this.uniqueIdLogicRepository.save(customUserId);
                }
                if (customUserId.tokenResetLogic) {
                    reset = "";
                }
                else {
                    reset = customUserId.tokenResetLogic;
                }
                let serial = number.toString();
                serial = serial.slice(16 - customUserId.idLength, 16);
                let serialNo = format + serial;
                if (format == null) {
                    return customUserId.lastGenId + 1;
                }
                return serialNo;
            }
            catch (error) {
                console.warn(error);
            }
        };
    }
};
exports.CustomeUIDService = CustomeUIDService;
exports.CustomeUIDService = CustomeUIDService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_config_1.UniqueIdLogicEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomeUIDService);
//# sourceMappingURL=customUID.service.js.map