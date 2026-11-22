export interface TypedConfig {
	reArc: ReArcConfig;
	pocketbase: PocketBaseConfig;
	github: GitHubConfig;
}

export interface ReArcConfig {
	serverUrl: string;
	serverAuthCode: string | null;
	username: string;
	password: string;
}

export interface PocketBaseConfig {
	url: string;
	username: string;
	password: string;
	authDatabase: string;
}

export interface GitHubConfig {
	repoOwner: string;
	repoName: string;
}
