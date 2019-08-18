import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '@workspace/model';
import { Role } from '../guards/role.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.ACCEPTED)
	@Post('login')
	public login(@Body() user: User): Promise<User | undefined> {
		return this.authService.login(user);
	}

	@Get('check-admin-role')
	@Role('admin')
	public checkIfAdmin(): string {
		return 'Success';
	}
}
