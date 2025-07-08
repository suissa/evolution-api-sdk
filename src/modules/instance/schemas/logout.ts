// Pure TypeScript interfaces for better IDE support and performance

export interface LogoutRequest {
  instanceName: string;
}

export interface LogoutInstanceInfo {
  instanceName: string;
  status: string;
}

export interface LogoutResponse {
  status: "SUCCESS" | "ERROR";
  error: boolean;
  response: {
    message: string;
  };
  instance: LogoutInstanceInfo;
}

// Backward compatibility aliases
export type LogoutOptions = LogoutRequest; 