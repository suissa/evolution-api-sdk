import { z } from "zod";

const PrivacySettingSchema = z.enum(["all", "contacts", "contact_blacklist", "none"]);

export const FetchPrivacySettingsResponseSchema = z.object({
  online: PrivacySettingSchema,
  profile: PrivacySettingSchema,
  status: PrivacySettingSchema,
  readreceipts: PrivacySettingSchema,
  last: PrivacySettingSchema,
  groupadd: PrivacySettingSchema,
});

export type FetchPrivacySettingsResponse = z.infer<typeof FetchPrivacySettingsResponseSchema>; 