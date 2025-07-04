import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const UpdatePictureBodySchema = z.object({
  groupJid: GroupJidSchema,
  url: z.string().url(),
});

export type UpdatePictureOptions = z.infer<typeof UpdatePictureBodySchema>;

export const UpdatePictureResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type UpdatePictureResponse = z.infer<typeof UpdatePictureResponseSchema>; 