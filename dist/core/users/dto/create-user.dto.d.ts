import { BaseDto } from '../../../common';
import { CreateChatDto } from 'src/core/chats/dto/create-chat.dto';
export declare class CreateUserDto extends BaseDto {
    firstName: string;
    lastName: string;
    email: string;
    userId: string;
    password: string;
    resetPasswordToken: string;
    resetPasswordValidity: Date;
    resetPasswordFlag: boolean;
    address: string;
    phone: string;
    friend_list: number[];
    senderMessages: CreateChatDto[];
    receiverMessages: CreateChatDto[];
}
