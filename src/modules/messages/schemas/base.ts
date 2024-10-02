import { z } from "zod";

import { phoneNumberSchema } from "@/schemas/common";

export const BaseMessageOptionsSchema = z.object({
	/**
	 * Number to receive the message (with country code)
	 */
	number: phoneNumberSchema,
	/**
	 * Time in milliseconds before sending message
	 */
	delay: z.number().optional(),
});

export type BaseMessageOptions = z.infer<typeof BaseMessageOptionsSchema>;
