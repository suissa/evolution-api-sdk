// Pure TypeScript interfaces for better IDE support and performance

export interface ProxyConfig {
	host: string;
	port: string;
	protocol: "http" | "https";
	username?: string;
	password?: string;
}

export interface CreateInstanceRequest {
	instanceName: string;
	token?: string;
	qrcode?: boolean;
	number?: string;
	integration?: string;
	
	// Webhook settings (flat fields)
	webhook?: string;
	webhook_by_events?: boolean;
	events?: string[];
	
	// Call settings
	reject_call?: boolean;
	msg_call?: string;
	
	// Group and status settings
	groups_ignore?: boolean;
	always_online?: boolean;
	read_messages?: boolean;
	read_status?: boolean;
	
	// WebSocket settings
	websocket_enabled?: boolean;
	websocket_events?: string[];
	
	// RabbitMQ settings (flat fields)
	rabbitmq_enabled?: boolean;
	rabbitmq_events?: string[];
	
	// SQS settings (flat fields)
	sqs_enabled?: boolean;
	sqs_events?: string[];
	
	// Typebot settings
	typebot_url?: string;
	typebot?: string;
	typebot_expire?: number;
	typebot_keyword_finish?: string;
	typebot_delay_message?: number;
	typebot_unknown_message?: string;
	typebot_listening_from_me?: boolean;
	
	// Proxy settings (nested object)
	proxy?: ProxyConfig;
	
	// Chatwoot settings (flat fields)
	chatwoot_account_id?: number;
	chatwoot_token?: string;
	chatwoot_url?: string;
	chatwoot_sign_msg?: boolean;
	chatwoot_reopen_conversation?: boolean;
	chatwoot_conversation_pending?: boolean;
}

export interface InstanceInfo {
	instanceName: string;
	instanceId: string;
	webhook_wa_business?: string | null;
	access_token_wa_business?: string;
	status: string;
}

export interface InstanceSettings {
	reject_call?: boolean;
	msg_call?: string;
	groups_ignore?: boolean;
	always_online?: boolean;
	read_messages?: boolean;
	read_status?: boolean;
	sync_full_history?: boolean;
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

// Backward compatibility aliases
export type CreateOptions = CreateInstanceRequest;
export type CreateResponse = CreateInstanceResponse; 