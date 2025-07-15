// Pure TypeScript interfaces for better IDE support and performance
import type { Media } from "@/schemas/common";
import { Jid, MessageId } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { BaseMessageOptions } from "./base";

// Raw response interface from API
export interface AudioMessageResponseRaw {
  key: {
    remoteJid: string;
    id: string;
  };
  message: {
    audioMessage: {
      url: string;
      mimetype?: string;
      fileSha256: string;
      fileLength: number | string;
      seconds: number;
      mediaKey: string;
      fileEncSha256: string;
      directPath: string;
      mediaKeyTimestamp: number | string;
    };
  };
  messageTimestamp: string | Date;
}

// Request interfaces
export interface AudioMessageOptions extends BaseMessageOptions {
  audio: string;
  linkPreview: boolean;
  mentionsEveryOne: boolean;
  mentioned: string[];
  quoted: {
    key: {
      id: string;
    };
    message: {
      conversation: string;
    };
  };
}

export interface AudioMessageBody extends BaseMessageOptions {
  media: Media;
  mediatype: "audio";
  mimetype?: string;
}

// Response interfaces
export interface AudioMessageResponse {
  key: {
    remoteJid: string;
    fromMe: boolean;
    id: string;
  };
  message: {
    audioMessage: {
      url: string;
      mimetype: string;
      fileSha256: string;
      fileLength: string;
      seconds: number;
      ptt: boolean;
      mediaKey: string;
      fileEncSha256: string;
      directPath: string;
      mediaKeyTimestamp: string;
    };
  };
  messageTimestamp: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
}
