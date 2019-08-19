import { SignOptions } from 'jsonwebtoken';

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
		signOptions: SignOptions;
	};
}

/**
 * Default environmental values, these are meant to be overridden.
 */
export const initialEnvironment: Environment = {
	production: false,
	artifact: {
		name: 'Demo Api',
		version: '0.0.1',
		description: 'Demo Description'
	},
	api: {
		globalPrefix: 'api'
	},
	encryption: {
		saltRounds: 10,
		secret: 'secret'
	},
	authentication: {
		signOptions: {
			expiresIn: '6h',
			issuer: 'demo-api',
			algorithm: 'HS512',
			audience: 'demo-app',
			subject: 'auth'
		}
	}
};
