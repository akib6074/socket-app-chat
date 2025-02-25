import { BaseDto } from '../dtos/core/base.dto';
import { ResponseDto } from '../dtos/reponse/response.dto';
export interface GeneralController<S extends BaseDto, T = ResponseDto> {
    findAll(): Promise<T>;
    findById(id: number): Promise<T>;
    findOne(dto: S): Promise<T>;
    create(dto: S): Promise<T>;
    update(id: number, dto: S): Promise<T>;
    remove(id: number): Promise<T>;
}
