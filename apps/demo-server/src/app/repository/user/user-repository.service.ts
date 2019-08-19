import { BCryptService } from '@app/features/auth/features/bcrypt/services/crypt.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryService {
	public constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
		private readonly bCryptService: BCryptService
	) {
		console.log('Repo up');
	}

	public getUsers(): Promise<User[]> {
		return this.userRepository.find();
	}

	public async findUser(username: string, password: string): Promise<User | undefined> {
		const userByUsername = await this.userRepository.findOne({ username });
		console.log('Shieeeet', username, password, userByUsername);

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
		return this.userRepository.save({ ...user, password: await this.bCryptService.encrypt(user.password) });
	}
}
