import { Module } from '@nestjs/common';
import { AuthorizationGroup } from '@workspace/model';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { AuthorizationGroupSeederService } from './authorization-group.seeder.service';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [AuthorizationGroup] })],
	providers: [AuthorizationGroupSeederService],
	exports: [AuthorizationGroupSeederService],
})
export class AuthorizationGroupSeederModule {
	public constructor() {}
}
