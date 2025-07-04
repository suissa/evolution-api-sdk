import { z } from "zod";

export const DeleteParamsSchema = z.object({
  instanceName: z.string(),
});

export type DeleteOptions = z.infer<typeof DeleteParamsSchema>;

export const DeleteResponseSchema = z.object({
  error: z.boolean(),
  message: z.string(),
  instance: z.object({
    instanceName: z.string(),
    status: z.string(),
  }),
});

export type DeleteResponse = z.infer<typeof DeleteResponseSchema>; 