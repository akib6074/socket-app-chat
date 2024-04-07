import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { RedisService } from "nestjs-redis";
export declare class PublicMiddleware implements NestMiddleware {
    private readonly redisService;
    private readonly logger;
    constructor(redisService: RedisService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
