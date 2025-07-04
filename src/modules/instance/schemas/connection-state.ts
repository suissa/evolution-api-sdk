import { z } from "zod";

export const ConnectionStateParamsSchema = z.object({
  instanceName: z.string(),
});

export type ConnectionStateOptions = z.infer<typeof ConnectionStateParamsSchema>;

export const ConnectionStateResponseSchema = z.object({
  state: z.enum(["open", "close", "connecting"]),
});

export type ConnectionStateResponse = z.infer<typeof ConnectionStateResponseSchema>; 