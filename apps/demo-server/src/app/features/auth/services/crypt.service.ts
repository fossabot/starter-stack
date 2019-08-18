import { environment } from '@env';
import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class CryptService {
	public constructor() {}

	public async encrypt(plain: string): Promise<string> {
		return await hash(plain, await genSalt(environment.encryption.saltRounds));
	}

	public compare(hashed: string, plain: string): Promise<boolean> {
		return compare(plain, hashed);
	}
}
