// Pure TypeScript interfaces for better IDE support and performance
export interface UpdatePictureRequest {
  url: string;
}

export interface UpdatePictureResponse {
  update: {
    success: boolean;
  }
}

// Backward compatibility aliases
export type UpdatePictureOptions = UpdatePictureRequest; 