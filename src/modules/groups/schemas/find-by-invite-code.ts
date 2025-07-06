// Pure TypeScript interfaces for better IDE support and performance
import {
	GroupWithParticipantsResponseRaw,
	GroupWithParticipantsResponseSchemaTransform,
	GroupWithParticipantsResponse,
} from "./common";

// Raw response interface from API
export interface FindGroupByInviteCodeResponseRaw extends GroupWithParticipantsResponseRaw {
	isCommunity: boolean;
	isCommunityAnnounce: boolean;
	joinApprovalMode: boolean;
	memberAddMode: boolean;
}

// Transformed response interface
export interface FindGroupByInviteCodeResponse extends GroupWithParticipantsResponse {
	isCommunity: boolean;
	isCommunityAnnounce: boolean;
	joinApprovalMode: boolean;
	memberAddMode: boolean;
}

// Transform function
export const FindGroupByInviteCodeResponseTransform = (
	group: FindGroupByInviteCodeResponseRaw,
): FindGroupByInviteCodeResponse => ({
	...GroupWithParticipantsResponseSchemaTransform({
		...group,
		pictureUrl: null,
	}),
	isCommunity: group.isCommunity,
	isCommunityAnnounce: group.isCommunityAnnounce,
	joinApprovalMode: group.joinApprovalMode,
	memberAddMode: group.memberAddMode,
});

// Backward compatibility alias
export const ResponseSchema = { parse: FindGroupByInviteCodeResponseTransform };
