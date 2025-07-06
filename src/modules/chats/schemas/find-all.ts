// Pure TypeScript interfaces for better IDE support and performance
import { ChatId, GroupJid, Jid } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";

// Raw response interface from API
export interface FindAllChatsResponseRaw {
	id: string;
	remoteJid: string;
	name?: string | null;
	labels?: string[] | null;
	createdAt: string | Date;
	updatedAt: string | Date;
	pushName?: string | null;
	profilePicUrl?: string | null;
}

// Transformed response interface
export interface FindAllChatsResponseItem {
	id: ChatId;
	jid: GroupJid | Jid;
	phoneNumber: string;
	name?: string;
	labels?: string[];
	createdAt: Date;
	updatedAt: Date;
	pushName?: string;
	pictureUrl?: string;
}

export type FindAllChatsResponse = FindAllChatsResponseItem[];

// Transform function
export const FindAllChatsResponseTransform = (chats: FindAllChatsResponseRaw[]): FindAllChatsResponse =>
	chats.map((chat) => ({
		id: ChatId(chat.id),
		jid: chat.remoteJid.endsWith("@g.us")
			? GroupJid(chat.remoteJid)
			: Jid(chat.remoteJid),
		phoneNumber: phoneNumberFromJid(chat.remoteJid),
		name: chat.name || undefined,
		labels: chat.labels || undefined,
		createdAt: new Date(chat.createdAt),
		updatedAt: new Date(chat.updatedAt),
		pushName: chat.pushName || undefined,
		pictureUrl: chat.profilePicUrl || undefined,
	}));

// Backward compatibility alias
export const ResponseSchema = { parse: FindAllChatsResponseTransform };
