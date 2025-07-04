import { z } from "zod";

export const CreateBodySchema = z.object({
	instanceName: z.string(),
	token: z.string().optional(),
	qrcode: z.boolean().optional(),
	webhook: z.string().optional(),
	webhook_by_events: z.boolean().optional(),
	events: z.array(z.string()).optional(),
});

export type CreateOptions = z.infer<typeof CreateBodySchema>;

export const CreateResponseSchema = z.object({
	instance: z.object({
		instanceName: z.string(),
		status: z.string(),
	}),
	hash: z.object({
		apikey: z.string(),
	}),
	qrcode: z.object({
		code: z.string(),
		base64: z.string(),
	}),
});

export type CreateResponse = z.infer<typeof CreateResponseSchema>; 