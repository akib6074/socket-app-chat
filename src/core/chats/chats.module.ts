import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatEntity, ConversionService, PermissionService, RequestService, ResponseService, UsersEntity } from 'src/common';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatEntity, UsersEntity])
  ],
  controllers: [ChatsController],
  providers: [ChatsService,PermissionService,ResponseService, RequestService, ResponseService, ConversionService, ChatGateway],
})
export class ChatsModule {}
