import { z } from "zod";

export const SetBodySchema = z.object({
  reject_call: z.boolean().optional(),
  groups_ignore: z.boolean().optional(),
  always_online: z.boolean().optional(),
  read_messages: z.boolean().optional(),
  read_status: z.boolean().optional(),
});

export type SetOptions = z.infer<typeof SetBodySchema>;

export const SetResponseSchema = z.object({
  message: z.string(),
});

export type SetResponse = z.infer<typeof SetResponseSchema>; 