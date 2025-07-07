// Pure TypeScript interfaces for better IDE support and performance

import { Jid } from "@/types/tags";

export interface IntegrationDetails {
	integration?: string;
	webhook_wa_business?: string;
	token?: string;
}

export interface InstanceDetails {
	instanceName: string;
	instanceId: string;
	owner?: Jid;
	profileName?: string;
	profilePictureUrl: string | null;
	profileStatus?: string;
	status: "open" | "close" | "connecting";
	serverUrl: string;
	apikey: string;
	integration: IntegrationDetails;
}

export interface InstanceItem {
	instance: InstanceDetails;
}

export type FetchAllResponse = InstanceItem[]; 

export interface FetchAllRequest {
	instanceName: string;
}