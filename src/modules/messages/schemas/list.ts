import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";
import { MessageIdSchema } from "@/schemas/common";

const RowSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  rowId: z.string(),
});

const SectionSchema = z.object({
  title: z.string(),
  rows: z.array(RowSchema),
});

export const ListBodySchema = z.object({
  number: ChatIdSchema,
  buttonText: z.string(),
  text: z.string(),
  title: z.string().optional(),
  footer: z.string().optional(),
  sections: z.array(SectionSchema),
  options: z.object({
    delay: z.number().optional(),
    messageId: MessageIdSchema.optional(),
  }).optional(),
});

export type ListMessageOptions = z.infer<typeof ListBodySchema>;

export const ListResponseSchema = z.object({
    key: z.object({
        remoteJid: ChatIdSchema,
        fromMe: z.boolean(),
        id: MessageIdSchema,
    }),
    messageTimestamp: z.string(),
    status: z.string(),
});

export type ListMessageResponse = z.infer<typeof ListResponseSchema>; 