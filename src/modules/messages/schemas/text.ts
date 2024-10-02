import { z } from "zod";

import type { Jid, MessageId } from "@/types/common";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptionsSchema } from "./base";

export const TextMessageOptionsSchema = BaseMessageOptionsSchema.extend({
	/**
	 * Message text content
	 */
	text: z.string(),
	/**
	 * Whether link preview should be shown
	 */
	linkPreview: z.boolean().optional(),
});

export const TextMessageBodySchema = TextMessageOptionsSchema;

export const TextMessageResponseSchema = z
	.object({
		key: z.object({
			remoteJid: z.string(),
			id: z.string(),
		}),
		messageTimestamp: z.coerce.date(),
	})
	.transform((data) => ({
		receiver: {
			phoneNumber: phoneNumberFromJid(data.key.remoteJid),
			jid: data.key.remoteJid as Jid,
		},
		messageId: data.key.id as MessageId,
		timestamp: data.messageTimestamp,
	}));

export type TextMessageOptions = z.infer<typeof TextMessageOptionsSchema>;
export type TextMessageResponse = z.infer<typeof TextMessageResponseSchema>;

export {
	TextMessageBodySchema as BodySchema,
	TextMessageOptionsSchema as OptionsSchema,
	TextMessageResponseSchema as ResponseSchema,
};
