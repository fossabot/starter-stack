import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '@workspace/model';
import { Role } from '../guards/role.guard';
import { AuthService } from '../services/auth.service';
import { CryptService } from '../services/crypt.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService, private readonly crypt: CryptService) {}

	@HttpCode(HttpStatus.ACCEPTED)
	@Post('login')
	public async login(
		@Body() user: User
	): Promise<{
		tokens: {
			accessToken: string;
		};
	}> {
		const accessToken = await this.authService.login(user.name, user.password);

		return {
			tokens: {
				accessToken
			}
		};
	}

	@Get('check-admin-role')
	@Role('admin')
	public checkIfAdmin(): string {
		return 'Success';
	}
}
