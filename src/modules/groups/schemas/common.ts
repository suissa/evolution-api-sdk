// Pure TypeScript interfaces for better IDE support and performance
import { GroupJid, Jid } from "@/types/tags";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";

// Raw response interfaces from API
export interface GroupResponseRaw {
	id: string;
	subject: string;
	subjectOwner: string;
	subjectTime: string | Date;
	pictureUrl?: string | null;
	size: number;
	creation: string | Date;
	owner: string;
	restrict: boolean;
	announce: boolean;
}

export interface ParticipantResponseRaw {
	id: string;
	admin?: "admin" | "superadmin" | null;
}

export interface GroupWithParticipantsResponseRaw extends GroupResponseRaw {
	participants: ParticipantResponseRaw[];
}

// Transformed response interfaces
export interface GroupResponse {
	jid: GroupJid;
	name: string;
	pictureUrl?: string;
	size: number;
	subject: {
		owner: Jid;
		time: Date;
	};
	owner: {
		jid: Jid;
		phoneNumber: string;
	};
	createdAt: Date;
	restrict: boolean;
	announce: boolean;
}

export interface ParticipantResponse {
	id: string;
	role: "admin" | "superadmin" | "member";
}

export interface GroupWithParticipantsResponse extends GroupResponse {
	participants: ParticipantResponse[];
}

// Transform functions
export const GroupResponseSchemaTransform = (
	group: GroupResponseRaw,
): GroupResponse => ({
	jid: GroupJid(group.id),
	name: group.subject,
	pictureUrl: group.pictureUrl || undefined,
	size: group.size,
	subject: {
		owner: Jid(group.subjectOwner),
		time: new Date(group.subjectTime),
	},
	owner: {
		jid: Jid(group.owner),
		phoneNumber: phoneNumberFromJid(group.owner),
	},
	createdAt: new Date(group.creation),
	restrict: group.restrict,
	announce: group.announce,
});

export const ParticipantResponseSchemaTransform = (
	participant: ParticipantResponseRaw,
): ParticipantResponse => ({
	id: participant.id,
	role: participant.admin || ("member" as const),
});

export const GroupWithParticipantsResponseSchemaTransform = (
	group: GroupWithParticipantsResponseRaw,
): GroupWithParticipantsResponse => ({
	...GroupResponseSchemaTransform(group),
	participants: group.participants.map(ParticipantResponseSchemaTransform),
});
