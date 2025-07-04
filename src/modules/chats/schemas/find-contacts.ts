import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";

export const FindContactsBodySchema = z.object({
  number: ChatIdSchema,
});

export type FindContactsOptions = z.infer<typeof FindContactsBodySchema>;

const ContactSchema = z.object({
  id: ChatIdSchema,
  name: z.string(),
  pushname: z.string(),
});

export const FindContactsResponseSchema = z.array(ContactSchema);

export type FindContactsResponse = z.infer<typeof FindContactsResponseSchema>; 