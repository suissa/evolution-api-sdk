import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as Find from "./schemas/find";
import * as Set from "./schemas/set";

export class SettingsModule {
	constructor(private readonly api: ApiService) {}

	async set(options: Set.SetOptions): Promise<Set.SetResponse> {
		const body = Set.SetBodySchema.parse(options);
		const response = await this.api.post(Routes.Settings.Set, {
			body,
		});

		return Set.SetResponseSchema.parse(response);
	}

	async find(): Promise<Find.FindResponse> {
		const response = await this.api.get(Routes.Settings.Find);

		return Find.FindResponseSchema.parse(response);
	}
} 