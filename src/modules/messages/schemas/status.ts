import { z } from "zod";

export const StatusBodySchema = z.object({
  message: z.string(),
  options: z.object({
    backgroundColor: z.string().optional(),
    font: z.number().min(0).max(6).optional(),
  }).optional(),
});

export type StatusMessageOptions = z.infer<typeof StatusBodySchema>;

export const StatusResponseSchema = z.object({
    key: z.object({
        remoteJid: z.string(),
        fromMe: z.boolean(),
        id: z.string(),
    }),
    messageTimestamp: z.string(),
    status: z.string(),
});

export type StatusMessageResponse = z.infer<typeof StatusResponseSchema>; 