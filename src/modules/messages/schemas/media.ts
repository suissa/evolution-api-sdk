import { Media } from "@/schemas/common";
import { BaseMessageOptions } from "./base";

// Request interfaces
export interface MediaMessageOptions extends BaseMessageOptions {
  mediatype: "audio" | "image" | "video" | "document";
  mimetype?: string;
  caption?: string;
  media: Media;
  fileName?: string;
  linkPreview?: boolean;
  mentionsEveryOne?: boolean;
  mentioned?: string[];
  quoted?: {
    key: {
      id: string;
    };
    message: {
      conversation: string;
    };
  };
}

// Response interfaces
export interface MediaMessageResponse {
  key: {
    remoteJid: string;
    fromMe: boolean;
    id: string;
  };
  message: {
    [T in
      | "audioMessage"
      | "imageMessage"
      | "videoMessage"
      | "documentMessage"]: {
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
