import { Controller, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('auth')
	getHello() {
		return 'Hola';
	}
}
