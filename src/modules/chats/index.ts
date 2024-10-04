import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as Check from "./schemas/check";
import * as FindAll from "./schemas/find-all";
import * as Presence from "./schemas/presence";

export class ChatsModule {
	constructor(private readonly api: ApiService) {}

	async check(
		...numbers: Check.CheckOptions | Check.CheckOptions[]
	): Promise<Check.CheckResponse> {
		const body = Check.CheckBodySchema.parse(numbers.flat());
		const response = await this.api.post(Routes.Chats.Check, { body });

		return Check.CheckResponseSchema.parse(response);
	}

	async findAll(): Promise<FindAll.FindAllChatsResponse> {
		const response = await this.api.post(Routes.Chats.FindAll);

		return FindAll.ResponseSchema.parse(response);
	}

	async sendPresence(options: Presence.PresenceOptions) {
		const body = Presence.BodySchema.parse(options);

		if (options.waitUntilFinish) {
			await this.api.post(Routes.Chats.SendPresence, { body });
		} else {
			this.api.post(Routes.Chats.SendPresence, { body });
		}
	}
}
