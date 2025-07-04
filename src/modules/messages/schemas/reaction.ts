import { z } from "zod";
import { ChatIdSchema, MessageIdSchema } from "@/schemas/common";

export const ReactionBodySchema = z.object({
  number: ChatIdSchema,
  messageId: MessageIdSchema,
  reaction: z.string(), // Can be an emoji
});

export type ReactionMessageOptions = z.infer<typeof ReactionBodySchema>;

export const ReactionResponseSchema = z.object({
    key: z.object({
        remoteJid: ChatIdSchema,
        fromMe: z.boolean(),
        id: MessageIdSchema,
    }),
    messageTimestamp: z.string(),
    status: z.string(),
});

export type ReactionMessageResponse = z.infer<typeof ReactionResponseSchema>; 