import type { ChatId } from "@/types/tags";

interface Message {
  remoteJid: string;
  fromMe: boolean;
  id: string;
}

export interface MarkAsUnreadRequest {
  lastMessage: Message[];
  chat: ChatId;
}

export interface MarkAsUnreadResponse {
  message: string;
  unread: "success" | "error";
}
