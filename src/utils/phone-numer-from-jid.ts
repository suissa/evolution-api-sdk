import { parsePhoneNumber } from "libphonenumber-js";

export function phoneNumberFromJid(jid: string) {
	return parsePhoneNumber(`+${jid.split("@")[0]}`).number;
}
