import { parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";

import { phoneNumberSchema } from "@/schemas/common";
import type { Jid, MessageId } from "@/types/common";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptionsSchema } from "./base";

export const ContactMessageOptionsSchema = BaseMessageOptionsSchema.extend({
	/**
	 * Contact list
	 */
	contacts: z.array(
		z.object({
			/**
			 * Contact display name
			 */
			fullName: z.string(),
			/**
			 * Contact phone number
			 */
			phoneNumber: phoneNumberSchema,
			/**
			 * Contact organization
			 */
			organization: z.string().optional(),
			/**
			 * Contact email
			 */
			email: z.string().email().optional(),
			/**
			 * Contact website url
			 */
			url: z.string().url().optional(),
		}),
	),
});

export const ContactMessageBodySchema = ContactMessageOptionsSchema.transform(
	({ contacts, ...data }) => ({
		...data,
		contact: contacts.map((contact) => ({
			...contact,
			phoneNumber: parsePhoneNumber(contact.phoneNumber).formatInternational(),
			wuid: contact.phoneNumber.replace(/\D/g, ""),
		})),
	}),
);

export const ContactMessageResponseSchema = z
	.object({
		key: z.object({
			remoteJid: z.string(),
			id: z.string(),
		}),
		message: z.union([
			z.object({
				contactMessage: z.object({
					displayName: z.string(),
					vcard: z.string(),
				}),
			}),
			z.object({
				contactsArrayMessage: z.object({
					contacts: z.array(
						z.object({
							displayName: z.string(),
							vcard: z.string(),
						}),
					),
				}),
			}),
		]),
		messageTimestamp: z.coerce.date(),
	})
	.transform((data) => ({
		receiver: {
			phoneNumber: phoneNumberFromJid(data.key.remoteJid),
			jid: data.key.remoteJid as Jid,
		},
		contacts:
			"contactMessage" in data.message
				? [data.message.contactMessage]
				: data.message.contactsArrayMessage.contacts,
		id: data.key.id as MessageId,
		timestamp: data.messageTimestamp,
	}));

export type ContactMessageOptions = z.infer<typeof ContactMessageOptionsSchema>;
export type ContactMessageResponse = z.infer<
	typeof ContactMessageResponseSchema
>;

export {
	ContactMessageBodySchema as BodySchema,
	ContactMessageOptionsSchema as OptionsSchema,
	ContactMessageResponseSchema as ResponseSchema,
};
