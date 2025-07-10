// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId } from "@/types/tags";

interface Message {
  remoteJid: string;
  fromMe: boolean;
  id: string;
}

export interface MarkAsReadRequest {
  readMessages: Message[];
}

export interface MarkAsReadResponse {
  message: string;
  read: "success" | "error";
}

// Backward compatibility aliases
export type MarkAsReadOptions = MarkAsReadRequest;
