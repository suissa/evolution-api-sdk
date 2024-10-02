import { z } from "zod";

import { mediaSchema } from "@/schemas/common";
import type { Jid, MessageId } from "@/types/common";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptionsSchema } from "./base";

export const ImageMessageOptionsSchema = BaseMessageOptionsSchema.extend({
	/**
	 * Image URL or file in base64
	 */
	image: mediaSchema,
	/**
	 * Caption to send with image
	 */
	caption: z.string().optional(),
	/**
	 * Image mimetype
	 */
	mimetype: z.string().optional(),
});

export const ImageMessageBodySchema = ImageMessageOptionsSchema.transform(
	({ image, ...data }) => ({ ...data, media: image, mediatype: "image" }),
);

export const ImageMessageResponseSchema = z
	.object({
		key: z.object({
			remoteJid: z.string(),
			id: z.string(),
		}),
		message: z.object({
			imageMessage: z.object({
				url: z.string().url(),
				mimetype: z.string().optional(),
				fileSha256: z.string().base64(),
				fileLength: z.coerce.number(),
				height: z.number(),
				width: z.number(),
				mediaKey: z.string().base64(),
				caption: z.string().optional(),
				fileEncSha256: z.string().base64(),
				directPath: z.string(),
				mediaKeyTimestamp: z.coerce.date(),
			}),
		}),
		messageTimestamp: z.coerce.date(),
	})
	.transform((data) => ({
		receiver: {
			phoneNumber: phoneNumberFromJid(data.key.remoteJid),
			jid: data.key.remoteJid as Jid,
		},
		media: {
			url: data.message.imageMessage.url,
			caption: data.message.imageMessage.caption,
			mimetype: data.message.imageMessage.mimetype,
			length: data.message.imageMessage.fileLength,
			height: data.message.imageMessage.height,
			width: data.message.imageMessage.width,
			sha256: data.message.imageMessage.fileSha256,
			encryptedSha256: data.message.imageMessage.fileEncSha256,
			directPath: data.message.imageMessage.directPath,
			key: data.message.imageMessage.mediaKey,
			keyTimestamp: data.message.imageMessage.mediaKeyTimestamp,
		},
		id: data.key.id as MessageId,
		timestamp: data.messageTimestamp,
	}));

export type ImageMessageOptions = z.infer<typeof ImageMessageOptionsSchema>;
export type ImageMessageResponse = z.infer<typeof ImageMessageResponseSchema>;

export {
	ImageMessageBodySchema as BodySchema,
	ImageMessageOptionsSchema as OptionsSchema,
	ImageMessageResponseSchema as ResponseSchema,
};
