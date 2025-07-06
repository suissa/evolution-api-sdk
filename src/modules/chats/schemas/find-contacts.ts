// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId } from "@/types/tags";

export interface FindContactsRequest {
  number: ChatId;
}

export interface Contact {
  id: ChatId;
  name: string;
  pushname: string;
}

export type FindContactsResponse = Contact[];

// Backward compatibility aliases
export type FindContactsOptions = FindContactsRequest; 