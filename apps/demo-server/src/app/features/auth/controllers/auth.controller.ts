import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { User } from '@workspace/model';
import { BCryptService } from '../features/bcrypt/services/crypt.service';
import { PublicEndpoint } from '../guards';
import { AuthService } from '../services/auth.service';

@Controller('auth')
@PublicEndpoint()
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

	@HttpCode(HttpStatus.ACCEPTED)
	@Get('refresh')
	public async refresh(): Promise<{
		tokens: {
			accessToken: string;
		};
	}> {
		return {
			tokens: {
				accessToken: ''
			}
		};
	}
}
