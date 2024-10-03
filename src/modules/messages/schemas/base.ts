import { z } from "zod";

import { apiNumberSchema } from "@/schemas/common";

export const BaseMessageOptionsSchema = z.object({
	/**
	 * Number (with country code) or JID to receive the message
	 */
	number: apiNumberSchema,
	/**
	 * Time in milliseconds before sending message
	 */
	delay: z.number().optional(),
});

export type BaseMessageOptions = z.infer<typeof BaseMessageOptionsSchema>;
