import { z } from "zod";

export const SetPresenceBodySchema = z.object({
  instanceName: z.string(),
  presence: z.enum(["unavailable", "available", "composing", "recording", "paused"]),
});

export type SetPresenceOptions = z.infer<typeof SetPresenceBodySchema>;

export const SetPresenceResponseSchema = z.object({
  error: z.boolean(),
  message: z.string(),
  data: z.object({
    instance: z.string(),
    presence: z.string(),
  }),
});

export type SetPresenceResponse = z.infer<typeof SetPresenceResponseSchema>; 