import { BadRequestException, Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { SocketWithPrivateAuth } from './types';
const connectedUsers = {};
@WebSocketGateway({ namespace: ['private-message'] })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(ChatGateway.name);
  constructor() {}
  @WebSocketServer() io: Namespace;
  async afterInit(server: any) {
    if (server) {
      this.logger.log('Websocket Gateway initalized.');
    }
  }

  async handleConnection(@ConnectedSocket() client: SocketWithPrivateAuth) {
    const userName = client.userId;
    connectedUsers[userName] = client.id;
    console.log('User have been connected!');
    const sockets = this.io.sockets;
    this.logger.debug(`Socket connected with userID: ${client.userId}"`);
    this.logger.log(`WS client with id: ${client.id} connected`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
    this.io.emit('users', `from: ${client.id}`);
  }

  async handleDisconnect(@ConnectedSocket() client: SocketWithPrivateAuth) {
    const username = await this.getUserNameBySocketId(client.id);
    delete connectedUsers[username];
    const sockets = this.io.sockets;
    this.logger.debug(`Socket disconnected with userID: ${client.userId}"`);
    this.logger.log(`WS client with id: ${client.id} disconnected`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
  }

  @SubscribeMessage('private-message')
  async handlePrivateMessage(
    @ConnectedSocket() client: SocketWithPrivateAuth,
    @MessageBody() payload: { to: number; message: string },
  ) {
    const recipientSocketId = connectedUsers[payload.to];
    if (recipientSocketId && payload.to && payload.message) {
      this.io
        .to(recipientSocketId)
        .emit('private-message', { from: client.id, email: client.userEmail, message: payload.message });
        this.logger.debug(`Message ${payload.message} emitted from ${client.id} to ${recipientSocketId}`);
    } else {
      this.io.emit('private-message', new BadRequestException());
    }
  }

  async getUserNameBySocketId(socketId: string): Promise<string | null> {
    return Object.keys(connectedUsers).find((username) => connectedUsers[username] === socketId);
  }
}
