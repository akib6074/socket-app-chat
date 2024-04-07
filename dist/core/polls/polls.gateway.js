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
var PollsGateway_1;
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const polls_service_1 = require("./polls.service");
let PollsGateway = PollsGateway_1 = class PollsGateway {
    constructor(pollsService) {
        this.pollsService = pollsService;
        this.logger = new common_1.Logger(PollsGateway_1.name);
    }
    afterInit(server) {
        if (server) {
            this.logger.log('Websocket Gateway initalized.');
        }
    }
    handleConnection(client) {
        const sockets = this.io.sockets;
        this.logger.debug(`Socket connected with userID: ${client.userId}"`);
        this.logger.log(`WS client with id: ${client.id} connected`);
        this.logger.debug(`Number of connected sockets: ${sockets.size}`);
        this.io.emit('users', `from: ${client.id}`);
    }
    handleDisconnect(client) {
        const sockets = this.io.sockets;
        this.logger.debug(`Socket disconnected with userID: ${client.userId}"`);
        this.logger.log(`WS client with id: ${client.id} disconnected`);
        this.logger.debug(`Number of connected sockets: ${sockets.size}`);
    }
};
exports.PollsGateway = PollsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_a = typeof socket_io_1.Namespace !== "undefined" && socket_io_1.Namespace) === "function" ? _a : Object)
], PollsGateway.prototype, "io", void 0);
exports.PollsGateway = PollsGateway = PollsGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: ['private-chats'] }),
    __metadata("design:paramtypes", [polls_service_1.PollsService])
], PollsGateway);
//# sourceMappingURL=polls.gateway.js.map