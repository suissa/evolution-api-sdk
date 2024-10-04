import type { GroupJid, Jid } from "@/types/tags";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const phoneNumberSchema = z
	.custom<string>((value) => isValidPhoneNumber(value), "Invalid phone number")
	.transform<string>((phoneNumber) => parsePhoneNumber(phoneNumber).number);

export const jidSchema = z
	.string()
	.endsWith("@s.whatsapp.net") as z.ZodType<Jid>;

export const groupJidSchema = z
	.string()
	.endsWith("@g.us") as z.ZodType<GroupJid>;

export const apiNumberSchema = z.union([
	phoneNumberSchema,
	jidSchema,
	groupJidSchema,
]);

export const mediaSchema = z.union([z.string().url(), z.string().base64()]);
