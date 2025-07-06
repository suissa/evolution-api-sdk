export interface TextMessage {
	messageType: "text";
	conversation: string;
	extendedTextMessage: {
		text: string;
	};
}

export interface ImageMessage {
	messageType: "image";
	imageMessage: {
		url: string;
		mimetype?: string;
		caption?: string;
	};
}

export interface AudioMessage {
	messageType: "audio";
	audioMessage: {
		url: string;
		mimetype?: string;
		seconds: number;
	};
}

export type Message = TextMessage | ImageMessage | AudioMessage;

export interface MessagesUpsertEvent {
	event: "messages.upsert";
	instance: string;
	data: {
		key: {
			remoteJid: string;
			fromMe: boolean;
			id: string;
			participant?: string;
		};
		pushName: string;
		message: Message;
		messageType: string;
		messageTimestamp: number;
		owner: string;
		source: string;
	};
	date: string;
	webhook: string;
}

export type WebhookPayload = MessagesUpsertEvent; 