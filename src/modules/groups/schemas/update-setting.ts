// Pure TypeScript interfaces for better IDE support and performance
import type { GroupJid } from "@/types/tags";

export interface UpdateSettingRequest {
  groupJid: GroupJid;
  setting: "announcement" | "locked";
  value: boolean;
}

export interface UpdateSettingResponse {
  status: string;
  message: string;
}

// Backward compatibility aliases
export type UpdateSettingOptions = UpdateSettingRequest; 