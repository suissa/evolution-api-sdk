import { z } from "zod";

const WebhookSchema = z.object({
	url: z.string().optional(),
	byEvents: z.boolean().optional(),
	base64: z.boolean().optional(),
	headers: z.record(z.string()).optional(),
	events: z.array(z.string()).optional(),
}).optional();

const RabbitMQSchema = z.object({
	enabled: z.boolean().optional(),
	events: z.array(z.string()).optional(),
}).optional();

const SQSSchema = z.object({
	enabled: z.boolean().optional(),
	events: z.array(z.string()).optional(),
}).optional();

export const CreateBodySchema = z.object({
	instanceName: z.string(),
	token: z.string().optional(),
	qrcode: z.boolean().optional(),
	number: z.string().optional(),
	integration: z.string().optional(),
	rejectCall: z.boolean().optional(),
	msgCall: z.string().optional(),
	groupsIgnore: z.boolean().optional(),
	alwaysOnline: z.boolean().optional(),
	readMessages: z.boolean().optional(),
	readStatus: z.boolean().optional(),
	syncFullHistory: z.boolean().optional(),
	proxyHost: z.string().optional(),
	proxyPort: z.string().optional(),
	proxyProtocol: z.string().optional(),
	proxyUsername: z.string().optional(),
	proxyPassword: z.string().optional(),
	webhook: WebhookSchema,
	rabbitmq: RabbitMQSchema,
	sqs: SQSSchema,
	chatwootAccountId: z.number().optional(),
	chatwootToken: z.string().optional(),
	chatwootUrl: z.string().optional(),
	chatwootSignMsg: z.boolean().optional(),
	chatwootReopenConversation: z.boolean().optional(),
	chatwootConversationPending: z.boolean().optional(),
	chatwootImportContacts: z.boolean().optional(),
	chatwootNameInbox: z.string().optional(),
	chatwootMergeBrazilContacts: z.boolean().optional(),
	chatwootImportMessages: z.boolean().optional(),
	chatwootDaysLimitImportMessages: z.number().optional(),
	chatwootOrganization: z.string().optional(),
	chatwootLogo: z.string().optional(),
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