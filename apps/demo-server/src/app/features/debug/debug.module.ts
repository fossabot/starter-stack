import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { BCryptModule } from '../auth/features/bcrypt/bcrypt.module';
import { DebugController } from './controllers/debug.controller';

@Module({
	imports: [AuthModule, BCryptModule],
	controllers: [DebugController],
	providers: []
})
export class DebugModule {
	public constructor() {}
}
