import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorization } from '@workspace/model';
import { AuthorizationSeederService } from './authorization.seeder.service';

@Module({
	imports: [TypeOrmModule.forFeature([Authorization])],
	providers: [AuthorizationSeederService],
	exports: [AuthorizationSeederService]
})
export class AuthorizationSeederModule {
	public constructor() {}
}
