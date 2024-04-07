import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UniqueIdLogicEntity } from "../entities/entities.config";
import { SystemException } from "../exceptions/system.exception";
import { isActive } from "../queries/is-active.query";
import * as moment from "moment";
@Injectable()
export class CustomeUIDService {
    constructor(
        @InjectRepository(UniqueIdLogicEntity)
        private readonly uniqueIdLogicRepository: Repository<UniqueIdLogicEntity>
    ) {}
    generateCustomeId = async (
        prefix: string,
        format: string
    ): Promise<any> => {
        try {
            const customUserId = await this.uniqueIdLogicRepository.findOne({
                where: { idFor: prefix, ...isActive },
            });
            let number: number;
            let format = customUserId.idFormat;
            if(prefix=="credit-sales-invoice"){
                format= format + moment().format("YYMMDD") + '-';
            }
            let reset: string;
            if (customUserId.resetFlag === true) {
                number = 1000000000000000 + customUserId.startingId;
                customUserId.lastGenId = 1;
                customUserId.resetFlag = false;
                await this.uniqueIdLogicRepository.save(customUserId);
            } else {
                number = 1000000000000000 + customUserId.lastGenId + 1;
                customUserId.lastGenId = customUserId.lastGenId + 1;
                await this.uniqueIdLogicRepository.save(customUserId);
            }
            if (customUserId.tokenResetLogic) {
                //need to edit later according to replace function stored in /develop/testfunction folder
                reset = "";
            } else {
                reset = customUserId.tokenResetLogic;
            }
            let serial = number.toString();
            serial = serial.slice(16-customUserId.idLength, 16);
            let serialNo = format + serial;
            if(format == null){
                return customUserId.lastGenId + 1;
            }
            return serialNo;
        } catch (error) {
            console.warn(error);
        }
    };
}
