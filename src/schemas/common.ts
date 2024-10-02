import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const zodPhoneNumber = z.custom(
	(value) => isValidPhoneNumber(value),
	"Invalid phone number",
);

export const zodMedia = z.union([z.string().url(), z.string().base64()]);
