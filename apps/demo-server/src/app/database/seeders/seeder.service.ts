import { Injectable } from '@nestjs/common';
import { AuthorizationGroupSeederService } from './authorization-group';
import { AuthorizationSeederService } from './authorization/authorization.seeder.service';
import { UserSeederService } from './user/user-seeder.service';

@Injectable()
export class SeederService {
	public constructor(
		private readonly userSeederService: UserSeederService,
		private readonly authorizationSeederService: AuthorizationSeederService,
		private readonly authorizationGroupSeederService: AuthorizationGroupSeederService
	) {}

	async seed() {
		try {
			const completedAuthorizations = await this.authorizations();
			const completedAuthorizationGroups = await this.authorizationGroups();
			const completedUsers = await this.users();
			console.log(`Successfuly completed seeding users... ${completedUsers}`);
		} catch (err) {
			console.error('Failed seeding users...', err);
		}
	}
	async users(): Promise<boolean> {
		const createdUsers = await Promise.all(this.userSeederService.create());
		console.log(`No. of users created: ${createdUsers.filter((u) => !!u).length}`);
		return true;
	}

	async authorizationGroups(): Promise<boolean> {
		const createdAuthorizationGroups = await Promise.all(
			this.authorizationGroupSeederService.create()
		);
		console.log(
			`No. of authorizations created: ${createdAuthorizationGroups.filter((u) => !!u).length}`
		);
		return true;
	}

	async authorizations(): Promise<boolean> {
		const createdAuthorizations = await Promise.all(this.authorizationSeederService.create());
		console.log(
			`No. of authorizations created: ${createdAuthorizations.filter((u) => !!u).length}`
		);
		return true;
	}
}
