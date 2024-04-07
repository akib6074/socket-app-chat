import { Injectable } from '@nestjs/common';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ChatEntity, ConversionService, PermissionService, RequestService, SystemException, UsersEntity } from 'src/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { ChatGateway } from './chat.gateway';
import { SendMessageDto } from './dto/message.dto';
import { Client } from 'socket.io/dist/client';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatEntityRepository: Repository<ChatEntity>,
    @InjectRepository(UsersEntity)
    private readonly usersEntityRepository: Repository<UsersEntity>,
    private readonly permissionService: PermissionService,
    private readonly requestService: RequestService,
    private readonly conversionService: ConversionService,
  ) {}
  create = async (createChatDto: CreateChatDto) => {
    try {
      const senderId = this.permissionService.returnRequest().id;
      const user = await this.usersEntityRepository.findOne({where:{id: senderId}});
      createChatDto.sender = user;
      createChatDto = this.requestService.forCreate(createChatDto);
      const dtoToEntity = await this.conversionService.toEntity<ChatEntity, CreateChatDto>(createChatDto);
      const data = this.chatEntityRepository.create(dtoToEntity);
      const payload = await this.chatEntityRepository.save(data);
      return this.conversionService.toDto<ChatEntity, CreateChatDto>(payload);
    } catch (error) {
      throw new SystemException(error);
    }
  }

  sendMessage = async (messageDto: SendMessageDto):Promise<any> => {
    try {
      return Promise.resolve(messageDto);
    } catch (error) {
      throw new SystemException(error);
    }
  }

  findAll() {
    return `This action returns all chats`;
  }

  findOne = async (id: number): Promise<any[]> => {
    try {
      const userId = this.permissionService.returnRequest().id;
      const allMessages = await this.chatEntityRepository.query(`
      SELECT cc.id, cc.message, cu.id AS sender_id, cu2.id AS receiver_id,
      CASE 
        WHEN cu2.id = ${userId} THEN false
          ELSE true
        END AS myself
      FROM co_chats cc
      LEFT JOIN co_users cu ON cu.id = cc.sender_id
      LEFT JOIN co_users cu2 ON cu2.id = cc.receiver_id
      WHERE (sender_id = ${id} AND receiver_id = ${userId})
      OR (receiver_id = ${id} AND sender_id = ${userId})
      ORDER BY id ASC;
      `);
      return allMessages;
    } catch (error) {
      throw new SystemException(error);
    }
  };

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
