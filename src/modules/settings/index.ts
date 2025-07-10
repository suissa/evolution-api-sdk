import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";
import type { MethodOptions } from "@/types/api";

import type * as Find from "./schemas/find";
import type * as Set from "./schemas/set";

export class SettingsModule {
  constructor(private readonly api: ApiService) {}

  async set(
    options: Set.SetRequest,
    methodOptions?: MethodOptions
  ): Promise<Set.SetResponse> {
    const response = await this.api.post(Routes.Settings.Set, {
      body: options,
      ...methodOptions,
    });

    return response as Set.SetResponse;
  }

  async find(methodOptions?: MethodOptions): Promise<Find.FindResponse> {
    const response = await this.api.get(Routes.Settings.Find, methodOptions);

    return response as Find.FindResponse;
  }
}
