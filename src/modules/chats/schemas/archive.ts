// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId } from "@/types/tags";

export interface ArchiveRequest {
  number: ChatId;
  archive: boolean;
}

export interface ArchiveResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type ArchiveOptions = ArchiveRequest; 