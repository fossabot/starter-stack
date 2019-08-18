import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { Repository } from 'typeorm';

@Injectable()
export class RepositoryService {
	public constructor(@InjectRepository(User) public readonly userRepository: Repository<User>) {
		console.log('Repo up');
	}

	public getUsers(): Promise<User[]> {
		return this.userRepository.find();
	}
}
