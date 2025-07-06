// Pure TypeScript interfaces for better IDE support and performance
import type { Jid } from "@/types/tags";

export interface FetchProfileRequest {
  jid: Jid;
}

export interface FetchProfileResponse {
  status: string;
  pushname: string;
  imgUrl: string;
}

// Backward compatibility aliases
export type FetchProfileOptions = FetchProfileRequest; 