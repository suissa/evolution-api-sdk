import { z } from "zod";

const TextMessageSchema = z.object({
	messageType: z.literal("text"),
	conversation: z.string(),
	extendedTextMessage: z.object({
		text: z.string(),
	}),
});

const ImageMessageSchema = z.object({
	messageType: z.literal("image"),
	imageMessage: z.object({
		url: z.string().url(),
		mimetype: z.string().optional(),
		caption: z.string().optional(),
	}),
});

const AudioMessageSchema = z.object({
	messageType: z.literal("audio"),
	audioMessage: z.object({
		url: z.string().url(),
		mimetype: z.string().optional(),
		seconds: z.number(),
	}),
});

const MessageSchema = z.discriminatedUnion("messageType", [
	TextMessageSchema,
	ImageMessageSchema,
	AudioMessageSchema,
]);

export const MessagesUpsertEventSchema = z.object({
	event: z.literal("messages.upsert"),
	instance: z.string(),
	data: z.object({
		key: z.object({
			remoteJid: z.string(),
			fromMe: z.boolean(),
			id: z.string(),
			participant: z.string().optional(),
		}),
		pushName: z.string(),
		message: MessageSchema,
		messageType: z.string(),
		messageTimestamp: z.number(),
		owner: z.string(),
		source: z.string(),
	}),
	date: z.string(),
	webhook: z.string(),
});

export type MessagesUpsertEvent = z.infer<typeof MessagesUpsertEventSchema>;

export const WebhookPayloadSchema = z.discriminatedUnion("event", [
	MessagesUpsertEventSchema,
]);

export type WebhookPayload = z.infer<typeof WebhookPayloadSchema>; 