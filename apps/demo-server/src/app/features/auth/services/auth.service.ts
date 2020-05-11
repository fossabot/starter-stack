import { Injectable } from '@nestjs/common';
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

	public async login(username: string, password: string): Promise<string> {
		try {
			const user = await this.userRepositoryService.findUser(username, password);
			if (user) {
				return this.jwtAuthService.generateToken(user);
			} else {
				throw new LoginFailedError(['Incorrect Password']);
			}
		} catch (e) {
			throw e;
		}
	}

	public async register(user: User): Promise<string> {
		try {
			const userModel = await this.userRepositoryService.save(user);
			if (userModel) {
				return this.jwtAuthService.generateToken(userModel);
			} else {
				throw new LoginFailedError(['Incorrect Password']);
			}
		} catch (e) {
			throw e;
		}
	}
}
