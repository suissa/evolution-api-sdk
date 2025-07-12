// Pure TypeScript interfaces for better IDE support and performance
import { parsePhoneNumber } from "libphonenumber-js";
import { Jid } from "@/types/tags";

// Raw response interface from API
export interface CheckResponseRaw {
  exists: boolean;
  jid: string;
  number: string;
}

// Transformed response interface
export interface CheckResponseItem {
  exists: boolean;
  jid: Jid;
  number: string;
}

export type CheckOptions = string | string[];
export type CheckResponse = CheckResponseItem[];
