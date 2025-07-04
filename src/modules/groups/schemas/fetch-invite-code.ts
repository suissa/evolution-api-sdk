import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const FetchInviteCodeParamsSchema = z.object({
  groupJid: GroupJidSchema,
});

export type FetchInviteCodeOptions = z.infer<typeof FetchInviteCodeParamsSchema>;

export const FetchInviteCodeResponseSchema = z.object({
    code: z.string(),
});

export type FetchInviteCodeResponse = z.infer<typeof FetchInviteCodeResponseSchema>; 