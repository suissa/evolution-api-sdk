// Pure TypeScript interfaces for better IDE support and performance

export interface DeleteRequest {
  instanceName: string;
}

export interface DeleteInstanceInfo {
  instanceName: string;
  status: string;
}

export interface DeleteResponse {
  error: boolean;
  message: string;
  instance: DeleteInstanceInfo;
}

// Backward compatibility aliases
export type DeleteOptions = DeleteRequest; 