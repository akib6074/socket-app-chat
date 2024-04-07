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
var PaginationMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationMiddleware = void 0;
const common_1 = require("@nestjs/common");
let PaginationMiddleware = PaginationMiddleware_1 = class PaginationMiddleware {
    constructor() {
        this.logger = new common_1.Logger(PaginationMiddleware_1.name);
    }
    async use(req, res, next) {
        try {
            const query = req.query;
            if (!(query.limit && query.page)) {
                query.pagination = {
                    skip: undefined,
                    take: undefined,
                };
            }
            if (query.limit && query.page) {
                console.warn("limit", query.limit);
                console.warn("page", query.page);
                query.limit = parseInt(query.limit, 10) || 2;
                query.page = parseInt(query.page, 10) || 1;
                query.pagination = {
                    skip: query.page == 1 ? 0 : (query.page - 1) * query.limit,
                    take: query.limit,
                };
                console.warn(":::::::::::::::::::;", query.pagination);
            }
            next();
        }
        catch (error) {
            this.logger.log(error);
        }
    }
};
exports.PaginationMiddleware = PaginationMiddleware;
exports.PaginationMiddleware = PaginationMiddleware = PaginationMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PaginationMiddleware);
//# sourceMappingURL=pagination.middleware.js.map