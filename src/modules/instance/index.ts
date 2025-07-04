import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as Connect from "./schemas/connect";
import * as ConnectionState from "./schemas/connection-state";
import * as Create from "./schemas/create";
import * as Delete from "./schemas/delete";
import * as FetchAll from "./schemas/fetch-all";
import * as Logout from "./schemas/logout";
import * as Restart from "./schemas/restart";
import * as SetPresence from "./schemas/set-presence";

export class InstanceModule {
	constructor(private readonly api: ApiService) {}

	async create(
		options: Create.CreateOptions,
	): Promise<Create.CreateResponse> {
		const body = Create.CreateBodySchema.parse(options);
		const response = await this.api.post(Routes.Instance.Create, {
			body,
			isInstanceUrl: false,
		});
		return Create.CreateResponseSchema.parse(response);
	}

	async connect(
		options: Connect.ConnectOptions,
	): Promise<Connect.ConnectResponse> {
		const params = Connect.ConnectParamsSchema.parse(options);
		const response = await this.api.get(Routes.Instance.Connect, {
			params,
			isInstanceUrl: false,
		});
		return Connect.ConnectResponseSchema.parse(response);
	}

	async connectionState(
		options: ConnectionState.ConnectionStateOptions,
	): Promise<ConnectionState.ConnectionStateResponse> {
		const params = ConnectionState.ConnectionStateParamsSchema.parse(options);
		const response = await this.api.get(Routes.Instance.ConnectionState, {
			params,
			isInstanceUrl: false,
		});
		return ConnectionState.ConnectionStateResponseSchema.parse(response);
	}
    
    async logout(
        options: Logout.LogoutOptions,
    ): Promise<Logout.LogoutResponse> {
        const params = Logout.LogoutParamsSchema.parse(options);
        const response = await this.api.delete(Routes.Instance.Logout, {
            params,
            isInstanceUrl: false,
        });
        return Logout.LogoutResponseSchema.parse(response);
    }

    async delete(
        options: Delete.DeleteOptions,
    ): Promise<Delete.DeleteResponse> {
        const params = Delete.DeleteParamsSchema.parse(options);
        const response = await this.api.delete(Routes.Instance.Delete, {
            params,
            isInstanceUrl: false,
        });
        return Delete.DeleteResponseSchema.parse(response);
    }

    async restart(
        options: Restart.RestartOptions,
    ): Promise<Restart.RestartResponse> {
        const params = Restart.RestartParamsSchema.parse(options);
        const response = await this.api.put(Routes.Instance.Restart, {
            params,
            isInstanceUrl: false,
        });
        return Restart.RestartResponseSchema.parse(response);
    }

	async fetchAll(): Promise<FetchAll.FetchAllResponse> {
		const response = await this.api.get(Routes.Instance.FetchAll, {
			isInstanceUrl: false,
		});
		return FetchAll.FetchAllResponseSchema.parse(response);
	}

	async setPresence(
		options: SetPresence.SetPresenceOptions,
	): Promise<SetPresence.SetPresenceResponse> {
		const body = SetPresence.SetPresenceBodySchema.parse(options);
		const response = await this.api.post(Routes.Instance.SetPresence, {
			body,
		});
		return SetPresence.SetPresenceResponseSchema.parse(response);
	}
} 