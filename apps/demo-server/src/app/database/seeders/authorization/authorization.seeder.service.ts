import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Authorization, IAuthorization } from '@workspace/model';
import { Repository } from 'typeorm';
import { data } from './data';

@Injectable()
export class AuthorizationSeederService {
	public constructor(
		@InjectRepository(Authorization)
		private readonly authorizationRepository: Repository<Authorization>
	) {}

	public create(): Array<Promise<Authorization>> {
		return data.map(async (authorization: IAuthorization) => {
			return await this.authorizationRepository.save(authorization);
		});
	}
}
