// Pure TypeScript interfaces for better IDE support and performance

export interface FetchBusinessProfileRequest {
  number: string;
}

export interface BusinessHoursConfig {
  day_of_week: "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
  mode: "open_24h" | "specific_hours" | "closed";
  open_time?: string;
  close_time?: string;
}

export interface BusinessHours {
  timezone: string;
  business_config: BusinessHoursConfig[];
}

export interface FetchBusinessProfileResponse {
  isBusiness: boolean;
  wid: string;
  description: string;
  website: string[];
  category: string;
  business_hours: BusinessHours;
}

// Backward compatibility aliases
export type FetchBusinessProfileOptions = FetchBusinessProfileRequest; 