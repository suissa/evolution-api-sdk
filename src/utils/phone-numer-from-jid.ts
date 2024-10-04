import { parsePhoneNumber } from "libphonenumber-js";

/**
 * Get phone number from JID
 * @param jid - JID (remote JID)
 */
export function phoneNumberFromJid(jid: string) {
	return parsePhoneNumber(`+${jid.split("@")[0]}`).number;
}
