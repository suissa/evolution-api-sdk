// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid } from "@/types/tags";

export interface ToggleEphemeralRequest {
  groupJid: GroupJid;
  duration: number;
}

export interface ToggleEphemeralResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type ToggleEphemeralOptions = ToggleEphemeralRequest; 