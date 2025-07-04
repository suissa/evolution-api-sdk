import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as Archive from "./schemas/archive";
import * as Check from "./schemas/check";
import * as DeleteMessage from "./schemas/delete-message";
import * as FetchProfilePicture from "./schemas/fetch-profile-picture";
import * as FindAll from "./schemas/find-all";
import * as FindContacts from "./schemas/find-contacts";
import * as FindMessages from "./schemas/find-messages";
import * as FindStatusMessage from "./schemas/find-status-message";
import * as MarkAsRead from "./schemas/mark-as-read";
import * as Presence from "./schemas/presence";
import * as UpdateMessage from "./schemas/update-message";

export class ChatsModule {
	constructor(private readonly api: ApiService) {}

	/**
	 * Checks if a number has WhatsApp
	 * @param numbers - Number(s) (with country code) to check
	 */
	async check(
		...numbers: Check.CheckOptions | Check.CheckOptions[]
	): Promise<Check.CheckResponse> {
		const body = Check.CheckBodySchema.parse(numbers.flat());
		const response = await this.api.post(Routes.Chats.Check, { body });

		return Check.CheckResponseSchema.parse(response);
	}

	/**
	 * Gets all chats
	 */
	async findAll(): Promise<FindAll.FindAllChatsResponse> {
		const response = await this.api.post(Routes.Chats.FindAll);

		return FindAll.ResponseSchema.parse(response);
	}

	/**
	 * Sends a presence to a certain chat
	 * @param options - Presence options
	 */
	async sendPresence(options: Presence.PresenceOptions) {
		const body = Presence.BodySchema.parse(options);

		if (options.waitUntilFinish) {
			await this.api.post(Routes.Chats.SendPresence, { body });
		} else {
			this.api.post(Routes.Chats.SendPresence, { body });
		}
	}

	async markAsRead(
		options: MarkAsRead.MarkAsReadOptions,
	): Promise<MarkAsRead.MarkAsReadResponse> {
		const body = MarkAsRead.MarkAsReadBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.MarkAsRead, {
			body,
		});

		return MarkAsRead.MarkAsReadResponseSchema.parse(response);
	}

	async archive(
		options: Archive.ArchiveOptions,
	): Promise<Archive.ArchiveResponse> {
		const body = Archive.ArchiveBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.Archive, {
			body,
		});

		return Archive.ArchiveResponseSchema.parse(response);
	}

	async deleteMessage(
		options: DeleteMessage.DeleteMessageOptions,
	): Promise<DeleteMessage.DeleteMessageResponse> {
		const body = DeleteMessage.DeleteMessageBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.DeleteMessage, {
			body,
		});

		return DeleteMessage.DeleteMessageResponseSchema.parse(response);
	}

	async fetchProfilePicture(
		options: FetchProfilePicture.FetchProfilePictureOptions,
	): Promise<FetchProfilePicture.FetchProfilePictureResponse> {
		const body = FetchProfilePicture.FetchProfilePictureBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.FetchProfilePicture, {
			body,
		});

		return FetchProfilePicture.FetchProfilePictureResponseSchema.parse(response);
	}

	async findContact(
		options: FindContacts.FindContactsOptions,
	): Promise<FindContacts.FindContactsResponse> {
		const body = FindContacts.FindContactsBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.FindContacts, {
			body,
		});

		return FindContacts.FindContactsResponseSchema.parse(response);
	}

	async findMessages(
		options: FindMessages.FindMessagesOptions,
	): Promise<FindMessages.FindMessagesResponse> {
		const body = FindMessages.FindMessagesBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.FindMessages, {
			body,
		});

		return FindMessages.FindMessagesResponseSchema.parse(response);
	}


	async findStatusMessage(
		options: FindStatusMessage.FindStatusMessageOptions,
	): Promise<FindStatusMessage.FindStatusMessageResponse> {
		const body = FindStatusMessage.FindStatusMessageBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.FindStatusMessage, {
			body,
		});

		return FindStatusMessage.FindStatusMessageResponseSchema.parse(response);
	}

	async updateMessage(
		options: UpdateMessage.UpdateMessageOptions,
	): Promise<UpdateMessage.UpdateMessageResponse> {
		const body = UpdateMessage.UpdateMessageBodySchema.parse(options);
		const response = await this.api.post(Routes.Chats.UpdateMessage, {
			body,
		});

		return UpdateMessage.UpdateMessageResponseSchema.parse(response);
	}
}
