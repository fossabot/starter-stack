import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { UserRepositoryService } from './user-repository.service';

@Global()
@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [UserRepositoryService],
	exports: [UserRepositoryService]
})
export class UserRepositoryModule {}
