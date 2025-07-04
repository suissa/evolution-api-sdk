import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";
import { MessageIdSchema } from "@/schemas/common";

const ComponentSchema = z.object({
  type: z.enum(["body", "header", "button"]),
  sub_type: z.enum(["text", "url", "quick_reply"]).optional(),
  parameters: z.array(z.object({
    type: z.enum(["text", "image", "document", "video"]),
    text: z.string().optional(),
    image: z.object({ link: z.string().url() }).optional(),
    document: z.object({ link: z.string().url() }).optional(),
    video: z.object({ link: z.string().url() }).optional(),
  })),
});

export const TemplateBodySchema = z.object({
  number: ChatIdSchema,
  name: z.string(),
  language: z.object({
    code: z.string(),
  }),
  components: z.array(ComponentSchema),
  options: z.object({
    delay: z.number().optional(),
    messageId: MessageIdSchema.optional(),
  }).optional(),
});

export type TemplateMessageOptions = z.infer<typeof TemplateBodySchema>;

export const TemplateResponseSchema = z.object({
    key: z.object({
        remoteJid: ChatIdSchema,
        fromMe: z.boolean(),
        id: MessageIdSchema,
    }),
    messageTimestamp: z.string(),
    status: z.string(),
});

export type TemplateMessageResponse = z.infer<typeof TemplateResponseSchema>; 