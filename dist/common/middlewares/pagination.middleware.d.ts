import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
export declare class PaginationMiddleware implements NestMiddleware {
    private readonly logger;
    constructor();
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
