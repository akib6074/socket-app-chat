"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../common");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const polls_module_1 = require("./polls/polls.module");
const chats_module_1 = require("./chats/chats.module");
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_2.configEnvironment)(),
            (0, common_2.configTypeorm)(),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            polls_module_1.PollsModule,
            chats_module_1.ChatsModule
        ],
        providers: [],
        controllers: [],
        exports: [],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map