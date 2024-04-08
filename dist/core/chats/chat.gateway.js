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
var ChatGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const connectedUsers = {};
let ChatGateway = ChatGateway_1 = class ChatGateway {
    constructor() {
        this.logger = new common_1.Logger(ChatGateway_1.name);
    }
    async afterInit(server) {
        if (server) {
            this.logger.log('Websocket Gateway initalized.');
        }
    }
    async handleConnection(client) {
        const userName = client.userId;
        connectedUsers[userName] = client.id;
        console.log('User have been connected!');
        const sockets = this.io.sockets;
        this.logger.debug(`Socket connected with userID: ${client.userId}"`);
        this.logger.log(`WS client with id: ${client.id} connected`);
        this.logger.debug(`Number of connected sockets: ${sockets.size}`);
        this.io.emit('users', `from: ${client.id}`);
    }
    async handleDisconnect(client) {
        const username = await this.getUserNameBySocketId(client.id);
        delete connectedUsers[username];
        const sockets = this.io.sockets;
        this.logger.debug(`Socket disconnected with userID: ${client.userId}"`);
        this.logger.log(`WS client with id: ${client.id} disconnected`);
        this.logger.debug(`Number of connected sockets: ${sockets.size}`);
    }
    async handlePrivateMessage(client, payload) {
        const recipientSocketId = connectedUsers[payload.to];
        if (recipientSocketId && payload.to && payload.message) {
            this.io
                .to(recipientSocketId)
                .emit('private-message', { from: client.id, email: client.userEmail, message: payload.message });
            this.logger.debug(`Message ${payload.message} emitted from ${client.id} to ${recipientSocketId}`);
        }
        else {
            this.io.emit('private-message', new common_1.BadRequestException());
        }
    }
    async getUserNameBySocketId(socketId) {
        return Object.keys(connectedUsers).find((username) => connectedUsers[username] === socketId);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], ChatGateway.prototype, "io", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('private-message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handlePrivateMessage", null);
exports.ChatGateway = ChatGateway = ChatGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({ namespace: ['private-message'] }),
    __metadata("design:paramtypes", [])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map