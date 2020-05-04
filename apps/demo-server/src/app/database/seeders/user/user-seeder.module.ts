import { Module } from '@nestjs/common';
import { User } from '@workspace/model';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { UserSeederService } from './user-seeder.service';

@Module({
	imports: [MikroOrmModule.forFeature({ entities: [User] })],
	providers: [UserSeederService],
	exports: [UserSeederService],
})
export class UserSeederModule {
	public constructor() {}
}
