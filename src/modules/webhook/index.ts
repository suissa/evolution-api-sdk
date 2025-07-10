import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";
import type { MethodOptions } from "@/types/api";

import type * as Find from "./schemas/find";
import type * as Set from "./schemas/set";

export class WebhookModule {
  constructor(private readonly api: ApiService) {}

  async set(
    options: Set.SetRequest,
    methodOptions?: MethodOptions
  ): Promise<Set.SetResponse> {
    const response = await this.api.post(Routes.Webhook.Set, {
      body: options,
      ...methodOptions,
    });

    return response as Set.SetResponse;
  }

  async find(methodOptions?: MethodOptions): Promise<Find.FindResponse> {
    const response = await this.api.get(Routes.Webhook.Find, methodOptions);

    return response as Find.FindResponse;
  }
}
