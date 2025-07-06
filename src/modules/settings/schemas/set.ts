// Pure TypeScript interfaces for better IDE support and performance
export interface SetRequest {
  reject_call?: boolean;
  groups_ignore?: boolean;
  always_online?: boolean;
  read_messages?: boolean;
  read_status?: boolean;
}

export interface SetResponse {
  message: string;
}

// Backward compatibility aliases
export type SetOptions = SetRequest; 