// Pure TypeScript interfaces for better IDE support and performance
import type { Jid } from "@/types/tags";

export interface FetchBusinessProfileRequest {
  number: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  countryCode: string;
}

export interface Category {
  id: string;
  localized_display_name: string;
}

export interface FetchBusinessProfileResponse {
  jid: Jid;
  description: string;
  email: string;
  websites: string[];
  latitude: number;
  longitude: number;
  address: Address;
  categories: Category[];
  isCurrent: boolean;
}

// Backward compatibility aliases
export type FetchBusinessProfileOptions = FetchBusinessProfileRequest; 