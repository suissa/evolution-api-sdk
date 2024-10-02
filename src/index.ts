import { ApiService } from "./api/service";
import { type ClientOptions, clientOptionsSchema } from "./schemas/client";

export class EvolutionClient {
	public readonly api: ApiService;

	constructor(public readonly options: ClientOptions) {
		clientOptionsSchema.parse(options);
		this.api = new ApiService(options);
	}
}
