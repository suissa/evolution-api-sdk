// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId, MessageId } from "@/types/tags";

export interface ReactionMessageOptions {
  number: ChatId;
  messageId: MessageId;
  reaction: string; // Can be an emoji
}

export interface ReactionMessageResponse {
  key: {
    remoteJid: ChatId;
    fromMe: boolean;
    id: MessageId;
  };
  messageTimestamp: string;
  status: string;
} 