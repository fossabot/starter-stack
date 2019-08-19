import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { User } from '@workspace/model';
import { BCryptService } from '../features/bcrypt/services/crypt.service';
import { Role } from '../guards/role.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
	public constructor(private readonly authService: AuthService, private readonly bCryptService: BCryptService) {}

	@HttpCode(HttpStatus.ACCEPTED)
	@Post('login')
	public async login(
		@Body() user: User
	): Promise<{
		tokens: {
			accessToken: string;
		};
	}> {
		try {
			const accessToken = await this.authService.login(user.username, user.password);

			return {
				tokens: {
					accessToken
				}
			};
		} catch (e) {
			throw new HttpException({ reason: e.message }, HttpStatus.FORBIDDEN);
		}
	}

	@Get('check-admin-role')
	@Role('admin')
	public checkIfAdmin(): string {
		return 'Success';
	}
}
