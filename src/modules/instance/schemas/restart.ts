import { z } from "zod";

export const RestartParamsSchema = z.object({
  instanceName: z.string(),
});

export type RestartOptions = z.infer<typeof RestartParamsSchema>;

export const RestartResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
});

export type RestartResponse = z.infer<typeof RestartResponseSchema>; 