import { HttpStatus } from "@nestjs/common";
import { ResponseDto, ResponseDto2 } from "../dtos/reponse/response.dto";
import { BaseDto } from "../dtos/core/base.dto";
export declare class ResponseService {
    toResponse<T>(status: HttpStatus, message: string, data: Promise<T>): Promise<ResponseDto>;
    toResponse2<T>(status: HttpStatus, success: string, message: string): Promise<ResponseDto2>;
    toDtoResponse<T extends BaseDto>(status: HttpStatus, message: string, data: Promise<T>): Promise<ResponseDto>;
    toDtosResponse<T extends BaseDto>(status: HttpStatus, message: string, data: Promise<T[]>): Promise<ResponseDto>;
    toDtosResponse2<T extends BaseDto>(status: HttpStatus, message: string, data: Promise<T[]>): Promise<ResponseDto>;
    toPaginationResponse<T extends BaseDto>(status: HttpStatus, message: string, page: number, limit: number, data: Promise<[T[], number]>): Promise<ResponseDto>;
    toErrorResponse(status: HttpStatus, message: string, error: any): Promise<ResponseDto>;
}
