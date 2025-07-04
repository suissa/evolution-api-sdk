import { z } from "zod";

export const UpdateNameBodySchema = z.object({
  name: z.string(),
});

export type UpdateNameOptions = z.infer<typeof UpdateNameBodySchema>;

export const UpdateNameResponseSchema = z.object({
  status: z.string(),
});

export type UpdateNameResponse = z.infer<typeof UpdateNameResponseSchema>; 