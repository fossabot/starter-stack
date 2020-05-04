import { DatabaseModule } from '@app/database/database.module';
import { Module } from '@nestjs/common';
import { DiskHealthIndicator, TerminusModule, TerminusModuleOptions } from '@nestjs/terminus';

const getTerminusOptions = (disk: DiskHealthIndicator): TerminusModuleOptions => ({
	endpoints: [
		{
			// The health check will be available with /health
			url: '/health',
			// All the indicator which will be checked when requesting /health
			healthIndicators: [
				async () => disk.checkStorage('disk', { path: __dirname, thresholdPercent: 0.9 }),
			],
		},
	],
});

/**
 * Exposes a healthcheck endpoint which internally checkes services, in this case, the database
 * that it's alive and well
 */
@Module({
	imports: [
		DatabaseModule,
		TerminusModule.forRootAsync({
			inject: [DiskHealthIndicator],
			useFactory: (disk) => getTerminusOptions(disk),
		}),
	],
})
export class HealthModule {}
