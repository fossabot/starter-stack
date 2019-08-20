import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { importToArray } from '@workspace/misc';
import * as model from '@workspace/model';

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
			entities: [
				...importToArray(model).map(m => {
					console.log('Importin entity: ', m);
					return m;
				})
			],
			synchronize: true,
			debug: false,
			migrations: ['src/migration/**/**{.ts,.js}']
		};
	}
}
