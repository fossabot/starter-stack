import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './features/auth/auth.module';
import { DebugModule } from './features/debug/debug.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
	imports: [DatabaseModule, RepositoryModule, AuthModule, DebugModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
	public constructor() {}
}
