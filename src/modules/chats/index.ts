import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as Check from "./schemas/check";
import * as Find from "./schemas/find";
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

	async find(): Promise<Find.FindChatsResponse> {
		const response = await this.api.post(Routes.Chats.Find);

		return Find.ResponseSchema.parse(response);
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
