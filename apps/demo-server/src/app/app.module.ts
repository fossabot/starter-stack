import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './features/auth/auth.module';
import { RoleGuard } from './features/auth/guards/role.guard';
import { RepositoryModule } from './repository/repository.module';

@Module({
	imports: [DatabaseModule, RepositoryModule, AuthModule],
	controllers: [AppController],
	providers: [
		AppService,
		{
			// TODO: Place it further down into controller modules
			provide: APP_GUARD,
			useClass: RoleGuard
		}
	]
})
export class AppModule {
	public constructor() {}
}
