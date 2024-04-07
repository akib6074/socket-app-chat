import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  private readonly logger = new Logger(PaginationMiddleware.name);

  constructor() {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const query: any = req.query;

      if (!(query.limit && query.page)) {
        query.pagination = {
          skip: undefined,
          take: undefined,
        };
        // next();
      }
      if (query.limit && query.page) {
        console.warn("limit", query.limit);
        console.warn("page", query.page);

        query.limit = parseInt(query.limit, 10) || 2;
        query.page = parseInt(query.page, 10) || 1;
        query.pagination = {
          skip: query.page == 1 ? 0 : (query.page - 1) * query.limit,
          take: query.limit,
        };
        console.warn(":::::::::::::::::::;", query.pagination);
      }
      next();
    } catch (error) {
      this.logger.log(error);
    }
  }
}
