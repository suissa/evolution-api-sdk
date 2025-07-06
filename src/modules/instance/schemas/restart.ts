// Pure TypeScript interfaces for better IDE support and performance

export interface RestartRequest {
  instanceName: string;
}

export interface RestartResponse {
    success: boolean;
    message: string;
}

// Backward compatibility aliases
export type RestartOptions = RestartRequest; 