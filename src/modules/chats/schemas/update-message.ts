import { z } from "zod";
import { ChatIdSchema, MessageIdSchema } from "@/schemas/common";

export const UpdateMessageBodySchema = z.object({
  number: ChatIdSchema,
  messageId: MessageIdSchema,
  message: z.string(),
});

export type UpdateMessageOptions = z.infer<typeof UpdateMessageBodySchema>;

export const UpdateMessageResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type UpdateMessageResponse = z.infer<typeof UpdateMessageResponseSchema>; 