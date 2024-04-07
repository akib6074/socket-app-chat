import { CustomBaseEntity } from './custom-base.entity';
import { ChatEntity } from './chat.entity';
export declare class UsersEntity extends CustomBaseEntity {
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
    senderMessages: ChatEntity[];
    receiverMessages: ChatEntity[];
}
