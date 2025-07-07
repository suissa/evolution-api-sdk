// Pure TypeScript interfaces for better IDE support and performance

export interface ConnectionStateRequest {
  instanceName: string;
}

export interface ConnectionStateResponse {
  instance: {
    instanceName: string;
    state: "open" | "close" | "connecting";
  }
}

// Backward compatibility aliases
export type ConnectionStateOptions = ConnectionStateRequest; 