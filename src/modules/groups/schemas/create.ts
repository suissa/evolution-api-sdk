// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId, GroupJid } from "@/types/tags";

export interface CreateGroupRequest {
  subject: string;
  participants: ChatId[];
}

export interface CreateGroupResponse {
  status: string;
  gid: GroupJid;
}

// Backward compatibility aliases
export type CreateGroupOptions = CreateGroupRequest; 