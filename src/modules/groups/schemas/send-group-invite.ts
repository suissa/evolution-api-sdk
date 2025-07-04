import { z } from "zod";
import { GroupJidSchema, JidSchema } from "@/schemas/common";

export const SendGroupInviteBodySchema = z.object({
  groupJid: GroupJidSchema,
  participantJid: JidSchema,
});

export type SendGroupInviteOptions = z.infer<typeof SendGroupInviteBodySchema>;

export const SendGroupInviteResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type SendGroupInviteResponse = z.infer<typeof SendGroupInviteResponseSchema>; 