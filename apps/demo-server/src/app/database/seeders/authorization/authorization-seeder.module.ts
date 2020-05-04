import { Module } from '@nestjs/common';
import { Authorization } from '@workspace/model';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { AuthorizationSeederService } from './authorization.seeder.service';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [Authorization] })],
	providers: [AuthorizationSeederService],
	exports: [AuthorizationSeederService],
})
export class AuthorizationSeederModule {
	public constructor() {}
}
