import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, VersioningType } from '@nestjs/common';
import { SocketIOAdapter } from './socket-io-adapter';
import * as basicAuth from 'express-basic-auth';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const SWAGGER_ENVS = ['dev', 'prod', 'uat'];
async function bootstrap() {
  const logger = new Logger('Main (main.ts)');
  const app = await NestFactory.create(AppModule,{logger: new Logger("Application Starts Up"), cors: true});
  app.enableCors({
    allowedHeaders: ['Access-Control-Allow-Origin','Access-Control-Allow-Headers', 'Authorization, Content-Type'],
    origin: '*',
    credentials: true
  })
  app.setGlobalPrefix("api");
  app.enableVersioning({
    type: VersioningType.URI,
  });
  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'));
  const clientPort = parseInt(configService.get('CLIENT_PORT'));

  app.enableCors({
    origin: [
      `http://localhost:${clientPort}`,
      new RegExp(`/^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}$/`),
    ],
  });
  app.useWebSocketAdapter(new SocketIOAdapter(app, configService));

  if (SWAGGER_ENVS.includes(process.env.NODE_ENV || 'development')) {
    app.use(
      ['/apidoc'],
      basicAuth({
        challenge: true,
        users: {
          [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
        },
      }),
    );
  }
  const config = new DocumentBuilder()
    .setTitle('Co-Chat')
    .setDescription('Co-Chat api documentation developed by Kazi Akib Javed')
    .setLicense('Kazi Akib Javed', '')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentBack = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, documentBack);
  await app.listen(port);

  logger.log(`Server running on port ${port}`);
}
bootstrap();
