// Pure TypeScript interfaces for better IDE support and performance

export interface FetchProfileRequest {
  number: string;
}

export interface FetchProfileResponse {
  status: string;
  pushname: string;
  imgUrl: string;
}

// Backward compatibility aliases
export type FetchProfileOptions = FetchProfileRequest; 