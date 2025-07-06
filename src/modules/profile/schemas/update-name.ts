// Pure TypeScript interfaces for better IDE support and performance
export interface UpdateNameRequest {
  name: string;
}

export interface UpdateNameResponse {
  status: string;
}

// Backward compatibility aliases
export type UpdateNameOptions = UpdateNameRequest; 