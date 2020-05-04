import { BCryptModule } from '@app/features/auth/features/bcrypt/bcrypt.module';
import { Global, Module } from '@nestjs/common';
import { User } from '@workspace/model';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { UserRepositoryService } from './user-repository.service';

@Global()
@Module({
	imports: [MikroOrmModule.forFeature({ entities: [User] }), BCryptModule],
	providers: [UserRepositoryService],
	exports: [UserRepositoryService],
})
export class UserRepositoryModule {}
