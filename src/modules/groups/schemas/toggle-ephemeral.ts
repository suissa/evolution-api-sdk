import { z } from "zod";
import { GroupJidSchema } from "@/schemas/common";

export const ToggleEphemeralBodySchema = z.object({
  groupJid: GroupJidSchema,
  duration: z.number(),
});

export type ToggleEphemeralOptions = z.infer<typeof ToggleEphemeralBodySchema>;

export const ToggleEphemeralResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
});

export type ToggleEphemeralResponse = z.infer<typeof ToggleEphemeralResponseSchema>; 