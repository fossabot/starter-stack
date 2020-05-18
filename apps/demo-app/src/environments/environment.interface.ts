import { version } from 'package.json';

/**
 * Environment shape
 */
export interface Environment {
	/**
	 * Application version, straight from the package.json
	 */
	version: string;

	/**
	 * Whether the app is in production mode or not
	 */
	production: boolean;

	/**
	 * The start of the URL
	 *
	 * Example: 'http://'
	 */
	protocol: string;

	/**
	 * The core of the URL
	 *
	 * Example: 'localhost'
	 */
	baseUrl: string;

	/**
	 * An optional port to be appended after the baseUrl
	 */
	port?: number;

	/**
	 * The prefix of the api
	 *
	 * Example: '/api/v1/'
	 */
	apiPrefix: string;

	/**
	 * The baseUrl and the optional port
	 */
	domain: string;

	/**
	 * The full api url assembled
	 */
	api: string;
}

/**
 * Default environmental values, these are meant to be overridden.
 */
export const initialEnvironment: Environment = {
	version,
	production: false,
	protocol: 'http://',
	baseUrl: 'localhost',
	port: 3333,
	apiPrefix: 'api',
	get domain(): string {
		return `${this.baseUrl}${this.port ? ':' + this.port : ''}`;
	},
	get api(): string {
		return `${this.protocol}${this.domain}${this.apiPrefix ? '/' + this.apiPrefix : ''}`;
	},
};
