import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BcryptService, ChatEntity, ConversionService, ExceptionService, PermissionService, RequestService, ResponseService, configRedis } from '../../common';
import { UsersEntity } from '../../common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity,ChatEntity]), configRedis()
  ],
  controllers: [AuthController],
  providers: [ AuthService, ExceptionService, ConversionService, RequestService, ResponseService, BcryptService, JwtService, ConfigService, PermissionService, UsersService],
})
export class AuthModule {

}
