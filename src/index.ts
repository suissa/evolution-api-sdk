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

export { EvolutionApiError } from "./api/error";
export { ChatId, GroudJid, Jid, MessageId } from "./types/tags";
export { phoneNumberFromJid } from "./utils/phone-numer-from-jid";

export type * from "./modules/chats/schemas";
export type * from "./modules/messages/schemas";
export type { ClientOptions };
