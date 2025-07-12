// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId, MessageId } from "@/types/tags";

export interface ReactionMessageOptions {
  key: {
    remoteJid: ChatId;
    fromMe: boolean;
    id: MessageId;
  };
  reaction: string;
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
