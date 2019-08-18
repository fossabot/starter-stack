import { Injectable } from '@nestjs/common';
import { User } from '@workspace/model';
import { RepositoryService } from './repository/repository.service';

@Injectable()
export class AppService {
	public constructor(private repositoryService: RepositoryService) {}
	public async getData(): Promise<{ message: string; users: User[] }> {
		return { message: 'Welcome to demo-server!', users: await this.repositoryService.getUsers() };
	}
}
