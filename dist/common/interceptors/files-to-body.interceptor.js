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
exports.FilesToBodyInterceptor = void 0;
const common_1 = require("@nestjs/common");
let FilesToBodyInterceptor = class FilesToBodyInterceptor {
    constructor() { }
    async intercept(context, next) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        if (req.body && Array.isArray(req.files) && req.files.length) {
            req.files.forEach((file) => {
                const { fieldname } = file;
                if (!req.body[fieldname]) {
                    req.body[fieldname] = [file];
                }
                else {
                    req.body[fieldname].push(file);
                }
            });
        }
        return next.handle();
    }
};
exports.FilesToBodyInterceptor = FilesToBodyInterceptor;
exports.FilesToBodyInterceptor = FilesToBodyInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FilesToBodyInterceptor);
//# sourceMappingURL=files-to-body.interceptor.js.map