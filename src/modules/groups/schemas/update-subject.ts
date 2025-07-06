// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid } from "@/types/tags";

export interface UpdateSubjectRequest {
  groupJid: GroupJid;
  subject: string;
}

export interface UpdateSubjectResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type UpdateSubjectOptions = UpdateSubjectRequest; 