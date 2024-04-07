import { ConfigService } from '@nestjs/config';
import { AuthDto, BcryptService, PermissionService, UserResponseDto, UsersEntity } from '../../common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { RedisService } from 'nestjs-redis';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepository;
    private readonly bcryptService;
    private readonly configService;
    private readonly redisService;
    private readonly permissionService;
    private readonly jwtService;
    private readonly logger;
    constructor(usersRepository: Repository<UsersEntity>, bcryptService: BcryptService, configService: ConfigService, redisService: RedisService, permissionService: PermissionService, jwtService: JwtService);
    login(authDto: AuthDto): Promise<UserResponseDto | any>;
    validateUser(authDto: AuthDto): Promise<CreateUserDto | any>;
    generatePayload(userDto: CreateUserDto): Promise<UserResponseDto>;
    generateToken(payload: UserResponseDto): Promise<string>;
    loginOut(): Promise<boolean>;
}
