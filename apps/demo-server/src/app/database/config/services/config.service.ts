import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as model from '@workspace/model';

export function importToArray<Key extends string, PropType>(importObject: Record<Key, PropType>): PropType[] {
	const keys: Key[] = Object.getOwnPropertyNames(importObject) as Key[];

	// ES6 / TypeScript exports contain a __esModule property. Don't include that.
	return keys.filter(key => key.indexOf('__') !== 0).map(key => importObject[key]);
}
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
			entities: [...importToArray(model)],
			synchronize: true,
			debug: false,
			migrations: ['src/migration/**/**{.ts,.js}']
		};
	}
}
