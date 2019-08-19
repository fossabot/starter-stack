import { Module } from '@nestjs/common';
import { RepositoryModule } from '../../repository/repository.module';
import { AuthController } from './controllers/auth.controller';
import { JwtAuthModule } from './features/jwt/jwt-auth.module';
import { AuthGuard, RoleGuard } from './guards';
import { AuthService } from './services/auth.service';

@Module({
	imports: [RepositoryModule, JwtAuthModule],
	controllers: [AuthController],
	providers: [AuthService, AuthGuard, RoleGuard]
})
export class AuthModule {
	public constructor() {}
}
