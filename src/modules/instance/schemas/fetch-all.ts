// Pure TypeScript interfaces for better IDE support and performance

export interface InstanceDetails {
  instanceName: string;
  owner: string;
  profileName: string;
  profileStatus: string;
  profilePicUrl: string;
  status: string;
}

export interface InstanceItem {
  instance: InstanceDetails;
}

export type FetchAllResponse = InstanceItem[]; 