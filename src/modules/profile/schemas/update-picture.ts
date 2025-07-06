// Pure TypeScript interfaces for better IDE support and performance
export interface UpdatePictureRequest {
  url: string;
}

export interface UpdatePictureResponse {
  status: string;
}

// Backward compatibility aliases
export type UpdatePictureOptions = UpdatePictureRequest; 