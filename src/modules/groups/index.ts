import { z } from "zod";

import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";
import { GroupInviteCodeSchema, GroupJidSchema } from "@/schemas/common";
import type { GroupInviteCode, GroupJid } from "@/types/tags";

import * as FindAll from "./schemas/find-all";
import * as FindByInviteCode from "./schemas/find-by-invite-code";
import * as FindByJid from "./schemas/find-by-jid";

export class GroupsModule {
	constructor(private readonly api: ApiService) {}

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

	async findByInviteCode(
		inviteCode: string | GroupInviteCode,
	): Promise<FindByInviteCode.FindGroupByInviteCodeResponse> {
		const response = await this.api.get(Routes.Groups.FindByInviteCode, {
			params: { inviteCode: GroupInviteCodeSchema.parse(inviteCode) },
		});

		return FindByInviteCode.ResponseSchema.parse(response);
	}

	async findByJid(
		groupJid: string | GroupJid,
	): Promise<FindByJid.FindGroupByJidResponse> {
		const response = await this.api.get(Routes.Groups.FindByJid, {
			params: { groupJid: GroupJidSchema.parse(groupJid) },
		});

		return FindByJid.ResponseSchema.parse(response);
	}
}
