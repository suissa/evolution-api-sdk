// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid, Jid } from "@/types/tags";

export interface UpdateMembersRequest {
  groupJid: GroupJid;
  participants: Jid[];
  action: "add" | "remove" | "promote" | "demote";
}

export interface Participant {
  id: Jid;
  status: string;
}

export type UpdateMembersResponse = Participant[];

// Backward compatibility aliases
export type UpdateMembersOptions = UpdateMembersRequest; 