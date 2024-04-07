import { Request } from 'express';
import { Socket } from 'socket.io';

// guard types
export type PrivateAuthPayload = {
  userEmail: string;
  userId: number;
}
export type RequestWithAuth = Request & PrivateAuthPayload;
export type SocketWithPrivateAuth = Socket & PrivateAuthPayload;