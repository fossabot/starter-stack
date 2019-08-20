import { Logger, Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { AuthorizationSeederModule } from './authorization/authorization-seeder.module';
import { SeederService } from './seeder.service';
import { UserSeederModule } from './user/user-seeder.module';

@Module({
	imports: [DatabaseModule, UserSeederModule, AuthorizationSeederModule, Logger],
	providers: [SeederService],
	exports: [SeederService]
})
export class SeederModule {
	public constructor() {}
}
