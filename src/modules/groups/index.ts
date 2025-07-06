import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";
import type { GroupInviteCode, GroupJid } from "@/types/tags";

import type * as AcceptInviteCode from "./schemas/accept-invite-code";
import type * as Create from "./schemas/create";
import type * as FetchInviteCode from "./schemas/fetch-invite-code";
import type * as FindAll from "./schemas/find-all";
import type * as FindByInviteCode from "./schemas/find-by-invite-code";
import type * as FindByJid from "./schemas/find-by-jid";
import type * as FindMembers from "./schemas/find-members";
import type * as Leave from "./schemas/leave";
import type * as RevokeInviteCode from "./schemas/revoke-invite-code";
import type * as SendGroupInvite from "./schemas/send-group-invite";
import type * as ToggleEphemeral from "./schemas/toggle-ephemeral";
import type * as UpdateDescription from "./schemas/update-description";
import type * as UpdateMembers from "./schemas/update-members";
import type * as UpdatePicture from "./schemas/update-picture";
import type * as UpdateSetting from "./schemas/update-setting";
import type * as UpdateSubject from "./schemas/update-subject";

export class GroupsModule {
	constructor(private readonly api: ApiService) {}

	/**
	 * Gets all groups
	 * @param getParticipants - Whether to get participants
	 */
	async findAll(getParticipants: false): Promise<FindAll.FindAllGroupsResponse>;
	async findAll(
		getParticipants: true,
	): Promise<FindAll.FindAllGroupsWithParticipantsResponse>;
	async findAll(
		getParticipants = false,
	): Promise<
		| FindAll.FindAllGroupsResponse
		| FindAll.FindAllGroupsWithParticipantsResponse
	> {
		const response = await this.api.get(Routes.Groups.FindAll, {
			params: { getParticipants },
		});

		if (getParticipants) {
			return response as FindAll.FindAllGroupsWithParticipantsResponse;
		}
		return response as FindAll.FindAllGroupsResponse;
	}

	/**
	 * Gets a group by invite code
	 * @param inviteCode - The group invite code (not the URL)
	 */
	async findByInviteCode(
		inviteCode: string | GroupInviteCode,
	): Promise<FindByInviteCode.FindGroupByInviteCodeResponse> {
		const response = await this.api.get(Routes.Groups.FindByInviteCode, {
			params: { inviteCode: inviteCode as GroupInviteCode },
		});

		return response as FindByInviteCode.FindGroupByInviteCodeResponse;
	}

	/**
	 * Gets a group by JID
	 * @param groupJid - The group JID terminated with \@g.us
	 */
	async findByJid(
		groupJid: string | GroupJid,
	): Promise<FindByJid.FindGroupByJidResponse> {
		const response = await this.api.get(Routes.Groups.FindByJid, {
			params: { groupJid: groupJid as GroupJid },
		});

		return response as FindByJid.FindGroupByJidResponse;
	}

	async create(
		options: Create.CreateGroupRequest,
	): Promise<Create.CreateGroupResponse> {
		const response = await this.api.post(Routes.Groups.Create, {
			body: options,
		});

		return response as Create.CreateGroupResponse;
	}

	async updatePicture(
		options: UpdatePicture.UpdatePictureRequest,
	): Promise<UpdatePicture.UpdatePictureResponse> {
		const response = await this.api.post(Routes.Groups.UpdatePicture, {
			body: options,
		});

		return response as UpdatePicture.UpdatePictureResponse;
	}

	async updateSubject(
		options: UpdateSubject.UpdateSubjectRequest,
	): Promise<UpdateSubject.UpdateSubjectResponse> {
		const response = await this.api.post(Routes.Groups.UpdateSubject, {
			body: options,
		});

		return response as UpdateSubject.UpdateSubjectResponse;
	}

	async updateDescription(
		options: UpdateDescription.UpdateDescriptionRequest,
	): Promise<UpdateDescription.UpdateDescriptionResponse> {
		const response = await this.api.post(Routes.Groups.UpdateDescription, {
			body: options,
		});

		return response as UpdateDescription.UpdateDescriptionResponse;
	}

	async fetchInviteCode(
		options: FetchInviteCode.FetchInviteCodeRequest,
	): Promise<FetchInviteCode.FetchInviteCodeResponse> {
		const response = await this.api.get(Routes.Groups.FetchInviteCode, {
			params: options,
		});

		return response as FetchInviteCode.FetchInviteCodeResponse;
	}

	async acceptInviteCode(
		options: AcceptInviteCode.AcceptInviteCodeRequest,
	): Promise<AcceptInviteCode.AcceptInviteCodeResponse> {
		const response = await this.api.post(Routes.Groups.AcceptInviteCode, {
			body: options,
		});

		return response as AcceptInviteCode.AcceptInviteCodeResponse;
	}

	async revokeInviteCode(
		options: RevokeInviteCode.RevokeInviteCodeRequest,
	): Promise<RevokeInviteCode.RevokeInviteCodeResponse> {
		const response = await this.api.post(Routes.Groups.RevokeInviteCode, {
			body: options,
		});

		return response as RevokeInviteCode.RevokeInviteCodeResponse;
	}

	async sendGroupInvite(
		options: SendGroupInvite.SendGroupInviteRequest,
	): Promise<SendGroupInvite.SendGroupInviteResponse> {
		const response = await this.api.post(Routes.Groups.SendGroupInvite, {
			body: options,
		});

		return response as SendGroupInvite.SendGroupInviteResponse;
	}

	async findMembers(
		options: FindMembers.FindMembersRequest,
	): Promise<FindMembers.FindMembersResponse> {
		const response = await this.api.get(Routes.Groups.FindMembers, {
			params: options,
		});

		return response as FindMembers.FindMembersResponse;
	}

	async updateMembers(
		options: UpdateMembers.UpdateMembersRequest,
	): Promise<UpdateMembers.UpdateMembersResponse> {
		const response = await this.api.post(Routes.Groups.UpdateMembers, {
			body: options,
		});

		return response as UpdateMembers.UpdateMembersResponse;
	}

	async updateSetting(
		options: UpdateSetting.UpdateSettingRequest,
	): Promise<UpdateSetting.UpdateSettingResponse> {
		const response = await this.api.post(Routes.Groups.UpdateSetting, {
			body: options,
		});

		return response as UpdateSetting.UpdateSettingResponse;
	}

	async toggleEphemeral(
		options: ToggleEphemeral.ToggleEphemeralRequest,
	): Promise<ToggleEphemeral.ToggleEphemeralResponse> {
		const response = await this.api.post(Routes.Groups.ToggleEphemeral, {
			body: options,
		});

		return response as ToggleEphemeral.ToggleEphemeralResponse;
	}

	async leave(
		options: Leave.LeaveRequest,
	): Promise<Leave.LeaveResponse> {
		const response = await this.api.post(Routes.Groups.Leave, {
			body: options,
		});

		return response as Leave.LeaveResponse;
	}
}
