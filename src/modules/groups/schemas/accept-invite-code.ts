import { z } from "zod";
import { GroupInviteCodeSchema } from "@/schemas/common";

export const AcceptInviteCodeBodySchema = z.object({
  inviteCode: GroupInviteCodeSchema,
});

export type AcceptInviteCodeOptions = z.infer<typeof AcceptInviteCodeBodySchema>;

export const AcceptInviteCodeResponseSchema = z.object({
  status: z.string(),
  gid: z.string(),
});

export type AcceptInviteCodeResponse = z.infer<typeof AcceptInviteCodeResponseSchema>; 