// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId, MessageId } from "@/types/tags";

export interface UpdateMessageRequest {
  number: ChatId;
  messageId: MessageId;
  message: string;
}

export interface UpdateMessageResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type UpdateMessageOptions = UpdateMessageRequest; 