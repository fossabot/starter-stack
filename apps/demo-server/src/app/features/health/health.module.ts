import { DatabaseModule } from '@app/database/database.module';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

/**
 * Exposes a healthcheck endpoint which internally checkes services, in this case, the database
 * that it's alive and well
 */
@Module({
	imports: [DatabaseModule, TerminusModule],
})
export class HealthModule {}
