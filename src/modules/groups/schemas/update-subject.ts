import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const UpdateSubjectBodySchema = z.object({
  groupJid: GroupJidSchema,
  subject: z.string(),
});

export type UpdateSubjectOptions = z.infer<typeof UpdateSubjectBodySchema>;

export const UpdateSubjectResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type UpdateSubjectResponse = z.infer<typeof UpdateSubjectResponseSchema>; 