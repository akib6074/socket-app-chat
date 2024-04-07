import { Repository } from 'typeorm';
import { BcryptService, ConversionService, ExceptionService, PermissionService, RequestService, UsersEntity } from '../../common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    private readonly exceptionService;
    private readonly bcryptService;
    private readonly permissionService;
    private readonly conversionService;
    private readonly requestService;
    constructor(usersRepository: Repository<UsersEntity>, exceptionService: ExceptionService, bcryptService: BcryptService, permissionService: PermissionService, conversionService: ConversionService, requestService: RequestService);
    create: (createUserDto: CreateUserDto) => Promise<string>;
    findAll: () => Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findOneByEmail: (emailOrUserName: string) => Promise<CreateUserDto | any>;
    seeder: () => Promise<boolean>;
}
