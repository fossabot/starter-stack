import { Module } from '@nestjs/common';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { DatabaseConfigModule } from './config/database-config.module';
import { DatabaseConfigService } from './config/services/config.service';

@Module({
	imports: [
		MikroOrmModule.forRootAsync({
			imports: [DatabaseConfigModule],
			inject: [DatabaseConfigService],
			useFactory: async (configService: DatabaseConfigService) => configService.defaultConfig,
		}),
	],
	controllers: [],
	providers: [],
})
export class DatabaseModule {
	public constructor() {}
}
