import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const UpdateSettingBodySchema = z.object({
  groupJid: GroupJidSchema,
  setting: z.enum(["announcement", "locked"]),
  value: z.boolean(),
});

export type UpdateSettingOptions = z.infer<typeof UpdateSettingBodySchema>;

export const UpdateSettingResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type UpdateSettingResponse = z.infer<typeof UpdateSettingResponseSchema>; 