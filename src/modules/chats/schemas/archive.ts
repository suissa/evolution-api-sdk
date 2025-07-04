import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";

export const ArchiveBodySchema = z.object({
  number: ChatIdSchema,
  archive: z.boolean(),
});

export type ArchiveOptions = z.infer<typeof ArchiveBodySchema>;

export const ArchiveResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type ArchiveResponse = z.infer<typeof ArchiveResponseSchema>; 