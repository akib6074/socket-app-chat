"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicUrls = void 0;
const common_1 = require("@nestjs/common");
exports.publicUrls = [
    { path: "/users/create", method: common_1.RequestMethod.POST },
    { path: "/users", method: common_1.RequestMethod.GET },
    { path: "/auth/login", method: common_1.RequestMethod.POST },
    { path: "/users/seeder", method: common_1.RequestMethod.POST },
    { path: "/polls", method: common_1.RequestMethod.POST },
];
//# sourceMappingURL=public.urls.js.map