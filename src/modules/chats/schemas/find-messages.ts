import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";

export const FindMessagesBodySchema = z.object({
  number: ChatIdSchema,
  count: z.number().optional(),
});

export type FindMessagesOptions = z.infer<typeof FindMessagesBodySchema>;

export const FindMessagesResponseSchema = z.array(z.any());

export type FindMessagesResponse = z.infer<typeof FindMessagesResponseSchema>; 