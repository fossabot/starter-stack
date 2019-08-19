import { Environment, initialEnvironment } from './environment.interface';

export const environment: Environment = {
	...initialEnvironment,
	production: true,
	encryption: {
		...initialEnvironment.encryption,
		secret: process.env.JWT_SECRET || initialEnvironment.encryption.secret
	}
};
