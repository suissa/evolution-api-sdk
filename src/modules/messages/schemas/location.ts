import { z } from "zod";

import type { Jid, MessageId } from "@/types/common";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptionsSchema } from "./base";

export const LocationMessageOptionsSchema = BaseMessageOptionsSchema.extend({
	/**
	 * Location name
	 */
	name: z.string(),
	/**
	 * Location address
	 */
	address: z.string(),
	/**
	 * Location latitude
	 */
	latitude: z.number(),
	/**
	 * Location longitude
	 */
	longitude: z.number(),
});

export const LocationMessageBodySchema = LocationMessageOptionsSchema;

export const LocationMessageResponseSchema = z
	.object({
		key: z.object({
			remoteJid: z.string(),
			id: z.string(),
		}),
		message: z.object({
			locationMessage: z.object({
				degreesLatitude: z.number(),
				degreesLongitude: z.number(),
				name: z.string(),
				address: z.string(),
			}),
		}),
		messageTimestamp: z.coerce.date(),
	})
	.transform((data) => ({
		receiver: {
			phoneNumber: phoneNumberFromJid(data.key.remoteJid),
			jid: data.key.remoteJid as Jid,
		},
		location: {
			latitude: data.message.locationMessage.degreesLatitude,
			longitude: data.message.locationMessage.degreesLongitude,
			name: data.message.locationMessage.name,
			address: data.message.locationMessage.address,
		},
		id: data.key.id as MessageId,
		timestamp: data.messageTimestamp,
	}));

export type LocationMessageOptions = z.infer<
	typeof LocationMessageOptionsSchema
>;
export type LocationMessageResponse = z.infer<
	typeof LocationMessageResponseSchema
>;

export {
	LocationMessageBodySchema as BodySchema,
	LocationMessageOptionsSchema as OptionsSchema,
	LocationMessageResponseSchema as ResponseSchema,
};
