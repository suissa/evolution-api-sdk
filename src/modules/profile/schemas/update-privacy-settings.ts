import { z } from "zod";

const PrivacySettingSchema = z.enum(["all", "contacts", "contact_blacklist", "none"]);

export const UpdatePrivacySettingsBodySchema = z.object({
  online: PrivacySettingSchema.optional(),
  profile: PrivacySettingSchema.optional(),
  status: PrivacySettingSchema.optional(),
  readreceipts: PrivacySettingSchema.optional(),
  last: PrivacySettingSchema.optional(),
  groupadd: PrivacySettingSchema.optional(),
});

export type UpdatePrivacySettingsOptions = z.infer<typeof UpdatePrivacySettingsBodySchema>;

export const UpdatePrivacySettingsResponseSchema = z.object({
  status: z.string(),
});

export type UpdatePrivacySettingsResponse = z.infer<typeof UpdatePrivacySettingsResponseSchema>; 