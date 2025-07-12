// Pure TypeScript interfaces for better IDE support and performance
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface TextMessageResponseRaw {
  key: {
    remoteJid: string;
    fromMe: boolean;
    id: string;
  };
  pushName: string;
  status: string;
  message: {
    conversation: string;
  };
  contextInfo: null;
  messageType: string;
  messageTimestamp: number;
  instanceId: string;
  source: string;
}

// Request interfaces
export interface TextMessageOptions extends BaseMessageOptions {
  /**
   * Message text content
   */
  text: string;
  /**
   * Whether link preview should be shown
   */
  linkPreview?: boolean;
}

// Response interfaces
export interface TextMessageResponse {
  key: {
    remoteJid: string;
    fromMe: boolean;
    id: string;
  };
  pushName: string;
  status: string;
  message: {
    conversation: string;
  };
  contextInfo: null;
  messageType: string;
  messageTimestamp: number;
  instanceId: string;
  source: string;
  receiver: {
    phoneNumber: string;
    jid: Jid;
  };
  messageId: MessageId;
  timestamp: Date;
}

export interface TextMessageReceived {
  conversation: string;
  extendedTextMessage: {
    text: string;
  };
}

// Transform function
export const TextMessageResponseTransform = (
  data: TextMessageResponseRaw
): TextMessageResponse => ({
  receiver: {
    phoneNumber: phoneNumberFromJid(data.key.remoteJid),
    jid: Jid(data.key.remoteJid),
  },
  messageId: MessageId(data.key.id),
  timestamp: new Date(data.messageTimestamp),
  key: data.key,
  pushName: data.pushName,
  status: data.status,
  message: data.message,
  contextInfo: data.contextInfo,
  messageType: data.messageType,
  messageTimestamp: data.messageTimestamp,
  instanceId: data.instanceId,
  source: data.source,
});
