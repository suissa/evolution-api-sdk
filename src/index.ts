import { ApiService } from "./api/service";
import { MessagesModule } from "./modules/messages";
import { type ClientOptions, ClientOptionsSchema } from "./schemas/client";

export class EvolutionClient {
	public readonly api: ApiService;

	public readonly messages: MessagesModule;

	constructor(public readonly options: ClientOptions) {
		ClientOptionsSchema.parse(options);

		this.api = new ApiService(options);
		this.messages = new MessagesModule(this.api);
	}
}
