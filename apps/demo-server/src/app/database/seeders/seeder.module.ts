import { Logger, Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { SeederService } from './seeder.service';
import { UserSeederModule } from './user/user-seeder.module';

@Module({
	imports: [DatabaseModule, UserSeederModule, Logger],
	providers: [SeederService],
	exports: [SeederService]
})
export class SeederModule {
	public constructor() {}
}
