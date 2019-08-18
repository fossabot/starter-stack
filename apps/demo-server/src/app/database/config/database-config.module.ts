import { Module } from '@nestjs/common';
import { DatabaseConfigService } from './services/config.service';

@Module({
	imports: [DatabaseConfigService],
	controllers: [],
	providers: [DatabaseConfigService],
	exports: [DatabaseConfigService]
})
export class DatabaseConfigModule {
	public constructor() {}
}
