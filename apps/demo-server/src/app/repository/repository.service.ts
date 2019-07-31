import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { Repository } from 'typeorm';

@Injectable()
export class RepositoryService {
	public constructor(@InjectRepository(User) public readonly userRepository: Repository<User>) {
		console.log('Repo up', userRepository);
	}
}
