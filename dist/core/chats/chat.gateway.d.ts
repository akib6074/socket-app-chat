import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Namespace } from 'socket.io';
import { SocketWithPrivateAuth } from './types';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger;
    constructor();
    io: Namespace;
    afterInit(server: any): Promise<void>;
    handleConnection(client: SocketWithPrivateAuth): Promise<void>;
    handleDisconnect(client: SocketWithPrivateAuth): Promise<void>;
    handlePrivateMessage(client: SocketWithPrivateAuth, payload: {
        to: number;
        message: string;
    }): Promise<void>;
    getUserNameBySocketId(socketId: string): Promise<string | null>;
}
