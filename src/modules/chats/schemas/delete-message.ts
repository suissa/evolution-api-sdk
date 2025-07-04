import { z } from "zod";
import { ChatIdSchema, MessageIdSchema } from "@/schemas/common";

export const DeleteMessageBodySchema = z.object({
  number: ChatIdSchema,
  messageId: MessageIdSchema,
  owner: z.boolean(),
});

export type DeleteMessageOptions = z.infer<typeof DeleteMessageBodySchema>;

export const DeleteMessageResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type DeleteMessageResponse = z.infer<typeof DeleteMessageResponseSchema>; 