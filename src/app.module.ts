import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { PublicMiddleware } from './common/middlewares/public.middleware';
import { PaginationMiddleware } from './common/middlewares/pagination.middleware';
import { AuthMiddleware } from './common/middlewares/middleware.config';
import { publicUrls } from './public.urls';
import { TypeormConfigModule } from './common/database/database.module';
@Module({
  imports: [
    TypeormConfigModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
    consumer.apply(PublicMiddleware).forRoutes("*");
    consumer.apply(PaginationMiddleware).forRoutes("*");
    consumer
      .apply(AuthMiddleware)
      .exclude(...publicUrls)
      .forRoutes("*");
  }
}