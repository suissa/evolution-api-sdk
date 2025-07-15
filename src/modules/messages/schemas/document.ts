// Pure TypeScript interfaces for better IDE support and performance
import { MediaMessageOptions, MediaMessageResponse } from "./media";

// Request interfaces
export interface DocumentMessageOptions extends MediaMessageOptions {}

// Response interfaces
export interface DocumentMessageResponse extends MediaMessageResponse {
  message: MediaMessageResponse["message"] & {
    documentMessage: MediaMessageResponse["message"]["documentMessage"];
  };
}
