// Pure TypeScript interfaces for better IDE support and performance
export interface SetRequest {
  url: string;
  enabled: boolean;
  webhook_by_events: boolean;
  events: string[];
}

export interface SetResponse {
  message: string;
}

// Backward compatibility aliases
export type SetOptions = SetRequest; 