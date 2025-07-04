import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const RevokeInviteCodeBodySchema = z.object({
  groupJid: GroupJidSchema,
});

export type RevokeInviteCodeOptions = z.infer<typeof RevokeInviteCodeBodySchema>;

export const RevokeInviteCodeResponseSchema = z.object({
  status: z.string(),
  code: z.string(),
});

export type RevokeInviteCodeResponse = z.infer<typeof RevokeInviteCodeResponseSchema>; 