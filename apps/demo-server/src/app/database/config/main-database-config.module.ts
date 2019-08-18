import { Module } from '@nestjs/common';
import { MainDatabaseConfigService } from './services/config.service';

@Module({
	imports: [MainDatabaseConfigService],
	controllers: [],
	providers: [MainDatabaseConfigService],
	exports: [MainDatabaseConfigService]
})
export class MainDatabaseConfigModule {
	public constructor() {}
}
