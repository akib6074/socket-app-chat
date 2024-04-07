import { CustomBaseEntity } from "./custom-base.entity";
export declare class UniqueIdLogicEntity extends CustomBaseEntity {
    idFor: string;
    idLength: number;
    idFormat: string;
    tokenResetLogic: string;
    startingId: number;
    lastGenId: number;
    resetFlag: Boolean;
}
