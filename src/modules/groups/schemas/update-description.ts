// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid } from "@/types/tags";

export interface UpdateDescriptionRequest {
  groupJid: GroupJid;
  description: string;
}

export interface UpdateDescriptionResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type UpdateDescriptionOptions = UpdateDescriptionRequest; 