import { importToArray } from '@workspace/misc';
import * as model from '@workspace/model';
import { Options } from 'mikro-orm';

const config = {
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
} as Options;

export default config;
