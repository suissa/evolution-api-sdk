// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid } from "@/types/tags";

export interface FetchInviteCodeRequest {
  groupJid: GroupJid;
}

export interface FetchInviteCodeResponse {
    code: string;
}

// Backward compatibility aliases
export type FetchInviteCodeOptions = FetchInviteCodeRequest; 