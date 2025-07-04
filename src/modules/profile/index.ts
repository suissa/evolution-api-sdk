import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import * as FetchBusinessProfile from "./schemas/fetch-business-profile";
import * as FetchProfile from "./schemas/fetch-profile";
import * as FetchPrivacySettings from "./schemas/fetch-privacy-settings";
import * as RemovePicture from "./schemas/remove-picture";
import * as UpdateName from "./schemas/update-name";
import * as UpdatePicture from "./schemas/update-picture";
import * as UpdatePrivacySettings from "./schemas/update-privacy-settings";
import * as UpdateStatus from "./schemas/update-status";

export class ProfileModule {
	constructor(private readonly api: ApiService) {}

	async fetchBusinessProfile(
		options: FetchBusinessProfile.FetchBusinessProfileOptions,
	): Promise<FetchBusinessProfile.FetchBusinessProfileResponse> {
		const body = FetchBusinessProfile.FetchBusinessProfileBodySchema.parse(options);
		const response = await this.api.post(Routes.Profile.FetchBusinessProfile, {
			body,
		});

		return FetchBusinessProfile.FetchBusinessProfileResponseSchema.parse(response);
	}

	async fetchProfile(
		options: FetchProfile.FetchProfileOptions,
	): Promise<FetchProfile.FetchProfileResponse> {
		const body = FetchProfile.FetchProfileBodySchema.parse(options);
		const response = await this.api.post(Routes.Profile.FetchProfile, {
			body,
		});

		return FetchProfile.FetchProfileResponseSchema.parse(response);
	}

	async updateName(
		options: UpdateName.UpdateNameOptions,
	): Promise<UpdateName.UpdateNameResponse> {
		const body = UpdateName.UpdateNameBodySchema.parse(options);
		const response = await this.api.post(Routes.Profile.UpdateName, {
			body,
		});

		return UpdateName.UpdateNameResponseSchema.parse(response);
	}

	async updateStatus(
		options: UpdateStatus.UpdateStatusOptions,
	): Promise<UpdateStatus.UpdateStatusResponse> {
		const body = UpdateStatus.UpdateStatusBodySchema.parse(options);
		const response = await this.api.post(Routes.Profile.UpdateStatus, {
			body,
		});

		return UpdateStatus.UpdateStatusResponseSchema.parse(response);
	}

	async updatePicture(
		options: UpdatePicture.UpdatePictureOptions,
	): Promise<UpdatePicture.UpdatePictureResponse> {
		const body = UpdatePicture.UpdatePictureBodySchema.parse(options);
		const response = await this.api.put(Routes.Profile.UpdatePicture, {
			body,
		});

		return UpdatePicture.UpdatePictureResponseSchema.parse(response);
	}

	async removePicture(): Promise<RemovePicture.RemovePictureResponse> {
		const response = await this.api.delete(Routes.Profile.RemovePicture);

		return RemovePicture.RemovePictureResponseSchema.parse(response);
	}

	async fetchPrivacySettings(): Promise<FetchPrivacySettings.FetchPrivacySettingsResponse> {
		const response = await this.api.get(Routes.Profile.FetchPrivacySettings);

		return FetchPrivacySettings.FetchPrivacySettingsResponseSchema.parse(response);
	}

	async updatePrivacySettings(
		options: UpdatePrivacySettings.UpdatePrivacySettingsOptions,
	): Promise<UpdatePrivacySettings.UpdatePrivacySettingsResponse> {
		const body = UpdatePrivacySettings.UpdatePrivacySettingsBodySchema.parse(options);
		const response = await this.api.put(Routes.Profile.UpdatePrivacySettings, {
			body,
		});

		return UpdatePrivacySettings.UpdatePrivacySettingsResponseSchema.parse(response);
	}
} 