import { z } from "zod";

export const UpdatePictureBodySchema = z.object({
  url: z.string().url(),
});

export type UpdatePictureOptions = z.infer<typeof UpdatePictureBodySchema>;

export const UpdatePictureResponseSchema = z.object({
  status: z.string(),
});

export type UpdatePictureResponse = z.infer<typeof UpdatePictureResponseSchema>; 