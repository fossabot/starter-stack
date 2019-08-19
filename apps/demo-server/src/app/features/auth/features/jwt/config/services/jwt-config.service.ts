import { environment } from '@env';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtConfigService {
	public constructor() {}

	public get secret(): string {
		return environment.encryption.secret;
	}
}
