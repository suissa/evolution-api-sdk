import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const LeaveBodySchema = z.object({
  groupJid: GroupJidSchema,
});

export type LeaveOptions = z.infer<typeof LeaveBodySchema>;

export const LeaveResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type LeaveResponse = z.infer<typeof LeaveResponseSchema>; 