import { BCryptService } from '@app/features/auth/features/bcrypt/services/crypt.service';
import { Injectable } from '@nestjs/common';
import { User } from '@workspace/model';
import { EntityRepository } from 'mikro-orm';
import { InjectRepository } from 'nestjs-mikro-orm';

@Injectable()
export class UserRepositoryService {
	public constructor(
		@InjectRepository(User) private readonly userRepository: EntityRepository<User>,
		private readonly bCryptService: BCryptService
	) {
		console.log('Repo up');
	}

	public getUsers(): Promise<User[]> {
		return this.userRepository.findAll();
	}

	public async findUser(username: string, password: string): Promise<User> {
		const userByUsername = await this.userRepository.findOne({ username });
		if (userByUsername) {
			if (await this.bCryptService.compare(userByUsername.password, password)) {
				return userByUsername;
			} else throw new Error('Bad Pass In Repo');
		} else throw new Error('No Such User');
	}

	/**
	 *
	 * @param user will be saved into the database, and it's password will be encrypted
	 */
	public async save(user: User): Promise<User> {
		this.userRepository.persistAndFlush({
			...user,
			password: await this.bCryptService.encrypt(user.password),
		});
		return user;
	}
}
