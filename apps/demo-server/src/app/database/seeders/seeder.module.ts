import { Logger, Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { AuthorizationSeederModule } from './authorization';
import { AuthorizationGroupSeederModule } from './authorization-group';
import { SeederService } from './seeder.service';
import { UserSeederModule } from './user';

@Module({
	imports: [DatabaseModule, UserSeederModule, AuthorizationGroupSeederModule, AuthorizationSeederModule, Logger],
	providers: [SeederService],
	exports: [SeederService]
})
export class SeederModule {
	public constructor() {}
}
