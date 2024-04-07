import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { PollsService } from './polls.service';
import { SocketWithPrivateAuth } from './types';

@WebSocketGateway({ namespace: ['private-chats']})
export class PollsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(PollsGateway.name);
  constructor(private readonly pollsService: PollsService) {}
  @WebSocketServer()io:Namespace;
  afterInit(server: any) {
      if(server){
        this.logger.log('Websocket Gateway initalized.');
      }
  }

  handleConnection(client: SocketWithPrivateAuth) {
    const sockets =  this.io.sockets;
    this.logger.debug(
      `Socket connected with userID: ${client.userId}"`,
    );
    this.logger.log(`WS client with id: ${client.id} connected`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
    this.io.emit('users', `from: ${client.id}`);
  }

  handleDisconnect(client: SocketWithPrivateAuth) {

    const sockets =  this.io.sockets;
    this.logger.debug(
      `Socket disconnected with userID: ${client.userId}"`,
    );
    this.logger.log(`WS client with id: ${client.id} disconnected`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
  }
}
