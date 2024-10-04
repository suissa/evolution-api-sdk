import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as Check from "./schemas/check";
import * as FindAll from "./schemas/find-all";
import * as Presence from "./schemas/presence";

export class ChatsModule {
	constructor(private readonly api: ApiService) {}

	async check(
		number: Extract<Check.CheckOptions, string>,
	): Promise<Check.CheckResponse[number]>;
	async check(
		numbers: Extract<Check.CheckOptions, string[]>,
	): Promise<Check.CheckResponse>;
	async check(
		numbers: Check.CheckOptions,
	): Promise<Check.CheckResponse | Check.CheckResponse[number]> {
		const body = Check.CheckBodySchema.parse(numbers);
		const response = await this.api.post(Routes.Chats.Check, { body });
		const data = Check.CheckResponseSchema.parse(response);

		return Array.isArray(numbers) ? data : data[0];
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
