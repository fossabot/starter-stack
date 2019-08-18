import { Controller, Post } from '@nestjs/common';
import { User } from '@workspace/model';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	public login(user: User): Promise<User | undefined> {
		return this.authService.login(user);
	}
}
