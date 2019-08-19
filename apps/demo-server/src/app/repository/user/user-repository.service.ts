import { CryptService } from '@app/features/auth/services/crypt.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryService {
	public constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private readonly crypt: CryptService) {
		console.log('Repo up');
	}

	public getUsers(): Promise<User[]> {
		return this.userRepository.find();
	}

	public async findUser(username: string, password: string): Promise<User | undefined> {
		const userByUsername = await this.userRepository.findOne({ name: username });
		if (userByUsername && (await this.crypt.compare(userByUsername.password, password))) {
			return userByUsername;
		} else throw new Error('Bad Pass In Repo');
	}

	/**
	 *
	 * @param user will be saved into the database, and it's password will be encrypted
	 */
	public async save(user: User): Promise<User> {
		return this.userRepository.save({ ...user, password: await this.crypt.encrypt(user.password) });
	}
}
