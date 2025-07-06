// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId, MessageId } from "@/types/tags";

export interface DeleteMessageRequest {
  number: ChatId;
  messageId: MessageId;
  owner: boolean;
}

export interface DeleteMessageResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type DeleteMessageOptions = DeleteMessageRequest; 