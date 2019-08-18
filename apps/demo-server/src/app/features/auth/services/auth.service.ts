import { Injectable } from '@nestjs/common';
import { User } from '@workspace/model';
import { UserRepositoryService } from '../../../repository/user/user-repository.service';

@Injectable()
export class AuthService {
	public constructor(private userRepositoryService: UserRepositoryService) {}

	public login(user: User): Promise<User | undefined> {
		return this.userRepositoryService.findUser(user);
	}
}
