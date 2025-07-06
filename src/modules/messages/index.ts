import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import type * as Audio from "./schemas/audio";
import type * as Contact from "./schemas/contact";
import type * as Document from "./schemas/document";
import type * as Image from "./schemas/image";
import type * as List from "./schemas/list";
import type * as Location from "./schemas/location";
import type * as Reaction from "./schemas/reaction";
import type * as Status from "./schemas/status";
import type * as Sticker from "./schemas/sticker";
import type * as Template from "./schemas/template";
import type * as Text from "./schemas/text";
import type * as Video from "./schemas/video";
import type * as Voice from "./schemas/voice";

export class MessagesModule {
	constructor(private readonly api: ApiService) {}

	/**
	 * Sends a text message
	 * @param options - Text message options
	 */
	async sendText(
		options: Text.TextMessageOptions,
	): Promise<Text.TextMessageResponse> {
		const response = await this.api.post(Routes.Message.SendText, { body: options });

		return response as Text.TextMessageResponse;
	}

	/**
	 * Sends an image
	 * @param options - Image message options
	 */
	async sendImage(
		options: Image.ImageMessageOptions,
	): Promise<Image.ImageMessageResponse> {
		const response = await this.api.post(Routes.Message.SendMedia, { body: options });

		return response as Image.ImageMessageResponse;
	}

	/**
	 * Sends a video
	 * @param options - Video message options
	 */
	async sendVideo(
		options: Video.VideoMessageOptions,
	): Promise<Video.VideoMessageResponse> {
		const response = await this.api.post(Routes.Message.SendMedia, { body: options });

		return response as Video.VideoMessageResponse;
	}

	/**
	 * Sends a document
	 * @param options - Document message options
	 */
	async sendDocument(
		options: Document.DocumentMessageOptions,
	): Promise<Document.DocumentMessageResponse> {
		const response = await this.api.post(Routes.Message.SendMedia, { body: options });

		return response as Document.DocumentMessageResponse;
	}

	/**
	 * Sends an audio
	 * @param options - Audio message options
	 */
	async sendAudio(
		options: Audio.AudioMessageOptions,
	): Promise<Audio.AudioMessageResponse> {
		const response = await this.api.post(Routes.Message.SendMedia, { body: options });

		return response as Audio.AudioMessageResponse;
	}

	/**
	 * Sends a voice message
	 * @param options - Voice message options
	 */
	async sendVoice(
		options: Voice.VoiceMessageOptions,
	): Promise<Voice.VoiceMessageResponse> {
		const response = await this.api.post(Routes.Message.SendVoice, { body: options });

		return response as Voice.VoiceMessageResponse;
	}

	/**
	 * Sends a sticker
	 * @param options - Sticker message options
	 */
	async sendSticker(
		options: Sticker.StickerMessageOptions,
	): Promise<Sticker.StickerMessageResponse> {
		const response = await this.api.post(Routes.Message.SendSticker, { body: options });

		return response as Sticker.StickerMessageResponse;
	}

	/**
	 * Sends a location
	 * @param options - Location message options
	 */
	async sendLocation(
		options: Location.LocationMessageOptions,
	): Promise<Location.LocationMessageResponse> {
		const response = await this.api.post(Routes.Message.SendLocation, { body: options });

		return response as Location.LocationMessageResponse;
	}

	/**
	 * Sends a contact
	 * @param options - Contact message options
	 */
	async sendContact(
		options: Contact.ContactMessageOptions,
	): Promise<Contact.ContactMessageResponse> {
		const response = await this.api.post(Routes.Message.SendContact, { body: options });

		return response as Contact.ContactMessageResponse;
	}

	/**
	 * Sends a reaction
	 * @param options - Reaction message options
	 */
	async sendReaction(
		options: Reaction.ReactionMessageOptions,
	): Promise<Reaction.ReactionMessageResponse> {
		const response = await this.api.post(Routes.Message.SendReaction, {
			body: options,
		});

		return response as Reaction.ReactionMessageResponse;
	}

	/**
	 * Sends a template
	 * @param options - Template message options
	 */
	async sendTemplate(
		options: Template.TemplateMessageOptions,
	): Promise<Template.TemplateMessageResponse> {
		const response = await this.api.post(Routes.Message.SendTemplate, {
			body: options,
		});

		return response as Template.TemplateMessageResponse;
	}

	/**
	 * Sends a status
	 * @param options - Status message options
	 */
	async sendStatus(
		options: Status.StatusMessageOptions,
	): Promise<Status.StatusMessageResponse> {
		const response = await this.api.post(Routes.Message.SendStatus, {
			body: options,
		});

		return response as Status.StatusMessageResponse;
	}

	/**
	 * Sends a list
	 * @param options - List message options
	 */
	async sendList(
		options: List.ListMessageOptions,
	): Promise<List.ListMessageResponse> {
		const response = await this.api.post(Routes.Message.SendList, {
			body: options,
		});

		return response as List.ListMessageResponse;
	}
}
