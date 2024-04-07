import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DtoValidationPipe, ResponseService, UserResponseDto } from '../../common';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly responseService: ResponseService) {}

  @Post('create')
  create(@Body(new DtoValidationPipe({skipMissingProperties: false ,whitelist: true, forbidNonWhitelisted: true})) createUserDto: CreateUserDto) {
    const payload =  this.usersService.create(createUserDto);
    return this.responseService.toResponse<UserResponseDto | any>(
			HttpStatus.OK,
			"Request is successful",
			payload
		);
  }

  @ApiBearerAuth()
  @Get('friends')
  findAll() {
    const payload =  this.usersService.findAll();
    return this.responseService.toDtosResponse<UserResponseDto | any>(
			HttpStatus.OK,
			"Request is successful",
			payload
		);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('seeder')
  sedder(){
    return this.usersService.seeder();
  }
}
