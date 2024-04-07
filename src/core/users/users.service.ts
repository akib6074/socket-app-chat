import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import {
  BcryptService,
  ChatEntity,
  ConversionService,
  ExceptionService,
  PermissionService,
  RequestService,
  SystemException,
  UsersEntity,
  isActive,
} from '../../common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { dummyusers } from '../../common/dtos/jsons/dummy-user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly exceptionService: ExceptionService,
    private readonly bcryptService: BcryptService,
    private readonly permissionService: PermissionService,
    private readonly conversionService: ConversionService,
    private readonly requestService: RequestService,
  ) {}
  create = async (createUserDto: CreateUserDto): Promise<string> => {
    try {
      createUserDto.password = await this.bcryptService.hashPassword(
        createUserDto.password,
      );
      createUserDto = this.requestService.forCreate(createUserDto);
      const dtoToEntity = await this.conversionService.toEntity<
        UsersEntity,
        CreateUserDto
      >(createUserDto);
      const data = this.usersRepository.create(dtoToEntity);
      await this.usersRepository.save(data);
      return 'User Created Successfully!';
    } catch (error) {
      throw new SystemException(error);
    }
  };

  findAll = async (): Promise<any[]> => {
    try {
      const userId = this.permissionService.returnRequest().id;
      const friendIds = await this.usersRepository.findOne({
        select: ['friend_list'],
        where: { ...isActive, id: userId },
      });
      const list = await this.usersRepository.find({
        select: ['id','firstName','lastName'],
        where: {
          id: In(friendIds.friend_list)
        }
      });
      return list;
    } catch (error) {
      console.warn(error.message);
    }
  };

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  //----------------------------------helpers------------------------------------
  findOneByEmail = async (
    emailOrUserName: string,
  ): Promise<CreateUserDto | any> => {
    try {
      const user = await this.usersRepository.findOne({
        where: { email: emailOrUserName },
      });
      this.exceptionService.notFound(
        user,
        'User is not found by phone or email',
      );

      return await this.conversionService.toDto<UsersEntity, CreateUserDto>(
        user,
      );
    } catch (error) {
      throw new SystemException(error.message);
    }
  };

  seeder = async (): Promise<boolean> => {
    try {
      const data = dummyusers;
      data.map(async (item) => {
        await this.usersRepository.save(item);
      });
      return true;
    } catch (error) {
      throw new SystemException(error);
    }
  };
}
