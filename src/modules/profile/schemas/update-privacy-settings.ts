// Pure TypeScript interfaces for better IDE support and performance
import type { PrivacySetting } from "./fetch-privacy-settings";

export interface UpdatePrivacySettingsRequest {
	online?: PrivacySetting;
	profile?: PrivacySetting;
	status?: PrivacySetting;
	readreceipts?: PrivacySetting;
	last?: PrivacySetting;
	groupadd?: PrivacySetting;
}

export interface UpdatePrivacySettingsResponse {
  status: string;
}

// Backward compatibility aliases
export type UpdatePrivacySettingsOptions = UpdatePrivacySettingsRequest; 