// Pure TypeScript interfaces for better IDE support and performance
import {
	GroupWithParticipantsResponseSchemaTransform,
	GroupWithParticipantsResponse,
} from "./common";

// Response type (same as GroupWithParticipantsResponse)
export type FindGroupByJidResponse = GroupWithParticipantsResponse;

// Transform function
export const FindGroupByJidResponseTransform = GroupWithParticipantsResponseSchemaTransform;

// Backward compatibility alias
export const ResponseSchema = { parse: FindGroupByJidResponseTransform };
