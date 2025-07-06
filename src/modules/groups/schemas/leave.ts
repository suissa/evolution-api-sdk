// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid } from "@/types/tags";

export interface LeaveRequest {
  groupJid: GroupJid;
}

export interface LeaveResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type LeaveOptions = LeaveRequest; 