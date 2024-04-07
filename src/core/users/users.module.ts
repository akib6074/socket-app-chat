import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptService, ChatEntity, ConversionService, ExceptionService, PermissionService, RequestService, ResponseService, UsersEntity } from 'src/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity, ChatEntity]),
  ],
  exports:[UsersService],
  controllers: [UsersController],
  providers: [UsersService, ExceptionService, BcryptService, ConversionService, RequestService, ResponseService, PermissionService],
})
export class UsersModule {}
