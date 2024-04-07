import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { ResponseService } from 'src/common';
import { SendMessageDto } from './dto/message.dto';
export declare class ChatsController {
    private readonly chatsService;
    private readonly responseService;
    constructor(chatsService: ChatsService, responseService: ResponseService);
    create(createChatDto: CreateChatDto): Promise<import("src/common").ResponseDto>;
    sendMessage(messageDto: SendMessageDto): Promise<import("src/common").ResponseDto>;
    findAll(): string;
    findOne(id: string): Promise<import("src/common").ResponseDto>;
    update(id: string, updateChatDto: UpdateChatDto): string;
    remove(id: string): string;
}
