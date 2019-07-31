import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { RepositoryService } from './repository.service';

@Global()
@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [RepositoryService],
	exports: [RepositoryService]
})
export class RepositoryModule {}
