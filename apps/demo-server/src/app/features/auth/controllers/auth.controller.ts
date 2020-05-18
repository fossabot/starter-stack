import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginResponse } from '@workspace/demo-server-api';
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
	public async login(@Body() user: Partial<User>): Promise<LoginResponse> {
		if (!user.username) {
			throw new HttpException('No username provided', HttpStatus.BAD_REQUEST);
		}
		if (!user.password) {
			throw new HttpException('No password provided', HttpStatus.BAD_REQUEST);
		}
		try {
			console.log(' accessToken user', user);
			const tokenPair = await this.authService.login(user.username, user.password);
			console.log(' accessToken user', tokenPair, user);
			return {
				tokens: tokenPair,
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
			const tokenPair = await this.authService.register(user);
			console.log(' accessToken user', tokenPair, user);

			return {
				tokens: tokenPair,
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
