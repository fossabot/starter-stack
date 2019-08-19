import { DatabaseModule } from '@app/database/database.module';
import { Module } from '@nestjs/common';
import { DiskHealthIndicator, TerminusModule, TerminusModuleOptions, TypeOrmHealthIndicator } from '@nestjs/terminus';

const getTerminusOptions = (db: TypeOrmHealthIndicator, disk: DiskHealthIndicator): TerminusModuleOptions => ({
	endpoints: [
		{
			// The health check will be available with /health
			url: '/health',
			// All the indicator which will be checked when requesting /health
			healthIndicators: [
				// Set the timeout for a response to 300ms
				async () => db.pingCheck('database', { timeout: 300 }),
				async () => disk.checkStorage('disk', { path: __dirname, thresholdPercent: 0.9 })
			]
		}
	]
});

/**
 * Exposes a healthcheck endpoint which internally checkes services, in this case, the database
 * that it's alive and well
 */
@Module({
	imports: [
		DatabaseModule,
		TerminusModule.forRootAsync({
			// Inject the TypeOrmHealthIndicator provided by nestjs/terminus
			inject: [TypeOrmHealthIndicator, DiskHealthIndicator],
			useFactory: (db, disk) => getTerminusOptions(db, disk)
		})
	]
})
export class HealthModule {}
