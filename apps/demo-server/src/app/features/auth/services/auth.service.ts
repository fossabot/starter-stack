import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from '../../../repository/user/user-repository.service';
import { LoginFailedError } from '../errors/invalid-login.error';
import { JwtAuthService } from '../features/jwt/services/jwt-auth.service';

@Injectable()
export class AuthService {
	public constructor(private userRepositoryService: UserRepositoryService, private readonly au: JwtAuthService) {}

	public async login(username: string, password: string): Promise<string> {
		const user = await this.userRepositoryService.findUser(username, password);
		if (user) {
			return this.au.generateToken(user);
		} else {
			throw new LoginFailedError(['Incorrect Password']);
		}
	}
}
