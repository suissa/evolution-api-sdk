import { ApiService } from "./api/service";
import { type ClientOptions, ClientOptionsSchema } from "./schemas/client";

export class EvolutionClient {
	public readonly api: ApiService;

	constructor(public readonly options: ClientOptions) {
		ClientOptionsSchema.parse(options);
		this.api = new ApiService(options);
	}
}
