import { Injectable } from '@nestjs/common';
import { AuthorizationGroup } from '@workspace/model';
import { EntityRepository } from 'mikro-orm';
import { InjectRepository } from 'nestjs-mikro-orm';
import { data } from './data';

@Injectable()
export class AuthorizationGroupSeederService {
	public constructor(
		@InjectRepository(AuthorizationGroup)
		private readonly authorizationGroupRepository: EntityRepository<AuthorizationGroup>
	) {}

	public create(): Array<Promise<AuthorizationGroup>> {
		return data.map(async (authorizationGroup: AuthorizationGroup) => {
			await this.authorizationGroupRepository.persistAndFlush(authorizationGroup);
			return authorizationGroup;
		});
	}
}
