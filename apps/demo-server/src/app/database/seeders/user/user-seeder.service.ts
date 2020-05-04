import { Injectable } from '@nestjs/common';
import { User } from '@workspace/model';
import { EntityRepository } from 'mikro-orm';
import { InjectRepository } from 'nestjs-mikro-orm';
import { data } from './data';

@Injectable()
export class UserSeederService {
	public constructor(
		@InjectRepository(User)
		private readonly userRepository: EntityRepository<User>
	) {}

	public create(): Array<Promise<User>> {
		return data.map(async (user: User) => {
			await this.userRepository.persistAndFlush(user);
			return user;
		});
	}
}
