// Pure TypeScript interfaces for better IDE support and performance
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface LocationMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		locationMessage: {
			degreesLatitude: number;
			degreesLongitude: number;
			name: string;
			address: string;
		};
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface LocationMessageOptions extends BaseMessageOptions {
	/**
	 * Location name
	 */
	name: string;
	/**
	 * Location address
	 */
	address: string;
	/**
	 * Location latitude
	 */
	latitude: number;
	/**
	 * Location longitude
	 */
	longitude: number;
}

// Response interfaces
export interface LocationMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	location: {
		latitude: number;
		longitude: number;
		name: string;
		address: string;
	};
	id: MessageId;
	timestamp: Date;
}

// Transform function
export const LocationMessageResponseTransform = (data: LocationMessageResponseRaw): LocationMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	location: {
		latitude: data.message.locationMessage.degreesLatitude,
		longitude: data.message.locationMessage.degreesLongitude,
		name: data.message.locationMessage.name,
		address: data.message.locationMessage.address,
	},
	id: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const ResponseSchema = { parse: LocationMessageResponseTransform };
