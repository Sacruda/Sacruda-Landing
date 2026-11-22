export interface PublicUserInfo {
	username: string;
	displayName?: string;
	profilePicture: string;
	admin: boolean;
	dispatchClients: number;
}

export interface UserInfo {
	username: string;
	admin: boolean;
	adminScopes: string[];
	approved: boolean;
	_id: string;
	email: string;
	updatedAt: string;
	createdAt: string;
	hasTotp: boolean;
	isSystem: boolean;
	restricted: boolean;
	storageSize: number;
}

export type ExpandedUserInfo = UserInfo & { profile: PublicUserInfo };
