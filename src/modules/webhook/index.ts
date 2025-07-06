import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import type * as Find from "./schemas/find";
import type * as Set from "./schemas/set";

export class WebhookModule {
	constructor(private readonly api: ApiService) {}

	async set(options: Set.SetRequest): Promise<Set.SetResponse> {
		const response = await this.api.post(Routes.Webhook.Set, {
			body: options,
		});

		return response as Set.SetResponse;
	}

	async find(): Promise<Find.FindResponse> {
		const response = await this.api.get(Routes.Webhook.Find);

		return response as Find.FindResponse;
	}
} 