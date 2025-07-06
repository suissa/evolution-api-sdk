// Pure TypeScript interfaces for better IDE support and performance
import {
	GroupResponseRaw,
	GroupResponseSchemaTransform,
	GroupWithParticipantsResponseRaw,
	GroupWithParticipantsResponseSchemaTransform,
	GroupResponse,
	GroupWithParticipantsResponse,
} from "./common";

// Transform functions
export const FindAllGroupsResponseTransform = (
	groups: GroupResponseRaw[],
): GroupResponse[] => groups.map(GroupResponseSchemaTransform);

export const FindAllGroupsWithParticipantsResponseTransform = (
	groups: GroupWithParticipantsResponseRaw[],
): GroupWithParticipantsResponse[] => groups.map(GroupWithParticipantsResponseSchemaTransform);

// Response types
export type FindAllGroupsResponse = GroupResponse[];
export type FindAllGroupsWithParticipantsResponse = GroupWithParticipantsResponse[];

// Backward compatibility aliases
export const ResponseSchema = { parse: FindAllGroupsResponseTransform };
export const ResponseWithParticipantsSchema = { parse: FindAllGroupsWithParticipantsResponseTransform };
