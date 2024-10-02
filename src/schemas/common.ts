import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const phoneNumberSchema = z
	.custom<string>((value) => isValidPhoneNumber(value), "Invalid phone number")
	.transform((phoneNumber) => parsePhoneNumber(phoneNumber).number);

export const mediaSchema = z.union([z.string().url(), z.string().base64()]);
