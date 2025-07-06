import { z } from "zod";

const ProxySchema = z.object({
	host: z.string(),
	port: z.string(),
	protocol: z.enum(["http", "https"]),
	username: z.string().optional(),
	password: z.string().optional(),
}).optional();

export const CreateBodySchema = z.object({
	instanceName: z.string(),
	token: z.string().optional(),
	qrcode: z.boolean().optional(),
	number: z.string().optional(),
	integration: z.string().optional(),
	
	// Webhook settings (flat fields)
	webhook: z.string().optional(),
	webhook_by_events: z.boolean().optional(),
	events: z.array(z.string()).optional(),
	
	// Call settings
	reject_call: z.boolean().optional(),
	msg_call: z.string().optional(),
	
	// Group and status settings
	groups_ignore: z.boolean().optional(),
	always_online: z.boolean().optional(),
	read_messages: z.boolean().optional(),
	read_status: z.boolean().optional(),
	
	// WebSocket settings
	websocket_enabled: z.boolean().optional(),
	websocket_events: z.array(z.string()).optional(),
	
	// RabbitMQ settings (flat fields)
	rabbitmq_enabled: z.boolean().optional(),
	rabbitmq_events: z.array(z.string()).optional(),
	
	// SQS settings (flat fields)
	sqs_enabled: z.boolean().optional(),
	sqs_events: z.array(z.string()).optional(),
	
	// Typebot settings
	typebot_url: z.string().optional(),
	typebot: z.string().optional(),
	typebot_expire: z.number().optional(),
	typebot_keyword_finish: z.string().optional(),
	typebot_delay_message: z.number().optional(),
	typebot_unknown_message: z.string().optional(),
	typebot_listening_from_me: z.boolean().optional(),
	
	// Proxy settings (nested object)
	proxy: ProxySchema,
	
	// Chatwoot settings (flat fields)
	chatwoot_account_id: z.number().optional(),
	chatwoot_token: z.string().optional(),
	chatwoot_url: z.string().optional(),
	chatwoot_sign_msg: z.boolean().optional(),
	chatwoot_reopen_conversation: z.boolean().optional(),
	chatwoot_conversation_pending: z.boolean().optional(),
});

export type CreateOptions = z.infer<typeof CreateBodySchema>;

export const CreateResponseSchema = z.object({
	instance: z.object({
		instanceName: z.string(),
		instanceId: z.string(),
		webhook_wa_business: z.string().nullable(),
		access_token_wa_business: z.string(),
		status: z.string(),
	}),
	hash: z.object({
		apikey: z.string(),
	}),
	settings: z.object({
		reject_call: z.boolean(),
		msg_call: z.string(),
		groups_ignore: z.boolean(),
		always_online: z.boolean(),
		read_messages: z.boolean(),
		read_status: z.boolean(),
		sync_full_history: z.boolean(),
	}),
	qrcode: z.object({
		code: z.string(),
		base64: z.string(),
	}).optional(),
});

export type CreateResponse = z.infer<typeof CreateResponseSchema>; 