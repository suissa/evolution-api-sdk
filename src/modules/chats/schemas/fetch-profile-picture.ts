// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId } from "@/types/tags";

export interface FetchProfilePictureRequest {
  number: ChatId;
}

export interface FetchProfilePictureResponse {
  profilePictureUrl: string;
}

// Backward compatibility aliases
export type FetchProfilePictureOptions = FetchProfilePictureRequest; 