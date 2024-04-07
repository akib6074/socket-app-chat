import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class AuthDto {
    @ApiProperty({
        description: 'This is user email',
        default: 'akib6074@gmail.com'
    })
    @IsString({message: 'Invalid type of email!'})
    @IsEmail()
    @IsNotEmpty({message: 'Email can not be empty'})
    email: string;

    @ApiProperty({
        description: 'This is user password',
        default: 'Lock@1234'
    })
    @IsString({message: 'Invalid type of password!'})
    @IsNotEmpty({message: 'Password can not be empty'})
    password: string;
}