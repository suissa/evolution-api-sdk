import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";

export const FindStatusMessageBodySchema = z.object({
  number: ChatIdSchema,
});

export type FindStatusMessageOptions = z.infer<typeof FindStatusMessageBodySchema>;

export const FindStatusMessageResponseSchema = z.array(z.any());

export type FindStatusMessageResponse = z.infer<typeof FindStatusMessageResponseSchema>; 