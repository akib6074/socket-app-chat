"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const socket_io_adapter_1 = require("./socket-io-adapter");
const basicAuth = require("express-basic-auth");
const swagger_1 = require("@nestjs/swagger");
const SWAGGER_ENVS = ['dev', 'prod', 'uat'];
async function bootstrap() {
    const logger = new common_1.Logger('Main (main.ts)');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: new common_1.Logger("Application Starts Up"), cors: true });
    app.enableCors({
        allowedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers', 'Authorization, Content-Type'],
        origin: '*',
        credentials: true
    });
    app.setGlobalPrefix("api");
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    const configService = app.get(config_1.ConfigService);
    const port = parseInt(configService.get('PORT'));
    const clientPort = parseInt(configService.get('CLIENT_PORT'));
    app.enableCors({
        origin: [
            `http://localhost:${clientPort}`,
            new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
        ],
    });
    app.useWebSocketAdapter(new socket_io_adapter_1.SocketIOAdapter(app, configService));
    if (SWAGGER_ENVS.includes(process.env.NODE_ENV || 'development')) {
        app.use(['/apidoc'], basicAuth({
            challenge: true,
            users: {
                [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
            },
        }));
    }
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Co-Chat')
        .setDescription('Co-Chat api documentation developed by Kazi Akib Javed')
        .setLicense('Kazi Akib Javed', '')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const documentBack = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('apidoc', app, documentBack);
    await app.listen(port);
    logger.log(`Server running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map