import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { jwtModule, redisModule } from 'src/modules.config';
import { PollsController } from './polls.controller';
import { PollsGateway } from './polls.gateway';
import { PollsRepository } from './polls.repository';
import { PollsService } from './polls.service';

@Module({
  imports: [ConfigModule, redisModule, jwtModule],
  controllers: [PollsController],
  // providers: [PollsService, PollsRepository, PollsGateway],
  providers: [PollsService, PollsRepository],
})
export class PollsModule {}
