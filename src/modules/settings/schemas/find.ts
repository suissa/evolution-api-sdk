import { z } from "zod";

export const FindResponseSchema = z.object({
  reject_call: z.boolean(),
  groups_ignore: z.boolean(),
  always_online: z.boolean(),
  read_messages: z.boolean(),
  read_status: z.boolean(),
});

export type FindResponse = z.infer<typeof FindResponseSchema>; 