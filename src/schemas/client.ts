import { z } from "zod";

export const clientOptionsSchema = z.object({
	serverUrl: z.string().url(),
	/**
	 * Your instance token or global API key
	 */
	token: z.string(),
	/**
	 * Your instance name
	 */
	instance: z.string(),
});

export type ClientOptions = z.infer<typeof clientOptionsSchema>;
