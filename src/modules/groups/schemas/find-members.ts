import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";
import { JidSchema } from "@/schemas/common";

export const FindMembersParamsSchema = z.object({
  groupJid: GroupJidSchema,
});

export type FindMembersOptions = z.infer<typeof FindMembersParamsSchema>;

const MemberSchema = z.object({
  id: JidSchema,
  admin: z.string().nullable(),
});

export const FindMembersResponseSchema = z.array(MemberSchema);

export type FindMembersResponse = z.infer<typeof FindMembersResponseSchema>; 