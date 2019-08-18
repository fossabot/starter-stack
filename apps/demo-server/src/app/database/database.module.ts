import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MainDatabaseConfigModule } from './config/main-database-config.module';
import { MainDatabaseConfigService } from './config/services/config.service';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [MainDatabaseConfigModule],
			useFactory: async (mysqlConfigService: MainDatabaseConfigService) =>
				({
					...mysqlConfigService.defaultConfig
				} as TypeOrmModuleOptions),
			inject: [MainDatabaseConfigService]
		} as TypeOrmModuleAsyncOptions)
	],
	controllers: [],
	providers: []
})
export class DatabaseModule {
	public constructor() {}
}
