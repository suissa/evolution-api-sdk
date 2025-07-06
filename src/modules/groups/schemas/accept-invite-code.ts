// Pure TypeScript interfaces for better IDE support and performance
import type { GroupInviteCode } from "@/types/tags";

export interface AcceptInviteCodeRequest {
  inviteCode: GroupInviteCode;
}

export interface AcceptInviteCodeResponse {
  status: string;
  gid: string;
}

// Backward compatibility aliases
export type AcceptInviteCodeOptions = AcceptInviteCodeRequest; 