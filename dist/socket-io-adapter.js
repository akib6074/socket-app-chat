"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIOAdapter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const jwt = require("jsonwebtoken");
class SocketIOAdapter extends platform_socket_io_1.IoAdapter {
    constructor(app, configService) {
        super(app);
        this.app = app;
        this.configService = configService;
        this.logger = new common_1.Logger(SocketIOAdapter.name);
    }
    createIOServer(port, options) {
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
        const optionsWithCORS = {
            ...options,
            cors,
        };
        const configService = this.app.get(config_1.ConfigService);
        const server = super.createIOServer(port, optionsWithCORS);
        server
            .of('private-message')
            .use(createTokenMiddleware(this.logger, configService));
        return server;
    }
}
exports.SocketIOAdapter = SocketIOAdapter;
const createTokenMiddleware = (logger, configService) => (socket, next) => {
    const token = socket.handshake.auth.token || socket.handshake.headers['token'];
    logger.debug(`Validating auth token before connection: ${token}`);
    logger.debug(`New user connected!`);
    const privateKEY = configService
        .get('PRIVATE_KEY')
        .replace(/\\n/g, '\n');
    try {
        const payload = jwt.decode(token, privateKEY);
        if (payload) {
            socket.userEmail = payload['email'];
            socket.userId = payload['id'];
            next();
        }
        else {
            next(new Error('FORBIDDEN'));
        }
    }
    catch {
        next(new Error('FORBIDDEN'));
    }
};
//# sourceMappingURL=socket-io-adapter.js.map