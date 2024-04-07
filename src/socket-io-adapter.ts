import { INestApplicationContext, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions } from 'socket.io';
import { SocketWithPrivateAuth } from './core/polls/types';
import * as jwt from 'jsonwebtoken';

export class SocketIOAdapter extends IoAdapter {
  private readonly logger = new Logger(SocketIOAdapter.name);
  constructor(
    private app: INestApplicationContext,
    private configService: ConfigService,
  ) {
    super(app);
  }
  createIOServer(port: number, options?: ServerOptions) {
    const clientPort = parseInt(this.configService.get('CLIENT_PORT'));

    const cors = {
      origin: [
        `http://localhost:${clientPort}`,
        new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
      ],
    };
    this.logger.log('Configuraing SocketIO server with custom CORS options', {
      cors,
    });
    const optionsWithCORS: ServerOptions = {
      ...options,
      cors,
    };
    const configService = this.app.get(ConfigService);
    const server: Server = super.createIOServer(port, optionsWithCORS);
    server
      .of('private-message')
      .use(createTokenMiddleware(this.logger,configService));

    return server;
  }
}

const createTokenMiddleware =
  (logger: Logger, configService: ConfigService) =>
  (socket: SocketWithPrivateAuth, next) => {
    // for Postman testing support, fallback to token header
    const token =
      socket.handshake.auth.token || socket.handshake.headers['token'];

    logger.debug(`Validating auth token before connection: ${token}`);
    logger.debug(`New user connected!`);
    const privateKEY = configService
    .get('PRIVATE_KEY')
    .replace(/\\n/g, '\n');
    try {
      const payload = jwt.decode(token, privateKEY);
      if(payload){
        socket.userEmail = payload['email'];
        socket.userId = payload['id'];
        next();
      } else{
        next(new Error('FORBIDDEN'));
      }
    } catch {
      next(new Error('FORBIDDEN'));
    }
  };
