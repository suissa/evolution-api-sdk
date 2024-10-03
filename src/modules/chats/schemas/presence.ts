import { z } from "zod";

import { phoneNumberSchema } from "@/schemas/common";

export const PresenceOptionsSchema = z.object({
	/**
	 * Chat number to receve the presence
	 */
	number: phoneNumberSchema,
	/**
	 * Duration of the presence in millisseconds
	 */
	duration: z.number(),
	/**
	 * Presence state
	 * - `composing`: typing a message
	 * - `recording`: recording an audio
	 */
	presence: z.enum(["composing", "recording"]),
	/**
	 * Whether to wait until the presence is finished (duration)
	 */
	waitUntilFinish: z.boolean().optional(),
});

export const PresenceBodySchema = PresenceOptionsSchema.transform(
	({ waitUntilFinish, duration, ...data }) => ({ ...data, delay: duration }),
);

export type PresenceOptions = z.infer<typeof PresenceOptionsSchema>;

export {
	PresenceBodySchema as BodySchema,
	PresenceOptionsSchema as OptionsSchema,
};
