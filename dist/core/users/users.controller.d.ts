import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseService } from '../../common';
export declare class UsersController {
    private readonly usersService;
    private readonly responseService;
    constructor(usersService: UsersService, responseService: ResponseService);
    create(createUserDto: CreateUserDto): Promise<import("../../common").ResponseDto>;
    findAll(): Promise<import("../../common").ResponseDto>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    sedder(): Promise<boolean>;
}
