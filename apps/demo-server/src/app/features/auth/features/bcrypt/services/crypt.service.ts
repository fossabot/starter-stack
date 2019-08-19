import { environment } from '@env';
import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class BCryptService {
	public constructor() {}

	public async encrypt(plain: string): Promise<string> {
		return await hash(plain, await genSalt(environment.encryption.saltRounds));
	}

	public compare(hashed: string, plain: string): Promise<boolean> {
		console.log('Compare', hashed, plain);
		return compare(plain, hashed);
	}
}
