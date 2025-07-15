// Pure TypeScript interfaces for better IDE support and performance
import { BaseMessageOptions } from "./base";

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
