import { Injectable } from '@nestjs/common';
import { AuthorizationSeederService } from './authorization/authorization.seeder.service';
import { UserSeederService } from './user/user-seeder.service';

@Injectable()
export class SeederService {
	public constructor(
		private readonly userSeederService: UserSeederService,
		private readonly authorizationSeederService: AuthorizationSeederService
	) {}

	async seed() {
		try {
			const completedUsers = await this.users();
			const completedAuthorizations = await this.authorizations();
			console.log(`Successfuly completed seeding users... ${completedUsers}`);
		} catch (err) {
			console.error('Failed seeding users...', err);
		}
	}
	async users(): Promise<boolean> {
		const createdUsers = await Promise.all(this.userSeederService.create());
		console.log(`No. of users created: ${createdUsers.filter(u => !!u).length}`);
		return true;
	}

	async authorizations(): Promise<boolean> {
		const createdAuthorizations = await Promise.all(this.authorizationSeederService.create());
		console.log(`No. of authorizations created: ${createdAuthorizations.filter(u => !!u).length}`);
		return true;
	}
}
