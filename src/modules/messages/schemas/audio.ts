// Pure TypeScript interfaces for better IDE support and performance
import { MediaMessageOptions, MediaMessageResponse } from "./media";

// Request interfaces
export interface AudioMessageOptions extends MediaMessageOptions {}

// Response interfaces
export interface AudioMessageResponse extends MediaMessageResponse {
  message: MediaMessageResponse["message"] & {
    audioMessage: MediaMessageResponse["message"]["audioMessage"];
  };
}
