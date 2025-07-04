import { z } from "zod";

export const RemovePictureResponseSchema = z.object({
  status: z.string(),
});

export type RemovePictureResponse = z.infer<typeof RemovePictureResponseSchema>; 