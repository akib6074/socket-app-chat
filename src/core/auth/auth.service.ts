import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as jwt from 'jsonwebtoken';
import {
  AuthDto,
  BcryptService,
  PermissionService,
  Redis,
  SystemException,
  UserResponseDto,
  UsersEntity,
} from '../../common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { RedisService } from 'nestjs-redis';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly bcryptService: BcryptService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
    private readonly permissionService: PermissionService,
    private readonly jwtService: JwtService
  ) {}
  async login(authDto: AuthDto): Promise<UserResponseDto | any> {
    try {
      const validateUser = await this.validateUser(authDto);
      const payload = await this.generatePayload(validateUser);
      const accessToken = await this.generateToken(payload);
      await this.redisService
        .getClient(Redis.REDIS_SESSION)
        .set(accessToken, JSON.stringify(payload));
      payload.accessToken = accessToken;
      return payload;
    } catch (error) {
      throw new SystemException(error.message);
    }
  }

  async validateUser(authDto: AuthDto): Promise<CreateUserDto| any> {
    try {
      const user = await this.usersRepository.findOne({where: {email: authDto?.email}});
      if (!user){
        throw new SystemException({
          status: HttpStatus.BAD_REQUEST,
          message: "Wrong credentials!"
        })
      }
      const isPasswordMatched = await this.bcryptService.comparePassword(
        authDto.password,
        user?.password,
      );
      if (!isPasswordMatched) {
        throw new SystemException({
          status: HttpStatus.BAD_REQUEST,
          message: "User password is not valid",
        });
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new SystemException(error.message);
    }
  }

  async generatePayload(userDto: CreateUserDto): Promise<UserResponseDto> {
    const userResponseDto = new UserResponseDto();
    userResponseDto.id = userDto.id;
    userResponseDto.userId = userDto?.userId;
    userResponseDto.firstName = userDto?.firstName;
    userResponseDto.lastName = userDto?.lastName;
    userResponseDto.email = userDto?.email;
    userResponseDto.isUser = true;
    return Promise.resolve(userResponseDto);
  }

  async generateToken(payload: UserResponseDto): Promise<string> {
    const privateKEY = this.configService
      .get('PRIVATE_KEY')
      .replace(/\\n/g, '\n');

    let accessToken = jwt.sign({ ...payload }, privateKEY, {
      expiresIn: '365d',
      algorithm: 'RS256',
    });
    
    this.logger.log('access token: ' + accessToken);
    return Promise.resolve(accessToken);
  }

  async loginOut(): Promise<boolean> {
    try {
      const accessToken = this.permissionService.returnRequest().accessToken;
      await this.redisService.getClient(Redis.REDIS_SESSION).del(accessToken);
      return true;
    } catch (error) {
      console.warn(error.message);
    }
  }
}
