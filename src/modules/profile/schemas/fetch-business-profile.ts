import { z } from "zod";
import { JidSchema } from "@/schemas/common";

export const FetchBusinessProfileBodySchema = z.object({
  jid: JidSchema,
});

export type FetchBusinessProfileOptions = z.infer<typeof FetchBusinessProfileBodySchema>;

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  countryCode: z.string(),
});

const WebsiteSchema = z.string().url();

const CategorySchema = z.object({
  id: z.string(),
  localized_display_name: z.string(),
});

export const FetchBusinessProfileResponseSchema = z.object({
  jid: JidSchema,
  description: z.string(),
  email: z.string().email(),
  websites: z.array(WebsiteSchema),
  latitude: z.number(),
  longitude: z.number(),
  address: AddressSchema,
  categories: z.array(CategorySchema),
  isCurrent: z.boolean(),
});

export type FetchBusinessProfileResponse = z.infer<typeof FetchBusinessProfileResponseSchema>; 