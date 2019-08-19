import { SignOptions } from 'jsonwebtoken';

/**
 * Environment shape
 */
export interface Environment {
	/**
	 * Whether the app is in production mode or not
	 */
	production: boolean;
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
