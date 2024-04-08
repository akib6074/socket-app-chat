import { CreatePollDto, JoinPollDto } from './dto/dtos.dto';
import { PollsService } from './polls.service';
import { RequestWithAuth } from './types';
export declare class PollsController {
    private pollsService;
    constructor(pollsService: PollsService);
    create(createPollDto: CreatePollDto): Promise<{
        poll: import("./polls-types").Poll;
        accessToken: string;
    }>;
    join(joinPollDto: JoinPollDto): Promise<{
        poll: import("./polls-types").Poll;
        accessToken: string;
    }>;
    rejoin(request: RequestWithAuth): Promise<import("./polls-types").Poll>;
}
