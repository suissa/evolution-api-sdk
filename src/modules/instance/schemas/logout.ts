// Pure TypeScript interfaces for better IDE support and performance

export interface LogoutRequest {
  instanceName: string;
}

export interface LogoutInstanceInfo {
  instanceName: string;
  status: string;
}

export interface LogoutResponse {
  error: boolean;
  message: string;
  instance: LogoutInstanceInfo;
}

// Backward compatibility aliases
export type LogoutOptions = LogoutRequest; 