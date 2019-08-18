import { Injectable } from '@nestjs/common';
import { User } from '@workspace/model';
import { UserRepositoryService } from './repository/user/user-repository.service';

@Injectable()
export class AppService {
	public constructor(private userRepositoryService: UserRepositoryService) {}
	public async getData(): Promise<{ message: string; users: User[] }> {
		return { message: 'Welcome to demo-server!', users: await this.userRepositoryService.getUsers() };
	}
}
