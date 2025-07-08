export interface DeviceListMetadata {
	senderKeyHash: string;
	senderTimestamp: string;
	recipientKeyHash: string;
	recipientTimestamp: string;
}

export interface MessageContextInfo {
	deviceListMetadata?: DeviceListMetadata | Record<string, unknown>;
	deviceListMetadataVersion: number;
	messageSecret: string;
}

export interface DisappearingMode {
	initiator: string;
	trigger: string;
	initiatedByMe: boolean;
}

export interface EvolutionContextInfo {
	expiration?: number;
	ephemeralSettingTimestamp?: string;
	disappearingMode?: DisappearingMode;
	stanzaId?: string;
	participant?: string;
	quotedMessage?: {
		conversation?: string;
	};
	statusSourceType?: string;
}

export interface ImageMessage {
	url: string;
	mimetype: string;
	fileSha256: string;
	fileLength: string;
	height: number;
	width: number;
	mediaKey: string;
	fileEncSha256: string;
	directPath: string;
	mediaKeyTimestamp: string;
	jpegThumbnail: string;
	contextInfo?: EvolutionContextInfo;
	firstScanSidecar: string;
	firstScanLength: number;
	scansSidecar: string;
	scanLengths: number[];
	midQualityFileSha256: string;
	imageSourceType: string;
}

export interface AudioMessage {
	url: string;
	mimetype: string;
	fileSha256: string;
	fileLength: string;
	seconds: number;
	ptt: boolean;
	mediaKey: string;
	fileEncSha256: string;
	directPath: string;
	mediaKeyTimestamp: string;
	waveform: string;
}

export type EvolutionMessageContent = {
	messageContextInfo?: MessageContextInfo;
	conversation?: string;
	imageMessage?: ImageMessage;
	audioMessage?: AudioMessage;
};

export interface EvolutionConnectionUpdatePayload {
	instance: string;
	wuid?: string;
	profileName?: string;
	profilePictureUrl?: string | null;
	state: string;
	statusReason: number;
}

export interface EvolutionContactPayload {
	remoteJid: string;
	pushName: string;
	profilePicUrl: string | null;
	instanceId: string;
}

export interface EvolutionMessagePayload {
	key: {
		remoteJid: string;
		fromMe: boolean;
		id: string;
		senderLid?: string;
	};
	pushName?: string;
	message?: EvolutionMessageContent;
	messageType?: string;
	messageTimestamp?: number;
	status?: string;
	participant?: string;
	contextInfo?: EvolutionContextInfo;
	instanceId?: string;
	source?: string;
}

export interface EvolutionWebhookData {
	event: string;
	instance: string;
	data:
		| EvolutionMessagePayload
		| EvolutionContactPayload
		| EvolutionContactPayload[]
		| EvolutionConnectionUpdatePayload;
	sender: string;
	date?: number;
	instanceName?: string;
	destination?: string;
	date_time?: string;
	server_url?: string;
	apikey?: string;
}

export interface EvolutionInstance {
	instanceName: string;
	status: string;
	qrcode?: string;
}

export interface EvolutionMessage {
	key: {
		remoteJid: string;
		fromMe: boolean;
		id: string;
	};
	message: Record<string, unknown>;
	messageTimestamp: number;
	pushName?: string;
}

export enum WebhookEvent {
	APPLICATION_STARTUP = "application.startup",
	QRCODE_UPDATED = "qrcode.updated",
	CONNECTION_UPDATE = "connection.update",
	MESSAGES_SET = "messages.set",
	MESSAGES_UPSERT = "messages.upsert",
	MESSAGES_UPDATE = "messages.update",
	MESSAGES_DELETE = "messages.delete",
	SEND_MESSAGE = "send.message",
	CONTACTS_SET = "contacts.set",
	CONTACTS_UPSERT = "contacts.upsert",
	CONTACTS_UPDATE = "contacts.update",
	PRESENCE_UPDATE = "presence.update",
	CHATS_SET = "chats.set",
	CHATS_UPDATE = "chats.update",
	CHATS_UPSERT = "chats.upsert",
	CHATS_DELETE = "chats.delete",
	GROUPS_UPSERT = "groups.upsert",
	GROUPS_UPDATE = "groups.update",
	GROUP_PARTICIPANTS_UPDATE = "group.participants.update",
	NEW_TOKEN = "new.jwt",
}
