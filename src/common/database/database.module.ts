import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatEntity, UsersEntity } from "../entities/entities.config";

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get<string>("DATABASE_HOST"),
        port: +configService.get<number>("DATABASE_PORT"),
        username: configService.get<string>("DATABASE_USER"),
        password: configService.get<string>("DATABASE_PASSWORD"),
        database: configService.get<string>("DATABASE_DB"),
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
        entities: [
            UsersEntity,
            ChatEntity
        ],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeormConfigModule {}