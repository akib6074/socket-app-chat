import { ActiveStatus } from '../../enum/active.enum';
export declare abstract class BaseDto {
    id: number;
    version: number;
    isActive: ActiveStatus;
    createdBy: number | null;
    updatedBy: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
