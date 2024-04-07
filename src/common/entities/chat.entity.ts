import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CustomBaseEntity } from "./custom-base.entity";
import { UsersEntity } from "./user.entity";

@Entity({name: 'co_chats', schema: 'public'})
@Index(['id','receiver','sender'])
export class ChatEntity extends CustomBaseEntity{
    @Column({name: 'message', type: 'text', nullable: false})
    message: string;

    @Column({name: 'status', type: 'varchar', nullable: false, default: 'new'})
    status: string;

    @ManyToOne(type=>UsersEntity, (userEntity)=>userEntity.senderMessages)
    @JoinColumn({ name: 'sender_id'})
    sender: UsersEntity;

    @ManyToOne(type=>UsersEntity, (userEntity)=>userEntity.receiverMessages)
    @JoinColumn({ name: 'receiver_id'})
    receiver: UsersEntity;
}