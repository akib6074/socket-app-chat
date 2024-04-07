import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { PollsService } from './polls.service';
import { SocketWithPrivateAuth } from './types';
export declare class PollsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly pollsService;
    private readonly logger;
    constructor(pollsService: PollsService);
    io: Namespace;
    afterInit(server: any): void;
    handleConnection(client: SocketWithPrivateAuth): void;
    handleDisconnect(client: SocketWithPrivateAuth): void;
}
