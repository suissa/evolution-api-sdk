// Pure TypeScript interfaces for better IDE support and performance
import type { ChatId, MessageId } from "@/types/tags";

export interface ComponentParameter {
  type: "text" | "image" | "document" | "video";
  text?: string;
  image?: { link: string };
  document?: { link: string };
  video?: { link: string };
}

export interface Component {
  type: "body" | "header" | "button";
  sub_type?: "text" | "url" | "quick_reply";
  parameters: ComponentParameter[];
}

export interface TemplateMessageOptions {
  number: ChatId;
  name: string;
  language: {
    code: string;
  };
  components: Component[];
  options?: {
    delay?: number;
    messageId?: MessageId;
  };
}

export interface TemplateMessageResponse {
  key: {
    remoteJid: ChatId;
    fromMe: boolean;
    id: MessageId;
  };
  messageTimestamp: string;
  status: string;
} 