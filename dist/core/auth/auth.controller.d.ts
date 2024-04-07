import { AuthDto } from '../../common';
import { ResponseService } from '../../common/services/response.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly responseService;
    constructor(authService: AuthService, responseService: ResponseService);
    login(authDto: AuthDto): Promise<import("../../common").ResponseDto>;
    logout(): Promise<import("../../common").ResponseDto>;
}
