import { NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { RedisService } from 'nestjs-redis';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly configService;
    private readonly redisService;
    constructor(configService: ConfigService, redisService: RedisService);
    private static toResponse;
    use(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
