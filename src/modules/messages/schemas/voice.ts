// Pure TypeScript interfaces for better IDE support and performance
import type { Media } from "@/schemas/common";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface VoiceMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		audioMessage: {
			url: string;
			mimetype: string;
			fileSha256: string;
			fileLength: number | string;
			seconds: number;
			ptt?: boolean;
			mediaKey: string;
			fileEncSha256: string;
			directPath: string;
			mediaKeyTimestamp: number | string;
			waveform?: string | null;
		};
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface VoiceMessageOptions extends BaseMessageOptions {
	/**
	 * Audio URL or file in base64
	 */
	audio: Media;
	/**
	 * Encode audio into WhatsApp default format (allows audio to be sped up)
	 * @default true
	 */
	encoding?: boolean;
}

// Response interfaces
export interface VoiceMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	media: {
		url: string;
		mimetype: string;
		length: number;
		durationInSeconds: number;
		sha256: string;
		encryptedSha256: string;
		directPath: string;
		/**
		 * Indicates whether the audio message is a push-to-talk (PTT) message
		 */
		isPtt?: boolean;
		key: string;
		keyTimestamp: Date;
		waveform?: string | null;
	};
	messageId: MessageId;
	timestamp: Date;
}

// Transform function
export const VoiceMessageResponseTransform = (data: VoiceMessageResponseRaw): VoiceMessageResponse => ({
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
		isPtt: data.message.audioMessage.ptt,
		key: data.message.audioMessage.mediaKey,
		keyTimestamp: new Date(Number(data.message.audioMessage.mediaKeyTimestamp)),
		waveform: data.message.audioMessage.waveform,
	},
	messageId: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const ResponseSchema = { parse: VoiceMessageResponseTransform };
