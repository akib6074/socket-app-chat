import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthDto, UserResponseDto } from '../../common';
import { ResponseService } from '../../common/services/response.service';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly responseService: ResponseService,
  ) {}
  
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Login is successful',
  })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() authDto: AuthDto) {
    const payload = this.authService.login(authDto);
    return this.responseService.toResponse<UserResponseDto | any>(
			HttpStatus.OK,
			"Login is successful",
			payload
		);
  }
  
  @ApiBearerAuth()
  @ApiCreatedResponse({
    status: HttpStatus.OK,
    description: 'Logout is successful',
  })
  @HttpCode(HttpStatus.OK)
  @Get('logout')
  logout() {
    const payload = this.authService.loginOut();
    return this.responseService.toResponse<boolean>(
			HttpStatus.OK,
			"Logout is successful",
			payload
		);
  }
}
