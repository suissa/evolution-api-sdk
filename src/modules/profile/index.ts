import { Routes } from "@/api/routes";
import type { ApiService } from "@/api/service";

import type * as FetchBusinessProfile from "./schemas/fetch-business-profile";
import type * as FetchPrivacySettings from "./schemas/fetch-privacy-settings";
import type * as FetchProfile from "./schemas/fetch-profile";
import type * as RemovePicture from "./schemas/remove-picture";
import type * as UpdateName from "./schemas/update-name";
import type * as UpdatePicture from "./schemas/update-picture";
import type * as UpdatePrivacySettings from "./schemas/update-privacy-settings";
import type * as UpdateStatus from "./schemas/update-status";

export class ProfileModule {
	constructor(private readonly api: ApiService) {}

	async fetchBusinessProfile(
		options: FetchBusinessProfile.FetchBusinessProfileRequest,
	): Promise<FetchBusinessProfile.FetchBusinessProfileResponse> {
		const response = await this.api.post(Routes.Profile.FetchBusinessProfile, {
			body: options,
		});

		return response as FetchBusinessProfile.FetchBusinessProfileResponse;
	}

	async fetchProfile(
		options: FetchProfile.FetchProfileRequest,
	): Promise<FetchProfile.FetchProfileResponse> {
		const response = await this.api.post(Routes.Profile.FetchProfile, {
			body: options,
		});

		return response as FetchProfile.FetchProfileResponse;
	}

	async updateName(
		options: UpdateName.UpdateNameRequest,
	): Promise<UpdateName.UpdateNameResponse> {
		const response = await this.api.post(Routes.Profile.UpdateName, {
			body: options,
		});

		return response as UpdateName.UpdateNameResponse;
	}

	async updateStatus(
		options: UpdateStatus.UpdateStatusRequest,
	): Promise<UpdateStatus.UpdateStatusResponse> {
		const response = await this.api.post(Routes.Profile.UpdateStatus, {
			body: options,
		});

		return response as UpdateStatus.UpdateStatusResponse;
	}

	async updatePicture(
		options: UpdatePicture.UpdatePictureRequest,
	): Promise<UpdatePicture.UpdatePictureResponse> {
		const response = await this.api.put(Routes.Profile.UpdatePicture, {
			body: options,
		});

		return response as UpdatePicture.UpdatePictureResponse;
	}

	async removePicture(): Promise<RemovePicture.RemovePictureResponse> {
		const response = await this.api.delete(Routes.Profile.RemovePicture);

		return response as RemovePicture.RemovePictureResponse;
	}

	async fetchPrivacySettings(): Promise<FetchPrivacySettings.FetchPrivacySettingsResponse> {
		const response = await this.api.get(Routes.Profile.FetchPrivacySettings);

		return response as FetchPrivacySettings.FetchPrivacySettingsResponse;
	}

	async updatePrivacySettings(
		options: UpdatePrivacySettings.UpdatePrivacySettingsRequest,
	): Promise<UpdatePrivacySettings.UpdatePrivacySettingsResponse> {
		const response = await this.api.put(Routes.Profile.UpdatePrivacySettings, {
			body: options,
		});

		return response as UpdatePrivacySettings.UpdatePrivacySettingsResponse;
	}
} 