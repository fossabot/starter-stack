import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { UserSeederService } from './user-seeder.service';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [UserSeederService],
	exports: [UserSeederService]
})
export class UserSeederModule {
	public constructor() {}
}
