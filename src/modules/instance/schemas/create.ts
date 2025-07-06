// Pure TypeScript interfaces for better IDE support and performance

export interface WebhookConfig {
	url?: string;
	byEvents?: boolean;
	base64?: boolean;
	headers?: Record<string, string>;
	events?: string[];
}

export interface RabbitMQConfig {
	enabled?: boolean;
	events?: string[];
}

export interface SQSConfig {
	enabled?: boolean;
	events?: string[];
}

export interface CreateInstanceRequest {
	instanceName: string;
	token?: string;
	qrcode?: boolean;
	number?: string;
	integration?: string;

	// Call settings
	rejectCall?: boolean;
	msgCall?: string;

	// Group and status settings
	groupsIgnore?: boolean;
	alwaysOnline?: boolean;
	readMessages?: boolean;
	readStatus?: boolean;
	syncFullHistory?: boolean;

	// Proxy settings (flat fields)
	proxyHost?: string;
	proxyPort?: string;
	proxyProtocol?: "http" | "https";
	proxyUsername?: string;
	proxyPassword?: string;

	// Webhook settings (nested object)
	webhook?: WebhookConfig;

	// RabbitMQ settings (nested object)
	rabbitmq?: RabbitMQConfig;

	// SQS settings (nested object)
	sqs?: SQSConfig;

	// Chatwoot settings
	chatwootAccountId?: number;
	chatwootToken?: string;
	chatwootUrl?: string;
	chatwootSignMsg?: boolean;
	chatwootReopenConversation?: boolean;
	chatwootConversationPending?: boolean;
	chatwootImportContacts?: boolean;
	chatwootNameInbox?: string;
	chatwootMergeBrazilContacts?: boolean;
	chatwootImportMessages?: boolean;
	chatwootDaysLimitImportMessages?: number;
	chatwootOrganization?: string;
	chatwootLogo?: string;
}

export interface InstanceInfo {
	instanceName: string;
	instanceId: string;
	webhook_wa_business?: string | null;
	access_token_wa_business?: string;
	status: string;
}

export interface InstanceSettings {
	rejectCall?: boolean;
	msgCall?: string;
	groupsIgnore?: boolean;
	alwaysOnline?: boolean;
	readMessages?: boolean;
	readStatus?: boolean;
	syncFullHistory?: boolean;
}

export interface QRCodeInfo {
	code: string;
	base64: string;
}

export interface CreateInstanceResponse {
	instance: InstanceInfo;
	hash: string; // API returns a string, not an object
	settings?: InstanceSettings; // Settings might not always be present
	qrcode?: QRCodeInfo;
}