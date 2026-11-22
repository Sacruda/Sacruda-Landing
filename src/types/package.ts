import type { PublicUserInfo } from './user';

export interface StoreItem {
	name: string;
	userId: string;
	user?: PublicUserInfo;
	pkg: ArcPackage;
	_id: string;
	official: boolean;
	installCount: number;
	lastUpdated: number;
	blocked: boolean;
	size: number;
	createdAt: string;
	updatedAt: string;
	deprecated: boolean;
	description: string;
	verifiedBy?: string;
	verifiedVer?: string;
	verifiedNote?: string;
	verificationAgent?: PublicUserInfo;
}

export interface ArcPackage {
	_id?: string;
	name: string;
	author: string;
	version: string;
	description: string;
	installLocation:
		| `U:/Applications/${string}` // type === "app"
		| `U:/System/Libraries/${string}`; // type === "library"
	appId: string;
	store?: {
		image?: string;
		screenshots?: string[];
		banner?: string;
		category?: string;
	};
	dependencies?: string[];
	type: 'app' | 'library';
}
