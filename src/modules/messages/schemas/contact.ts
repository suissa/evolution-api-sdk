// Pure TypeScript interfaces for better IDE support and performance
import { parsePhoneNumber } from "libphonenumber-js";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface ContactMessageResponseRaw {
  key: {
    remoteJid: string;
    id: string;
  };
  message: {
    contactMessage?: {
      displayName: string;
      vcard: string;
    };
    contactsArrayMessage?: {
      contacts: {
        displayName: string;
        vcard: string;
      }[];
    };
  };
  messageTimestamp: string | Date;
}

// Request interfaces
export interface Contact {
  /**
   * Contact display name
   */
  fullName: string;
  /**
   * Contact phone number
   */
  phoneNumber: string;
  /**
   * Contact organization
   */
  organization?: string;
  /**
   * Contact email
   */
  email?: string;
  /**
   * Contact website url
   */
  url?: string;
}

export interface ContactMessageOptions extends BaseMessageOptions {
  /**
   * Contact list
   */
  contact: [Contact, ...Contact[]];
}

export interface ContactMessageBody extends BaseMessageOptions {
  contact: (Contact & {
    wuid: string;
  })[];
}

// Response interfaces
export interface ContactMessageResponse {
  receiver: {
    phoneNumber: string;
    jid: Jid;
  };
  contacts: {
    displayName: string;
    vcard: string;
  }[];
  id: MessageId;
  timestamp: Date;
}

// Transform functions
export const ContactMessageBodyTransform = ({
  contact,
  ...data
}: ContactMessageOptions): ContactMessageBody => ({
  ...data,
  contact: contact.map((contactItem) => ({
    ...contactItem,
    phoneNumber: parsePhoneNumber(
      contactItem.phoneNumber
    ).formatInternational(),
    wuid: contactItem.phoneNumber.replace(/\D/g, ""),
  })),
});

export const ContactMessageResponseTransform = (
  data: ContactMessageResponseRaw
): ContactMessageResponse => ({
  receiver: {
    phoneNumber: phoneNumberFromJid(data.key.remoteJid),
    jid: Jid(data.key.remoteJid),
  },
  contacts: data.message.contactMessage
    ? [data.message.contactMessage]
    : data.message.contactsArrayMessage?.contacts || [],
  id: MessageId(data.key.id),
  timestamp: new Date(data.messageTimestamp),
});

// Backward compatibility aliases
export const BodySchema = { parse: ContactMessageBodyTransform };
export const ResponseSchema = { parse: ContactMessageResponseTransform };
