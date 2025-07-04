import { z } from "zod";

export const ConnectParamsSchema = z.object({
  instanceName: z.string(),
});

export type ConnectOptions = z.infer<typeof ConnectParamsSchema>;

export const ConnectResponseSchema = z.object({
  instance: z.object({
    instanceName: z.string(),
    status: z.string(),
  }),
  hash: z.object({
    apikey: z.string(),
  }),
  qrcode: z.object({
    code: z.string(),
    base64: z.string().optional(), // The doc doesn't specify, but it's good to have
  }),
});

export type ConnectResponse = z.infer<typeof ConnectResponseSchema>; 