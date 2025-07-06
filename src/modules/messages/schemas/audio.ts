// Pure TypeScript interfaces for better IDE support and performance
import type { Media } from "@/schemas/common";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface AudioMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		audioMessage: {
			url: string;
			mimetype?: string;
			fileSha256: string;
			fileLength: number | string;
			seconds: number;
			mediaKey: string;
			fileEncSha256: string;
			directPath: string;
			mediaKeyTimestamp: number | string;
		};
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface AudioMessageOptions extends BaseMessageOptions {
	/**
	 * Audio URL or file in base64
	 */
	audio: Media;
	/**
	 * Audio mimetype
	 */
	mimetype?: string;
}

export interface AudioMessageBody extends BaseMessageOptions {
	media: Media;
	mediatype: "audio";
	mimetype?: string;
}

// Response interfaces
export interface AudioMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	media: {
		url: string;
		mimetype?: string;
		length: number;
		durationInSeconds: number;
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
export const AudioMessageBodyTransform = (
	{ audio, ...data }: AudioMessageOptions
): AudioMessageBody => ({ ...data, media: audio, mediatype: "audio" });

export const AudioMessageResponseTransform = (data: AudioMessageResponseRaw): AudioMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	media: {
		url: data.message.audioMessage.url,
		mimetype: data.message.audioMessage.mimetype,
		length: Number(data.message.audioMessage.fileLength),
		durationInSeconds: data.message.audioMessage.seconds,
		sha256: data.message.audioMessage.fileSha256,
		encryptedSha256: data.message.audioMessage.fileEncSha256,
		directPath: data.message.audioMessage.directPath,
		key: data.message.audioMessage.mediaKey,
		keyTimestamp: new Date(Number(data.message.audioMessage.mediaKeyTimestamp)),
	},
	id: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const BodySchema = { parse: AudioMessageBodyTransform };
export const ResponseSchema = { parse: AudioMessageResponseTransform };
