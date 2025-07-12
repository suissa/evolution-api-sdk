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

// Transform functions
export const CheckBodyTransform = (data: CheckOptions) => ({
  numbers: Array.isArray(data) ? data : [data],
});

export const CheckResponseTransform = (
  numbers: CheckResponseRaw[]
): CheckResponse =>
  numbers.map((number) => ({
    exists: number.exists,
    jid: Jid(number.jid),
    number: parsePhoneNumber(number.number).number,
  }));

// Backward compatibility aliases
export const BodySchema = { parse: CheckBodyTransform };
export const ResponseSchema = { parse: CheckResponseTransform };
