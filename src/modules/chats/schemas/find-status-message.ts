// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId } from "@/types/tags";

export interface FindStatusMessageRequest {
  number: ChatId;
}

export type FindStatusMessageResponse = any[];

// Backward compatibility aliases
export type FindStatusMessageOptions = FindStatusMessageRequest; 