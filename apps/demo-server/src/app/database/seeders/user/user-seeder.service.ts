import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser, User } from '@workspace/model';
import { Repository } from 'typeorm';
import { users } from './data';

@Injectable()
export class UserSeederService {
	public constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	public create(): Array<Promise<User>> {
		return users.map(async (user: IUser) => {
			return await this.userRepository.save(user);
		});
	}
}
