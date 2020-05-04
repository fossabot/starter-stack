import { Injectable } from '@nestjs/common';
import { importToArray } from '@workspace/misc';
import * as model from '@workspace/model';
import { Options } from 'mikro-orm';

@Injectable()
export class DatabaseConfigService {
	public constructor() {}

	public get defaultConfig(): Options {
		return {
			type: 'postgresql',
			host: 'localhost',
			port: 5432,
			dbName: 'starterstackdb',
			entities: [
				...importToArray(model).map((m) => {
					console.log('Importing entity: ', m);
					return m;
				}),
			],
			entitiesDirsTs: ['src'],
			debug: true,
		};
	}
}
