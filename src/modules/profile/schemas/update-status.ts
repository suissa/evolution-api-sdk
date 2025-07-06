// Pure TypeScript interfaces for better IDE support and performance
export interface UpdateStatusRequest {
  status: string;
}

export interface UpdateStatusResponse {
  status: string;
}

// Backward compatibility aliases
export type UpdateStatusOptions = UpdateStatusRequest; 