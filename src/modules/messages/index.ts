import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as Audio from "./schemas/audio";
import * as Contact from "./schemas/contact";
import * as Document from "./schemas/document";
import * as Image from "./schemas/image";
import * as List from "./schemas/list";
import * as Location from "./schemas/location";
import * as Reaction from "./schemas/reaction";
import * as Status from "./schemas/status";
import * as Sticker from "./schemas/sticker";
import * as Template from "./schemas/template";
import * as Text from "./schemas/text";
import * as Video from "./schemas/video";
import * as Voice from "./schemas/voice";

export class MessagesModule {
	constructor(private readonly api: ApiService) {}

	/**
	 * Sends a text message
	 * @param options - Text message options
	 */
	async sendText(
		options: Text.TextMessageOptions,
	): Promise<Text.TextMessageResponse> {
		const body = Text.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendText, { body });

		return Text.ResponseSchema.parse(response);
	}

	/**
	 * Sends an image
	 * @param options - Image message options
	 */
	async sendImage(
		options: Image.ImageMessageOptions,
	): Promise<Image.ImageMessageResponse> {
		const body = Image.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendMedia, { body });

		return Image.ResponseSchema.parse(response);
	}

	/**
	 * Sends a video
	 * @param options - Video message options
	 */
	async sendVideo(
		options: Video.VideoMessageOptions,
	): Promise<Video.VideoMessageResponse> {
		const body = Video.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendMedia, { body });

		return Video.ResponseSchema.parse(response);
	}

	/**
	 * Sends a document
	 * @param options - Document message options
	 */
	async sendDocument(
		options: Document.DocumentMessageOptions,
	): Promise<Document.DocumentMessageResponse> {
		const body = Document.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendMedia, { body });

		return Document.ResponseSchema.parse(response);
	}

	/**
	 * Sends an audio
	 * @param options - Audio message options
	 */
	async sendAudio(
		options: Audio.AudioMessageOptions,
	): Promise<Audio.AudioMessageResponse> {
		const body = Audio.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendMedia, { body });

		return Audio.ResponseSchema.parse(response);
	}

	/**
	 * Sends a voice message
	 * @param options - Voice message options
	 */
	async sendVoice(
		options: Voice.VoiceMessageOptions,
	): Promise<Voice.VoiceMessageResponse> {
		const body = Voice.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendVoice, { body });

		return Voice.ResponseSchema.parse(response);
	}

	/**
	 * Sends a sticker
	 * @param options - Sticker message options
	 */
	async sendSticker(
		options: Sticker.StickerMessageOptions,
	): Promise<Sticker.StickerMessageResponse> {
		const body = Sticker.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendSticker, { body });

		return Sticker.ResponseSchema.parse(response);
	}

	/**
	 * Sends a location
	 * @param options - Location message options
	 */
	async sendLocation(
		options: Location.LocationMessageOptions,
	): Promise<Location.LocationMessageResponse> {
		const body = Location.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendLocation, { body });

		return Location.ResponseSchema.parse(response);
	}

	/**
	 * Sends a contact
	 * @param options - Contact message options
	 */
	async sendContact(
		options: Contact.ContactMessageOptions,
	): Promise<Contact.ContactMessageResponse> {
		const body = Contact.BodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendContact, { body });

		return Contact.ResponseSchema.parse(response);
	}

	/**
	 * Sends a reaction
	 * @param options - Reaction message options
	 */
	async sendReaction(
		options: Reaction.ReactionMessageOptions,
	): Promise<Reaction.ReactionMessageResponse> {
		const body = Reaction.ReactionBodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendReaction, {
			body,
		});

		return Reaction.ReactionResponseSchema.parse(response);
	}

	/**
	 * Sends a template
	 * @param options - Template message options
	 */
	async sendTemplate(
		options: Template.TemplateMessageOptions,
	): Promise<Template.TemplateMessageResponse> {
		const body = Template.TemplateBodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendTemplate, {
			body,
		});

		return Template.TemplateResponseSchema.parse(response);
	}

	/**
	 * Sends a status
	 * @param options - Status message options
	 */
	async sendStatus(
		options: Status.StatusMessageOptions,
	): Promise<Status.StatusMessageResponse> {
		const body = Status.StatusBodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendStatus, {
			body,
		});

		return Status.StatusResponseSchema.parse(response);
	}

	/**
	 * Sends a list
	 * @param options - List message options
	 */
	async sendList(
		options: List.ListMessageOptions,
	): Promise<List.ListMessageResponse> {
		const body = List.ListBodySchema.parse(options);
		const response = await this.api.post(Routes.Message.SendList, {
			body,
		});

		return List.ListResponseSchema.parse(response);
	}
}
