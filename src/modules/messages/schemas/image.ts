// Pure TypeScript interfaces for better IDE support and performance
import type { Media } from "@/schemas/common";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface ImageMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		imageMessage: {
			url: string;
			mimetype?: string;
			fileSha256: string;
			fileLength: number | string;
			height: number;
			width: number;
			mediaKey: string;
			caption?: string;
			fileEncSha256: string;
			directPath: string;
			mediaKeyTimestamp: number | string;
		};
	};
	messageType: "image";
	messageTimestamp: string | Date;
}

// Request interfaces
export interface ImageMessageOptions extends BaseMessageOptions {
	/**
	 * Image URL or file in base64
	 */
	image: Media;
	/**
	 * Caption to send with image
	 */
	caption?: string;
	/**
	 * Image mimetype
	 */
	mimetype?: string;
}

export interface ImageMessageBody extends BaseMessageOptions {
	media: Media;
	mediatype: "image";
	caption?: string;
	mimetype?: string;
}

// Response interfaces
export interface ImageMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	media: {
		url: string;
		caption?: string;
		mimetype?: string;
		length: number;
		height: number;
		width: number;
		sha256: string;
		encryptedSha256: string;
		directPath: string;
		key: string;
		keyTimestamp: Date;
	};
	id: MessageId;
	timestamp: Date;
}

// Transform functions
export const ImageMessageBodyTransform = (
	{ image, ...data }: ImageMessageOptions
): ImageMessageBody => ({ ...data, media: image, mediatype: "image" });

export const ImageMessageResponseTransform = (data: ImageMessageResponseRaw): ImageMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	media: {
		url: data.message.imageMessage.url,
		caption: data.message.imageMessage.caption,
		mimetype: data.message.imageMessage.mimetype,
		length: Number(data.message.imageMessage.fileLength),
		height: data.message.imageMessage.height,
		width: data.message.imageMessage.width,
		sha256: data.message.imageMessage.fileSha256,
		encryptedSha256: data.message.imageMessage.fileEncSha256,
		directPath: data.message.imageMessage.directPath,
		key: data.message.imageMessage.mediaKey,
		keyTimestamp: new Date(Number(data.message.imageMessage.mediaKeyTimestamp)),
	},
	id: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const BodySchema = { parse: ImageMessageBodyTransform };
export const ResponseSchema = { parse: ImageMessageResponseTransform };
