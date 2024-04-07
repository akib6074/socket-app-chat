import { BaseEntity } from 'typeorm';
import { ActiveStatus } from '../enum/enum.config';
export declare class CustomBaseEntity extends BaseEntity {
    id: number;
    version: number;
    isActive: ActiveStatus;
    createdBy: number | null;
    updatedBy: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
