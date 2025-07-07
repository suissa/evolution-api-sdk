// Pure TypeScript interfaces for better IDE support and performance

export interface FetchProfileRequest {
  number: string;
}

export interface ProfileStatus {
  status: string;
  setAt: string;
}

export interface FetchProfileResponse {
  wuid: string;
  name: string | null;
  numberExists: boolean;
  picture?: string;
  status?: ProfileStatus;
  isBusiness: boolean;
  description?: string;
}

// Backward compatibility aliases
export type FetchProfileOptions = FetchProfileRequest; 