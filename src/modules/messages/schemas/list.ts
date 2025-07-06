// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId, MessageId } from "@/types/tags";

export interface Row {
  title: string;
  description?: string;
  rowId: string;
}

export interface Section {
  title: string;
  rows: Row[];
}

export interface ListMessageOptions {
  number: ChatId;
  buttonText: string;
  text: string;
  title?: string;
  footer?: string;
  sections: Section[];
  options?: {
    delay?: number;
    messageId?: MessageId;
  };
}

export interface ListMessageResponse {
  key: {
    remoteJid: ChatId;
    fromMe: boolean;
    id: MessageId;
  };
  messageTimestamp: string;
  status: string;
} 