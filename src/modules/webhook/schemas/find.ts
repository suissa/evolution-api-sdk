import { z } from "zod";

export const FindResponseSchema = z.object({
  webhook: z.string().url(),
  enabled: z.boolean(),
  webhook_by_events: z.boolean(),
  events: z.array(z.string()),
});

export type FindResponse = z.infer<typeof FindResponseSchema>; 