import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { DtoValidationPipe, ResponseService } from 'src/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SendMessageDto } from './dto/message.dto';

@ApiTags("Chat")
@Controller('chat')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService,
    private readonly responseService: ResponseService) {}

  @ApiBearerAuth()
  @Post()
  create(@Body(new DtoValidationPipe({skipMissingProperties: true})) createChatDto: CreateChatDto) {
    const payload = this.chatsService.create(createChatDto);
    return this.responseService.toDtoResponse(HttpStatus.OK, "Successful", payload);
  }

  @ApiBearerAuth()
  @Post()
  sendMessage(@Body(new DtoValidationPipe({skipMissingProperties: false})) messageDto: SendMessageDto) {
    const payload = this.chatsService.sendMessage(messageDto);
    return this.responseService.toDtoResponse(HttpStatus.OK, "Successful", payload);
  }

  @Get()
  findAll() {
    return this.chatsService.findAll();
  }
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    const payload = this.chatsService.findOne(+id);
    return this.responseService.toDtosResponse(HttpStatus.OK,"Successful",payload);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(+id, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatsService.remove(+id);
  }
}
