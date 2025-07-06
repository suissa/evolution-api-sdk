// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId } from "@/types/tags";

export interface FindMessagesRequest {
  number: ChatId;
  count?: number;
}

export type FindMessagesResponse = any[];

// Backward compatibility aliases
export type FindMessagesOptions = FindMessagesRequest; 