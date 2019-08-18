import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseConfigModule } from './config/database-config.module';
import { DatabaseConfigService } from './config/services/config.service';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [DatabaseConfigModule],
			useFactory: async (mysqlConfigService: DatabaseConfigService) =>
				({
					...mysqlConfigService.defaultConfig
				} as TypeOrmModuleOptions),
			inject: [DatabaseConfigService]
		} as TypeOrmModuleAsyncOptions)
	],
	controllers: [],
	providers: []
})
export class DatabaseModule {
	public constructor() {}
}
