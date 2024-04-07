import { Repository } from "typeorm";
import { UniqueIdLogicEntity } from "../entities/entities.config";
export declare class CustomeUIDService {
    private readonly uniqueIdLogicRepository;
    constructor(uniqueIdLogicRepository: Repository<UniqueIdLogicEntity>);
    generateCustomeId: (prefix: string, format: string) => Promise<any>;
}
