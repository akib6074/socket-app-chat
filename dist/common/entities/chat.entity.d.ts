import { CustomBaseEntity } from "./custom-base.entity";
import { UsersEntity } from "./user.entity";
export declare class ChatEntity extends CustomBaseEntity {
    message: string;
    status: string;
    sender: UsersEntity;
    receiver: UsersEntity;
}
