import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { RepositoryModule } from '../../repository/repository.module';
import { AuthController } from './controllers/auth.controller';
import { BCryptModule } from './features/bcrypt/bcrypt.module';
import { JwtAuthModule } from './features/jwt/jwt-auth.module';
import { AuthGuard, RoleGuard } from './guards';
import { AuthService } from './services/auth.service';

@Module({
	imports: [BCryptModule, RepositoryModule, JwtAuthModule],
	controllers: [AuthController],
	providers: [
		AuthService,

		{
			provide: APP_GUARD,
			useClass: AuthGuard
		},
		{
			provide: APP_GUARD,
			useClass: RoleGuard
		}
	]
})
export class AuthModule {
	public constructor() {}
}
