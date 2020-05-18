import { SignOptions } from 'jsonwebtoken';
import { Package } from './package';
// tslint:disable-next-line: no-var-requires
const pkg = require('package.json') as Package; // Do not do this on client applications, instead query it from an api

/**
 * Environment shape
 */
export interface Environment {
	/**
	 * Whether the app is in production mode or not
	 */
	production: boolean;
	artifact: {
		name: string;
		version: string;
		description: string;
	};
	api: {
		globalPrefix: string;
	};
	encryption: {
		saltRounds: number;
		secret: string;
	};
	authentication: {
		accessTokenSignOptions: SignOptions;
		refreshTokenSignOptions: SignOptions;
	};
}

export const baseSignOptions: SignOptions = {
	issuer: 'demo-api',
	algorithm: 'HS512',
	audience: 'demo-app',
	subject: 'auth',
};

/**
 * Default environmental values, these are meant to be overridden.
 */
export const initialEnvironment: Environment = {
	production: false,
	artifact: {
		name: `${pkg.name} API`,
		version: pkg.version,
		description: `${pkg.description} - For the API`,
	},
	api: {
		globalPrefix: 'api',
	},
	encryption: {
		saltRounds: 10,
		secret: 'secret',
	},
	authentication: {
		accessTokenSignOptions: { ...baseSignOptions, expiresIn: '6s' }, // TODO: Change
		refreshTokenSignOptions: { ...baseSignOptions, expiresIn: '1h' }, // TODO: Change
	},
};
