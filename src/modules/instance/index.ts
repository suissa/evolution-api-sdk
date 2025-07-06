import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import type * as Connect from "./schemas/connect";
import type * as ConnectionState from "./schemas/connection-state";
import type * as Create from "./schemas/create";
import type * as Delete from "./schemas/delete";
import type * as FetchAll from "./schemas/fetch-all";
import type * as Logout from "./schemas/logout";
import type * as Restart from "./schemas/restart";
import type * as SetPresence from "./schemas/set-presence";

export class InstanceModule {
	constructor(private readonly api: ApiService) {}

	async create(
		options: Create.CreateInstanceRequest,
	): Promise<Create.CreateInstanceResponse> {
		const response = await this.api.post(Routes.Instance.Create, {
			body: options,
			isInstanceUrl: false,
		});
		return response as Create.CreateInstanceResponse;
	}

	async connect(
		options: Connect.ConnectRequest,
	): Promise<Connect.ConnectResponse> {
		const response = await this.api.get(Routes.Instance.Connect, {
			params: options,
			isInstanceUrl: false,
		});
		return response as Connect.ConnectResponse;
	}

	async connectionState(
		options: ConnectionState.ConnectionStateRequest,
	): Promise<ConnectionState.ConnectionStateResponse> {
		const response = await this.api.get(Routes.Instance.ConnectionState, {
			params: options,
			isInstanceUrl: false,
		});
		return response as ConnectionState.ConnectionStateResponse;
	}
    
    async logout(
        options: Logout.LogoutRequest,
    ): Promise<Logout.LogoutResponse> {
        const response = await this.api.delete(Routes.Instance.Logout, {
            params: options,
            isInstanceUrl: false,
        });
        return response as Logout.LogoutResponse;
    }

    async delete(
        options: Delete.DeleteRequest,
    ): Promise<Delete.DeleteResponse> {
        const response = await this.api.delete(Routes.Instance.Delete, {
            params: options,
            isInstanceUrl: false,
        });
        return response as Delete.DeleteResponse;
    }

    async restart(
        options: Restart.RestartRequest,
    ): Promise<Restart.RestartResponse> {
        const response = await this.api.put(Routes.Instance.Restart, {
            params: options,
            isInstanceUrl: false,
        });
        return response as Restart.RestartResponse;
    }

	async fetchAll(): Promise<FetchAll.FetchAllResponse> {
		const response = await this.api.get(Routes.Instance.FetchAll, {
			isInstanceUrl: false,
		});
		return response as FetchAll.FetchAllResponse;
	}

	async setPresence(
		options: SetPresence.SetPresenceRequest,
	): Promise<SetPresence.SetPresenceResponse> {
		const response = await this.api.post(Routes.Instance.SetPresence, {
			body: options,
		});
		return response as SetPresence.SetPresenceResponse;
	}
} 