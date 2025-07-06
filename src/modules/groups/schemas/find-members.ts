// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid, Jid } from "@/types/tags";

export interface FindMembersRequest {
  groupJid: GroupJid;
}

export interface Member {
  id: Jid;
  admin: string | null;
}

export type FindMembersResponse = Member[];

// Backward compatibility aliases
export type FindMembersOptions = FindMembersRequest; 