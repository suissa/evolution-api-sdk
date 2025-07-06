// Pure TypeScript interfaces for better IDE support and performance
export interface StatusMessageOptions {
  message: string;
  options?: {
    backgroundColor?: string;
    font?: number; // 0-6 range
  };
}

export interface StatusMessageResponse {
  key: {
    remoteJid: string;
    fromMe: boolean;
    id: string;
  };
  messageTimestamp: string;
  status: string;
} 