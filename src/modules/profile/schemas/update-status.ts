import { z } from "zod";

export const UpdateStatusBodySchema = z.object({
  status: z.string(),
});

export type UpdateStatusOptions = z.infer<typeof UpdateStatusBodySchema>;

export const UpdateStatusResponseSchema = z.object({
  status: z.string(),
});

export type UpdateStatusResponse = z.infer<typeof UpdateStatusResponseSchema>; 