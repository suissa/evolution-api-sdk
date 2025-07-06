// Pure TypeScript interfaces for better IDE support and performance
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface PollMessageResponseRaw {
	key: {
		remoteJid: string;
		id: string;
	};
	message: {
		pollCreationMessageV3: {
			name: string;
			options: { optionName: string }[];
			selectableOptionsCount: number;
		};
	};
	messageTimestamp: string | Date;
}

// Request interfaces
export interface PollMessageOptions extends BaseMessageOptions {
	/**
	 * Name of the poll
	 */
	name: string;
	/**
	 * Whether multiple options can be selected
	 * @default false
	 */
	multiple?: boolean;
	/**
	 * Poll options
	 */
	options: string[];
}

export interface PollMessageBody extends BaseMessageOptions {
	name: string;
	selectableCount: number;
	values: string[];
}

// Response interfaces
export interface PollMessageResponse {
	receiver: {
		phoneNumber: string;
		jid: Jid;
	};
	poll: {
		name: string;
		options: string[];
		multiple: boolean;
	};
	id: MessageId;
	timestamp: Date;
}

// Transform functions
export const PollMessageBodyTransform = (
	{ multiple, options, ...data }: PollMessageOptions
): PollMessageBody => ({
	...data,
	selectableCount: multiple ? options.length : 1,
	values: options,
});

export const PollMessageResponseTransform = (data: PollMessageResponseRaw): PollMessageResponse => ({
	receiver: {
		phoneNumber: phoneNumberFromJid(data.key.remoteJid),
		jid: Jid(data.key.remoteJid),
	},
	poll: {
		name: data.message.pollCreationMessageV3.name,
		options: data.message.pollCreationMessageV3.options.map(
			(option) => option.optionName,
		),
		multiple: data.message.pollCreationMessageV3.selectableOptionsCount > 1,
	},
	id: MessageId(data.key.id),
	timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const BodySchema = { parse: PollMessageBodyTransform };
export const ResponseSchema = { parse: PollMessageResponseTransform };
