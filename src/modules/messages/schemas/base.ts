// Pure TypeScript interfaces for better IDE support and performance
export interface BaseMessageOptions {
	/**
	 * Number (with country code) or JID to receive the message
	 */
	number: string;
	/**
	 * Time in milliseconds before sending message
	 */
	delay?: number;
}
