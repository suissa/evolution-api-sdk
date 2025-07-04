import { z } from "zod";
import { GroupJidSchema, JidSchema } from "@/schemas/common";

export const UpdateMembersBodySchema = z.object({
  groupJid: GroupJidSchema,
  participants: z.array(JidSchema),
  action: z.enum(["add", "remove", "promote", "demote"]),
});

export type UpdateMembersOptions = z.infer<typeof UpdateMembersBodySchema>;

const ParticipantSchema = z.object({
  id: JidSchema,
  status: z.string(),
});

export const UpdateMembersResponseSchema = z.array(ParticipantSchema);

export type UpdateMembersResponse = z.infer<typeof UpdateMembersResponseSchema>; 