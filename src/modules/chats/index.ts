import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";
import { phoneNumberFromJid } from "@/utils/phone-numer-from-jid";

import type * as Archive from "./schemas/archive";
import type * as Check from "./schemas/check";
import type * as DeleteMessage from "./schemas/delete-message";
import type * as FetchProfilePicture from "./schemas/fetch-profile-picture";
import type * as FindAll from "./schemas/find-all";
import type * as FindContacts from "./schemas/find-contacts";
import type * as FindMessages from "./schemas/find-messages";
import type * as FindStatusMessage from "./schemas/find-status-message";
import type * as MarkAsRead from "./schemas/mark-as-read";
import type * as Presence from "./schemas/presence";
import type * as UpdateMessage from "./schemas/update-message";

export class ChatsModule {
	constructor(private readonly api: ApiService) {}

	/**
	 * Checks if phone numbers are registered on WhatsApp
	 * @param numbers - Array of phone numbers to check
	 */
	async check(numbers: string[]): Promise<Check.CheckResponse> {
		const response = await this.api.post(Routes.Chats.Check, {
			body: numbers.flat(),
		});

		return response as Check.CheckResponse;
	}

	/**
	 * Gets all chats
	 */
	async findAll(): Promise<FindAll.FindAllChatsResponse> {
		const response = await this.api.get(Routes.Chats.FindAll);

		return response as FindAll.FindAllChatsResponse;
	}

	/**
	 * Updates presence status
	 * @param options - Presence options
	 */
	async updatePresence(options: Presence.PresenceRequest): Promise<void> {
		await this.api.post(Routes.Chats.SendPresence, {
			body: options,
		});
	}

	/**
	 * Marks messages as read
	 * @param options - Mark as read options
	 */
	async markAsRead(
		options: MarkAsRead.MarkAsReadRequest,
	): Promise<MarkAsRead.MarkAsReadResponse> {
		const response = await this.api.post(Routes.Chats.MarkAsRead, {
			body: options,
		});

		return response as MarkAsRead.MarkAsReadResponse;
	}

	/**
	 * Archives a chat
	 * @param options - Archive options
	 */
	async archive(options: Archive.ArchiveRequest): Promise<Archive.ArchiveResponse> {
		const response = await this.api.post(Routes.Chats.Archive, {
			body: options,
		});

		return response as Archive.ArchiveResponse;
	}

	/**
	 * Deletes a message
	 * @param options - Delete message options
	 */
	async deleteMessage(
		options: DeleteMessage.DeleteMessageRequest,
	): Promise<DeleteMessage.DeleteMessageResponse> {
		const response = await this.api.delete(Routes.Chats.DeleteMessage, {
			body: options,
		});

		return response as DeleteMessage.DeleteMessageResponse;
	}

	/**
	 * Fetches profile picture
	 * @param options - Fetch profile picture options
	 */
	async fetchProfilePicture(
		options: FetchProfilePicture.FetchProfilePictureRequest,
	): Promise<FetchProfilePicture.FetchProfilePictureResponse> {
		const response = await this.api.post(Routes.Chats.FetchProfilePicture, {
			body: options,
		});

		return response as FetchProfilePicture.FetchProfilePictureResponse;
	}

	/**
	 * Finds contacts
	 * @param options - Find contacts options
	 */
	async findContacts(
		options: FindContacts.FindContactsRequest,
	): Promise<FindContacts.FindContactsResponse> {
		const response = await this.api.post(Routes.Chats.FindContacts, {
			body: options,
		});

		return response as FindContacts.FindContactsResponse;
	}

	/**
	 * Finds messages
	 * @param options - Find messages options
	 */
	async findMessages(
		options: FindMessages.FindMessagesRequest,
	): Promise<FindMessages.FindMessagesResponse> {
		const response = await this.api.post(Routes.Chats.FindMessages, {
			body: options,
		});

		return response as FindMessages.FindMessagesResponse;
	}

	/**
	 * Finds status messages
	 * @param options - Find status message options
	 */
	async findStatusMessage(
		options: FindStatusMessage.FindStatusMessageRequest,
	): Promise<FindStatusMessage.FindStatusMessageResponse> {
		const response = await this.api.post(Routes.Chats.FindStatusMessage, {
			body: options,
		});

		return response as FindStatusMessage.FindStatusMessageResponse;
	}

	/**
	 * Updates a message
	 * @param options - Update message options
	 */
	async updateMessage(
		options: UpdateMessage.UpdateMessageRequest,
	): Promise<UpdateMessage.UpdateMessageResponse> {
		const response = await this.api.put(Routes.Chats.UpdateMessage, {
			body: options,
		});

		return response as UpdateMessage.UpdateMessageResponse;
	}
}
