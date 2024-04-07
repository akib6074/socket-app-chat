"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PublicInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let PublicInterceptor = PublicInterceptor_1 = class PublicInterceptor {
    constructor() {
        this.logger = new common_1.Logger(PublicInterceptor_1.name);
    }
    async intercept(context, next) {
        this.logger.log('Entering to the end-point...');
        return next
            .handle()
            .pipe((0, operators_1.tap)(() => console.warn(`Exiting from the end-point...`)));
    }
};
exports.PublicInterceptor = PublicInterceptor;
exports.PublicInterceptor = PublicInterceptor = PublicInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], PublicInterceptor);
//# sourceMappingURL=public.interceptor.js.map