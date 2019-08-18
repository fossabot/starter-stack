import { Environment, initialEnvironment } from './environment.interface';

export const environment: Environment = {
	...initialEnvironment,
	production: true
};
