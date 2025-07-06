// Pure TypeScript interfaces for better IDE support and performance
export interface FindResponse {
  webhook: string;
  enabled: boolean;
  webhook_by_events: boolean;
  events: string[];
} 