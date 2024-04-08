import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class PublicInterceptor implements NestInterceptor {
    private readonly logger;
    intercept(context: ExecutionContext, next: CallHandler): Promise<import("rxjs").Observable<any>>;
}
