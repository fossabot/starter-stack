import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationGroup } from '@workspace/model';
import { AuthorizationGroupSeederService } from './authorization-group.seeder.service';

@Module({
	imports: [TypeOrmModule.forFeature([AuthorizationGroup])],
	providers: [AuthorizationGroupSeederService],
	exports: [AuthorizationGroupSeederService]
})
export class AuthorizationGroupSeederModule {
	public constructor() {}
}
