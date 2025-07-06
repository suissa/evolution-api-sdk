// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid, Jid } from "@/types/tags";

export interface SendGroupInviteRequest {
  groupJid: GroupJid;
  participantJid: Jid;
}

export interface SendGroupInviteResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type SendGroupInviteOptions = SendGroupInviteRequest; 