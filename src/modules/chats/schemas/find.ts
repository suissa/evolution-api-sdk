import { ChatId, GroupJid, Jid } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";
import { z } from "zod";

export const FindChatsResponseSchema = z
	.array(
		z.object({
			id: z.string(),
			remoteJid: z.string(),
			name: z.string().nullable(),
			labels: z.array(z.string()).nullable(),
			createdAt: z.coerce.date(),
			updatedAt: z.coerce.date(),
			pushName: z.string().nullable(),
			profilePicUrl: z.string().url().nullable(),
		}),
	)
	.transform((chats) =>
		chats.map((chat) => ({
			id: ChatId(chat.id),
			jid: chat.remoteJid.endsWith("@g.us")
				? GroupJid(chat.remoteJid)
				: Jid(chat.remoteJid),
			phoneNumber: phoneNumberFromJid(chat.remoteJid),
			name: chat.name || undefined,
			labels: chat.labels || undefined,
			createdAt: chat.createdAt,
			updatedAt: chat.updatedAt,
			pushName: chat.pushName || undefined,
			pictureUrl: chat.profilePicUrl || undefined,
		})),
	);

export type FindChatsResponse = z.infer<typeof FindChatsResponseSchema>;

export { FindChatsResponseSchema as ResponseSchema };
