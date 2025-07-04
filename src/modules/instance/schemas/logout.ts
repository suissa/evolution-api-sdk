import { z } from "zod";

export const LogoutParamsSchema = z.object({
  instanceName: z.string(),
});

export type LogoutOptions = z.infer<typeof LogoutParamsSchema>;

export const LogoutResponseSchema = z.object({
  error: z.boolean(),
  message: z.string(),
  instance: z.object({
    instanceName: z.string(),
    status: z.string(),
  }),
});

export type LogoutResponse = z.infer<typeof LogoutResponseSchema>; 