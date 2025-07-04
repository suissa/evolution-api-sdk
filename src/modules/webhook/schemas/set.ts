import { z } from "zod";

export const SetBodySchema = z.object({
  url: z.string().url(),
  enabled: z.boolean(),
  webhook_by_events: z.boolean(),
  events: z.array(z.string()),
});

export type SetOptions = z.infer<typeof SetBodySchema>;

export const SetResponseSchema = z.object({
  message: z.string(),
});

export type SetResponse = z.infer<typeof SetResponseSchema>; 