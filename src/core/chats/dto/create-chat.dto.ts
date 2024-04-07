import { ApiProperty } from "@nestjs/swagger";
import { BaseDto } from "../../../common";
import { IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CreateUserDto } from "src/core/users/dto/create-user.dto";

export class CreateChatDto extends BaseDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    message: string;

    @Type(()=>CreateUserDto)
    sender: CreateUserDto;

    @Type(()=>CreateUserDto)
    receiver: CreateUserDto;
}
