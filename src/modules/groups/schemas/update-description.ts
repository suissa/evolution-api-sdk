import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const UpdateDescriptionBodySchema = z.object({
  groupJid: GroupJidSchema,
  description: z.string(),
});

export type UpdateDescriptionOptions = z.infer<typeof UpdateDescriptionBodySchema>;

export const UpdateDescriptionResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type UpdateDescriptionResponse = z.infer<typeof UpdateDescriptionResponseSchema>; 