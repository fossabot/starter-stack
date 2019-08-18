import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '@workspace/model';

@Injectable()
export class DatabaseConfigService {
	public constructor() {}

	public get defaultConfig(): TypeOrmModuleOptions {
		return {
			type: 'mysql',
			host: 'localhost',
			port: 33060,
			database: 'demo',
			username: 'demo',
			password: 'secret',
			entities: [User],
			synchronize: true,
			debug: false,
			migrations: ['src/migration/**/**{.ts,.js}']
		};
	}
}
