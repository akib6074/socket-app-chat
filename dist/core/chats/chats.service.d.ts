import { UpdateChatDto } from './dto/update-chat.dto';
import { ChatEntity, ConversionService, PermissionService, RequestService, UsersEntity } from 'src/common';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { SendMessageDto } from './dto/message.dto';
export declare class ChatsService {
    private readonly chatEntityRepository;
    private readonly usersEntityRepository;
    private readonly permissionService;
    private readonly requestService;
    private readonly conversionService;
    constructor(chatEntityRepository: Repository<ChatEntity>, usersEntityRepository: Repository<UsersEntity>, permissionService: PermissionService, requestService: RequestService, conversionService: ConversionService);
    create: (createChatDto: CreateChatDto) => Promise<CreateChatDto>;
    sendMessage: (messageDto: SendMessageDto) => Promise<any>;
    findAll(): string;
    findOne: (id: number) => Promise<any[]>;
    update(id: number, updateChatDto: UpdateChatDto): string;
    remove(id: number): string;
}
