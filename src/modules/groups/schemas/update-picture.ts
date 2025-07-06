// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid } from "@/types/tags";

export interface UpdatePictureRequest {
  groupJid: GroupJid;
  url: string;
}

export interface UpdatePictureResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type UpdatePictureOptions = UpdatePictureRequest; 