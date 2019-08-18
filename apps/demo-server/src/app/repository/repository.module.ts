import { Global, Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user-repository.module';

@Global()
@Module({
	imports: [UserRepositoryModule],
	providers: [],
	exports: [UserRepositoryModule]
})
export class RepositoryModule {}
