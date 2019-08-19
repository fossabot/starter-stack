import { BCryptModule } from '@app/features/auth/features/bcrypt/bcrypt.module';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@workspace/model';
import { UserRepositoryService } from './user-repository.service';

@Global()
@Module({
	imports: [TypeOrmModule.forFeature([User]), BCryptModule],
	providers: [UserRepositoryService],
	exports: [UserRepositoryService]
})
export class UserRepositoryModule {}
