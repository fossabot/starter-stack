import { Injectable } from '@nestjs/common';
import { TokenPair } from '@workspace/demo-server-api';
import { User } from '@workspace/model';
import { UserRepositoryService } from '../../../repository/user/user-repository.service';
import { LoginFailedError } from '../errors/invalid-login.error';
import { JwtAuthService } from '../features/jwt/services/jwt-auth.service';

@Injectable()
export class AuthService {
	public constructor(
		private readonly userRepositoryService: UserRepositoryService,
		private readonly jwtAuthService: JwtAuthService
	) {}

	public async login(username: string, password: string): Promise<TokenPair> {
		try {
			const user = await this.userRepositoryService.findUser(username, password);
			if (user) {
				return await this.jwtAuthService.generateTokenPair(user);
			} else {
				throw new LoginFailedError(['Incorrect Password']);
			}
		} catch (e) {
			throw e;
		}
	}

	public async register(user: User): Promise<TokenPair> {
		try {
			const userModel = await this.userRepositoryService.save(user);
			if (userModel) {
				return this.jwtAuthService.generateTokenPair(userModel);
			} else {
				throw new LoginFailedError(['Incorrect Password']);
			}
		} catch (e) {
			throw e;
		}
	}
}
