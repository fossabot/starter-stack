import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorizationGroup, IAuthorizationGroup } from '@workspace/model';
import { Repository } from 'typeorm';
import { data } from './data';

@Injectable()
export class AuthorizationGroupSeederService {
	public constructor(
		@InjectRepository(AuthorizationGroup)
		private readonly authorizationGroupRepository: Repository<AuthorizationGroup>
	) {}

	public create(): Array<Promise<AuthorizationGroup>> {
		return data.map(async (authorizationGroup: IAuthorizationGroup) => {
			return await this.authorizationGroupRepository.save(authorizationGroup);
		});
	}
}
