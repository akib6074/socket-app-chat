import { CreatePollDto } from './create-poll.dto';
declare const UpdatePollDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePollDto>>;
export declare class UpdatePollDto extends UpdatePollDto_base {
    id: number;
}
export {};
