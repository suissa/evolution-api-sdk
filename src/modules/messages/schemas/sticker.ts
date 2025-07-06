// Pure TypeScript interfaces for better IDE support and performance
import type { Media } from "@/schemas/common";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface StickerMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		stickerMessage: {
			url: string;
			fileSha256: string;
			fileEncSha256: string;
			mediaKey: string;
			mimetype?: string;
			directPath: string;
			fileLength: number | string;
			mediaKeyTimestamp: number | string;
		};
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface StickerMessageOptions extends BaseMessageOptions {
	/**
	 * Image URL or file in base64
	 */
	sticker: Media;
}

// Response interfaces
export interface StickerMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	media: {
		url: string;
		mimetype?: string;
		length: number;
		sha256: string;
		encryptedSha256: string;
		directPath: string;
		key: string;
		keyTimestamp: Date;
	};
	id: MessageId;
	timestamp: Date;
}

// Transform function
export const StickerMessageResponseTransform = (data: StickerMessageResponseRaw): StickerMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	media: {
		url: data.message.stickerMessage.url,
		mimetype: data.message.stickerMessage.mimetype,
		length: Number(data.message.stickerMessage.fileLength),
		sha256: data.message.stickerMessage.fileSha256,
		encryptedSha256: data.message.stickerMessage.fileEncSha256,
		directPath: data.message.stickerMessage.directPath,
		key: data.message.stickerMessage.mediaKey,
		keyTimestamp: new Date(Number(data.message.stickerMessage.mediaKeyTimestamp)),
	},
	id: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const ResponseSchema = { parse: StickerMessageResponseTransform };
