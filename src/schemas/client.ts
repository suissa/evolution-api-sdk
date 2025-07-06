// Pure TypeScript interfaces for better IDE support and performance

/**
 * Configuration options for the Evolution API client
 */
export interface ClientOptions {
	/**
	 * Your server URL
	 */
	serverUrl: string;
	/**
	 * Your instance token or global API key
	 */
	token: string;
	/**
	 * Your instance name
	 */
	instance?: string;
	/**
	 * Custom headers to include in requests
	 */
	headers?: Record<string, string>;
}
