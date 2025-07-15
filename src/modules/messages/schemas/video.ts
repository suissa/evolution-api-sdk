// Pure TypeScript interfaces for better IDE support and performance
import { MediaMessageOptions, MediaMessageResponse } from "./media";

// Request interfaces
export interface VideoMessageOptions extends MediaMessageOptions {}

// Response interfaces
export interface VideoMessageResponse extends MediaMessageResponse {
  message: MediaMessageResponse["message"] & {
    videoMessage: MediaMessageResponse["message"]["videoMessage"];
  };
}
