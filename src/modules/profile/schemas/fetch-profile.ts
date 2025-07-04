import { z } from "zod";
import { JidSchema } from "@/schemas/common";

export const FetchProfileBodySchema = z.object({
  jid: JidSchema,
});

export type FetchProfileOptions = z.infer<typeof FetchProfileBodySchema>;

export const FetchProfileResponseSchema = z.object({
  status: z.string(),
  pushname: z.string(),
  imgUrl: z.string().url(),
});

export type FetchProfileResponse = z.infer<typeof FetchProfileResponseSchema>; 