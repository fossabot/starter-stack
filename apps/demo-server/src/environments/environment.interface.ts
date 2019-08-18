/**
 * Environment shape
 */
export interface Environment {
	/**
	 * Whether the app is in production mode or not
	 */
	production: boolean;
}

/**
 * Default environmental values, these are meant to be overridden.
 */
export const initialEnvironment: Environment = {
	production: false
};
