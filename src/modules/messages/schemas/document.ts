// Pure TypeScript interfaces for better IDE support and performance
import type { Media } from "@/schemas/common";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface DocumentMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		documentMessage: {
			url: string;
			mimetype?: string;
			fileSha256: string;
			fileLength: number | string;
			mediaKey: string;
			caption?: string;
			fileName: string;
			fileEncSha256: string;
			directPath: string;
			mediaKeyTimestamp: number | string;
		};
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface DocumentMessageOptions extends BaseMessageOptions {
	/**
	 * Document URL or file in base64
	 */
	document: Media;
	/**
	 * Caption to send with document
	 */
	caption?: string;
	/**
	 * Document mimetype
	 */
	mimetype?: string;
	/**
	 * Name of the file
	 */
	fileName?: string;
}

export interface DocumentMessageBody extends BaseMessageOptions {
	media: Media;
	mediatype: "document";
	caption?: string;
	mimetype?: string;
	fileName?: string;
}

// Response interfaces
export interface DocumentMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	media: {
		url: string;
		caption?: string;
		mimetype?: string;
		length: number;
		sha256: string;
		fileName: string;
		encryptedSha256: string;
		directPath: string;
		key: string;
		keyTimestamp: Date;
	};
	id: MessageId;
	timestamp: Date;
}

// Transform functions
export const DocumentMessageBodyTransform = (
	{ document, ...data }: DocumentMessageOptions
): DocumentMessageBody => ({
	...data,
	media: document,
	mediatype: "document",
});

export const DocumentMessageResponseTransform = (data: DocumentMessageResponseRaw): DocumentMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	media: {
		url: data.message.documentMessage.url,
		caption: data.message.documentMessage.caption,
		mimetype: data.message.documentMessage.mimetype,
		length: Number(data.message.documentMessage.fileLength),
		sha256: data.message.documentMessage.fileSha256,
		fileName: data.message.documentMessage.fileName,
		encryptedSha256: data.message.documentMessage.fileEncSha256,
		directPath: data.message.documentMessage.directPath,
		key: data.message.documentMessage.mediaKey,
		keyTimestamp: new Date(Number(data.message.documentMessage.mediaKeyTimestamp)),
	},
	id: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const BodySchema = { parse: DocumentMessageBodyTransform };
export const ResponseSchema = { parse: DocumentMessageResponseTransform };
