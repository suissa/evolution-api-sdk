import { z } from "zod";
import { ChatIdSchema } from "@/schemas/common";

export const FetchProfilePictureBodySchema = z.object({
  number: ChatIdSchema,
});

export type FetchProfilePictureOptions = z.infer<typeof FetchProfilePictureBodySchema>;

export const FetchProfilePictureResponseSchema = z.object({
  profilePictureUrl: z.string().url(),
});

export type FetchProfilePictureResponse = z.infer<typeof FetchProfilePictureResponseSchema>; 