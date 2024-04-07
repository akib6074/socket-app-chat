import { BaseDto } from "../../../common";
import { CreateUserDto } from "src/core/users/dto/create-user.dto";
export declare class CreateChatDto extends BaseDto {
    message: string;
    sender: CreateUserDto;
    receiver: CreateUserDto;
}
