import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryService {
	public constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
		console.log('Repo up');
	}

	public getUsers(): Promise<User[]> {
		return this.userRepository.find();
	}

	public findUser(user: User): Promise<User | undefined> {
		return this.userRepository.findOne(user);
	}

	public save(user: User): Promise<User> {
		return this.userRepository.save(user);
	}
}
