// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId } from "@/types/tags";

export interface MarkAsReadRequest {
  number: ChatId;
}

export interface MarkAsReadResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type MarkAsReadOptions = MarkAsReadRequest; 