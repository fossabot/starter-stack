import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { User } from '@workspace/model';
import { BCryptService } from '../features/bcrypt/services/crypt.service';
import { PublicEndpoint } from '../guards';
import { AuthService } from '../services/auth.service';

@Controller('auth')
@PublicEndpoint()
export class AuthController {
	public constructor(
		private readonly authService: AuthService,
		private readonly bCryptService: BCryptService
	) {}

	@HttpCode(HttpStatus.ACCEPTED)
	@Post('login')
	public async login(
		@Body() user: Partial<User>
	): Promise<{
		tokens: {
			accessToken: string;
		};
	}> {
		try {
			console.log(' accessToken user', user);
			const accessToken = await this.authService.login(user.username, user.password);
			console.log(' accessToken user', accessToken, user);

			return {
				tokens: {
					accessToken,
				},
			};
		} catch (e) {
			console.log(' LOASDASF ', e);
			throw new HttpException('afeqfwefwe', HttpStatus.FORBIDDEN);
		}
	}

	@HttpCode(HttpStatus.ACCEPTED)
	@Post('register')
	public async register(
		@Body() user: User
	): Promise<{
		tokens: {
			accessToken: string;
		};
	}> {
		try {
			console.log(' accessToken user', user);
			const accessToken = await this.authService.register(user);
			console.log(' accessToken user', accessToken, user);

			return {
				tokens: {
					accessToken,
				},
			};
		} catch (e) {
			console.log(' LOASDASF ', e);
			throw new HttpException('afeqfwefwe', HttpStatus.FORBIDDEN);
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
				accessToken: '',
			},
		};
	}
}
