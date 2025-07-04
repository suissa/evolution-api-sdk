import { z } from "zod";
import { ChatIdSchema, GroupJidSchema } from "@/schemas/common";

export const CreateGroupBodySchema = z.object({
  subject: z.string(),
  participants: z.array(ChatIdSchema),
});

export type CreateGroupOptions = z.infer<typeof CreateGroupBodySchema>;

export const CreateGroupResponseSchema = z.object({
  status: z.string(),
  gid: GroupJidSchema,
});

export type CreateGroupResponse = z.infer<typeof CreateGroupResponseSchema>; 