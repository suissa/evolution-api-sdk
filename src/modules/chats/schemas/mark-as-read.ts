import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";

export const MarkAsReadBodySchema = z.object({
  number: ChatIdSchema,
});

export type MarkAsReadOptions = z.infer<typeof MarkAsReadBodySchema>;

export const MarkAsReadResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type MarkAsReadResponse = z.infer<typeof MarkAsReadResponseSchema>; 