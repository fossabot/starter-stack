import { Injectable, Logger } from '@nestjs/common';
import { UserSeederService } from './user/user-seeder.service';

@Injectable()
export class SeederService {
	public constructor(private logger: Logger, private readonly userSeederService: UserSeederService) {}

	public seeds(): Promise<any>[] {
		return this.userSeederService.create();
	}

	async seed() {
		try {
			const completedUsers = await this.users();
			this.logger.debug(`Successfuly completed seeding users... ${completedUsers}`);
		} catch (err) {
			this.logger.error('Failed seeding users...', err);
		}
	}
	async users(): Promise<boolean> {
		const createdUsers = await Promise.all(this.userSeederService.create());
		this.logger.debug(`No. of languages created : ${createdUsers.filter(u => !!u).length}`);
		return true;
	}
}
