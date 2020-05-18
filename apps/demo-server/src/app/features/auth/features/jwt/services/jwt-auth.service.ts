import { environment } from '@env';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Token, TokenPair, TokenPayload, TokenType } from '@workspace/demo-server-api';
import { User } from '@workspace/model';
import { SignOptions } from 'jsonwebtoken';

@Injectable()
export class JwtAuthService {
	private accessTokenSignOptions: SignOptions = {
		...environment.authentication.accessTokenSignOptions,
	};

	private refreshTokenSignOptions: SignOptions = {
		...environment.authentication.refreshTokenSignOptions,
	};

	public constructor(private readonly jwtService: JwtService) {}

	public async generateTokenPair(user: User): Promise<TokenPair> {
		console.log('Generating token pair', user);
		return {
			accessToken: await this.jwtService.signAsync({ user }, this.accessTokenSignOptions),
			refreshToken: await this.jwtService.signAsync(
				{ userId: user.id },
				this.refreshTokenSignOptions
			),
		};
	}

	public async validateToken(
		token: Token,
		type: TokenType = TokenType.ACCESS_TOKEN
	): Promise<object> {
		switch (type) {
			case TokenType.ACCESS_TOKEN:
				return await this.jwtService.verifyAsync<TokenPayload>(
					token,
					this.accessTokenSignOptions
				);
			case TokenType.REFRESH_TOKEN:
				return await this.jwtService.verifyAsync<TokenPayload>(
					token,
					this.refreshTokenSignOptions
				);
		}
	}
}
