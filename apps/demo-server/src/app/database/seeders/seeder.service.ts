import { Injectable } from '@nestjs/common';
import { UserSeederService } from './user/user-seeder.service';

@Injectable()
export class SeederService {
	public constructor(private readonly userSeederService: UserSeederService) {}

	public seeds(): Promise<any>[] {
		return this.userSeederService.create();
	}

	async seed() {
		try {
			const completedUsers = await this.users();
			console.debug(`Successfuly completed seeding users... ${completedUsers}`);
		} catch (err) {
			console.error('Failed seeding users...', err);
		}
	}
	async users(): Promise<boolean> {
		const createdUsers = await Promise.all(this.userSeederService.create());
		this.userSeederService;
		console.log(createdUsers);
		console.debug(`No. of users created : ${createdUsers.filter(u => !!u).length}`);
		return true;
	}
}
