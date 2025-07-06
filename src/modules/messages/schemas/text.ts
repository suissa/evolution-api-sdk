// Pure TypeScript interfaces for better IDE support and performance
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface TextMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface TextMessageOptions extends BaseMessageOptions {
	/**
	 * Message text content
	 */
	text: string;
	/**
	 * Whether link preview should be shown
	 */
	linkPreview?: boolean;
}

// Response interfaces
export interface TextMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	messageId: MessageId;
	timestamp: Date;
}

export interface TextMessageReceived {
	conversation: string;
	extendedTextMessage: {
		text: string;
	};
}

// Transform function
export const TextMessageResponseTransform = (data: TextMessageResponseRaw): TextMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	messageId: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});
