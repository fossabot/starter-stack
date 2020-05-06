import { Controller, Get } from '@nestjs/common';
import {
	DiskHealthIndicator,
	DNSHealthIndicator,
	HealthCheck,
	HealthCheckService,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
	constructor(
		private health: HealthCheckService,
		private dns: DNSHealthIndicator,
		private disk: DiskHealthIndicator
	) {}

	@Get()
	@HealthCheck()
	healthCheck() {
		return this.health.check([
			async () => this.dns.pingCheck('google', 'https://google.com'),
			async () => this.disk.checkStorage('disk', { path: __dirname, thresholdPercent: 0.9 }),
		]);
	}
}
