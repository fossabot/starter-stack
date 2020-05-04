import { Injectable } from '@nestjs/common';
import { Authorization } from '@workspace/model';
import { EntityRepository } from 'mikro-orm';
import { InjectRepository } from 'nestjs-mikro-orm';
import { data } from './data';

@Injectable()
export class AuthorizationSeederService {
	public constructor(
		@InjectRepository(Authorization)
		private readonly authorizationRepository: EntityRepository<Authorization>
	) {}

	public create(): Array<Promise<Authorization>> {
		return data.map(async (authorization: Authorization) => {
			await this.authorizationRepository.persistAndFlush(authorization);
			return authorization;
		});
	}
}
