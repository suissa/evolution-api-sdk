import { z } from "zod";

import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";
import { GroupInviteCodeSchema, GroupJidSchema } from "@/schemas/common";
import type { GroupInviteCode, GroupJid } from "@/types/tags";

import * as AcceptInviteCode from "./schemas/accept-invite-code";
import * as Create from "./schemas/create";
import * as FetchInviteCode from "./schemas/fetch-invite-code";
import * as FindAll from "./schemas/find-all";
import * as FindByInviteCode from "./schemas/find-by-invite-code";
import * as FindByJid from "./schemas/find-by-jid";
import * as FindMembers from "./schemas/find-members";
import * as Leave from "./schemas/leave";
import * as RevokeInviteCode from "./schemas/revoke-invite-code";
import * as SendGroupInvite from "./schemas/send-group-invite";
import * as ToggleEphemeral from "./schemas/toggle-ephemeral";
import * as UpdateDescription from "./schemas/update-description";
import * as UpdateMembers from "./schemas/update-members";
import * as UpdatePicture from "./schemas/update-picture";
import * as UpdateSetting from "./schemas/update-setting";
import * as UpdateSubject from "./schemas/update-subject";

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
			params: { getParticipants: z.boolean().parse(getParticipants) },
		});

		if (getParticipants) {
			return FindAll.ResponseWithParticipantsSchema.parse(response);
		}
		return FindAll.ResponseSchema.parse(response);
	}

	/**
	 * Gets a group by invite code
	 * @param inviteCode - The group invite code (not the URL)
	 */
	async findByInviteCode(
		inviteCode: string | GroupInviteCode,
	): Promise<FindByInviteCode.FindGroupByInviteCodeResponse> {
		const response = await this.api.get(Routes.Groups.FindByInviteCode, {
			params: { inviteCode: GroupInviteCodeSchema.parse(inviteCode) },
		});

		return FindByInviteCode.ResponseSchema.parse(response);
	}

	/**
	 * Gets a group by JID
	 * @param groupJid - The group JID terminated with \@g.us
	 */
	async findByJid(
		groupJid: string | GroupJid,
	): Promise<FindByJid.FindGroupByJidResponse> {
		const response = await this.api.get(Routes.Groups.FindByJid, {
			params: { groupJid: GroupJidSchema.parse(groupJid) },
		});

		return FindByJid.ResponseSchema.parse(response);
	}

	async create(
		options: Create.CreateGroupOptions,
	): Promise<Create.CreateGroupResponse> {
		const body = Create.CreateGroupBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.Create, {
			body,
		});

		return Create.CreateGroupResponseSchema.parse(response);
	}

	async updatePicture(
		options: UpdatePicture.UpdatePictureOptions,
	): Promise<UpdatePicture.UpdatePictureResponse> {
		const body = UpdatePicture.UpdatePictureBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.UpdatePicture, {
			body,
		});

		return UpdatePicture.UpdatePictureResponseSchema.parse(response);
	}

	async updateSubject(
		options: UpdateSubject.UpdateSubjectOptions,
	): Promise<UpdateSubject.UpdateSubjectResponse> {
		const body = UpdateSubject.UpdateSubjectBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.UpdateSubject, {
			body,
		});

		return UpdateSubject.UpdateSubjectResponseSchema.parse(response);
	}

	async updateDescription(
		options: UpdateDescription.UpdateDescriptionOptions,
	): Promise<UpdateDescription.UpdateDescriptionResponse> {
		const body = UpdateDescription.UpdateDescriptionBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.UpdateDescription, {
			body,
		});

		return UpdateDescription.UpdateDescriptionResponseSchema.parse(response);
	}

	async fetchInviteCode(
		options: FetchInviteCode.FetchInviteCodeOptions,
	): Promise<FetchInviteCode.FetchInviteCodeResponse> {
		const params = FetchInviteCode.FetchInviteCodeParamsSchema.parse(options);
		const response = await this.api.get(Routes.Groups.FetchInviteCode, {
			params,
		});

		return FetchInviteCode.FetchInviteCodeResponseSchema.parse(response);
	}

	async acceptInviteCode(
		options: AcceptInviteCode.AcceptInviteCodeOptions,
	): Promise<AcceptInviteCode.AcceptInviteCodeResponse> {
		const body = AcceptInviteCode.AcceptInviteCodeBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.AcceptInviteCode, {
			body,
		});

		return AcceptInviteCode.AcceptInviteCodeResponseSchema.parse(response);
	}

	async revokeInviteCode(
		options: RevokeInviteCode.RevokeInviteCodeOptions,
	): Promise<RevokeInviteCode.RevokeInviteCodeResponse> {
		const body = RevokeInviteCode.RevokeInviteCodeBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.RevokeInviteCode, {
			body,
		});

		return RevokeInviteCode.RevokeInviteCodeResponseSchema.parse(response);
	}

	async sendGroupInvite(
		options: SendGroupInvite.SendGroupInviteOptions,
	): Promise<SendGroupInvite.SendGroupInviteResponse> {
		const body = SendGroupInvite.SendGroupInviteBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.SendGroupInvite, {
			body,
		});

		return SendGroupInvite.SendGroupInviteResponseSchema.parse(response);
	}

	async findMembers(
		options: FindMembers.FindMembersOptions,
	): Promise<FindMembers.FindMembersResponse> {
		const params = FindMembers.FindMembersParamsSchema.parse(options);
		const response = await this.api.get(Routes.Groups.FindMembers, {
			params,
		});

		return FindMembers.FindMembersResponseSchema.parse(response);
	}

	async updateMembers(
		options: UpdateMembers.UpdateMembersOptions,
	): Promise<UpdateMembers.UpdateMembersResponse> {
		const body = UpdateMembers.UpdateMembersBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.UpdateMembers, {
			body,
		});

		return UpdateMembers.UpdateMembersResponseSchema.parse(response);
	}

	async updateSetting(
		options: UpdateSetting.UpdateSettingOptions,
	): Promise<UpdateSetting.UpdateSettingResponse> {
		const body = UpdateSetting.UpdateSettingBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.UpdateSetting, {
			body,
		});

		return UpdateSetting.UpdateSettingResponseSchema.parse(response);
	}

	async toggleEphemeral(
		options: ToggleEphemeral.ToggleEphemeralOptions,
	): Promise<ToggleEphemeral.ToggleEphemeralResponse> {
		const body = ToggleEphemeral.ToggleEphemeralBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.ToggleEphemeral, {
			body,
		});

		return ToggleEphemeral.ToggleEphemeralResponseSchema.parse(response);
	}

	async leave(
		options: Leave.LeaveOptions,
	): Promise<Leave.LeaveResponse> {
		const body = Leave.LeaveBodySchema.parse(options);
		const response = await this.api.post(Routes.Groups.Leave, {
			body,
		});

		return Leave.LeaveResponseSchema.parse(response);
	}
}
