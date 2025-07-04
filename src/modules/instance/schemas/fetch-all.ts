import { z } from "zod";

const InstanceSchema = z.object({
  instance: z.object({
    instanceName: z.string(),
    owner: z.string(),
    profileName: z.string(),
    profileStatus: z.string(),
    profilePicUrl: z.string(),
    status: z.string(),
  }),
});

export const FetchAllResponseSchema = z.array(InstanceSchema);

export type FetchAllResponse = z.infer<typeof FetchAllResponseSchema>; 