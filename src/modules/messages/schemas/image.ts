// Pure TypeScript interfaces for better IDE support and performance
import { MediaMessageOptions, MediaMessageResponse } from "./media";

// Request interfaces
export interface ImageMessageOptions extends MediaMessageOptions {}

// Response interfaces
export interface ImageMessageResponse extends MediaMessageResponse {
  message: MediaMessageResponse["message"] & {
    imageMessage: MediaMessageResponse["message"]["imageMessage"];
  };
}
