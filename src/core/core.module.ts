import { Module } from "@nestjs/common";
import { configEnvironment, configTypeorm } from "../common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { PollsModule } from "./polls/polls.module";
import { ChatsModule } from './chats/chats.module';

@Module({
    imports: [
      configEnvironment(),
      configTypeorm(),
      AuthModule,
      UsersModule,
      PollsModule,
      ChatsModule
    ],
    providers: [],
    controllers: [],
    exports: [],
  })
  export class CoreModule {}