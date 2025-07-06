// Pure TypeScript interfaces for better IDE support and performance
export type PrivacySetting = "all" | "contacts" | "contact_blacklist" | "none";

export interface FetchPrivacySettingsResponse {
  online: PrivacySetting;
  profile: PrivacySetting;
  status: PrivacySetting;
  readreceipts: PrivacySetting;
  last: PrivacySetting;
  groupadd: PrivacySetting;
} 