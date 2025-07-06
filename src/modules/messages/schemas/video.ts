// Pure TypeScript interfaces for better IDE support and performance
import type { Media } from "@/schemas/common";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface VideoMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		videoMessage: {
			url: string;
			mimetype?: string;
			fileSha256: string;
			fileLength: number | string;
			mediaKey: string;
			caption?: string;
			gifPlayback: boolean;
			fileEncSha256: string;
			directPath: string;
			mediaKeyTimestamp: number | string;
		};
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface VideoMessageOptions extends BaseMessageOptions {
	/**
	 * Video URL or file in base64
	 */
	video: Media;
	/**
	 * Caption to send with video
	 */
	caption?: string;
	/**
	 * Video mimetype
	 */
	mimetype?: string;
}

export interface VideoMessageBody extends BaseMessageOptions {
	media: Media;
	mediatype: "video";
	caption?: string;
	mimetype?: string;
}

// Response interfaces
export interface VideoMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	media: {
		url: string;
		caption?: string;
		mimetype?: string;
		gifPlayback: boolean;
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

// Transform functions
export const VideoMessageBodyTransform = (
	{ video, ...data }: VideoMessageOptions
): VideoMessageBody => ({ ...data, media: video, mediatype: "video" });

export const VideoMessageResponseTransform = (data: VideoMessageResponseRaw): VideoMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	media: {
		url: data.message.videoMessage.url,
		caption: data.message.videoMessage.caption,
		mimetype: data.message.videoMessage.mimetype,
		gifPlayback: data.message.videoMessage.gifPlayback,
		length: Number(data.message.videoMessage.fileLength),
		sha256: data.message.videoMessage.fileSha256,
		encryptedSha256: data.message.videoMessage.fileEncSha256,
		directPath: data.message.videoMessage.directPath,
		key: data.message.videoMessage.mediaKey,
		keyTimestamp: new Date(Number(data.message.videoMessage.mediaKeyTimestamp)),
	},
	id: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const BodySchema = { parse: VideoMessageBodyTransform };
export const ResponseSchema = { parse: VideoMessageResponseTransform };
