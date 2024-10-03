import { ApiService } from "./api/service";
import { ChatsModule } from "./modules/chats";
import { MessagesModule } from "./modules/messages";
import { type ClientOptions, ClientOptionsSchema } from "./schemas/client";

export class EvolutionClient {
	public readonly api: ApiService;

	public readonly chats: ChatsModule;
	public readonly messages: MessagesModule;

	constructor(public readonly options: ClientOptions) {
		ClientOptionsSchema.parse(options);

		this.api = new ApiService(options);
		this.chats = new ChatsModule(this.api);
		this.messages = new MessagesModule(this.api);
	}
}
