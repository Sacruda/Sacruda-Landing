import axios, { toFormData, type AxiosInstance } from 'axios';
import type { StoreItem } from '../../../types/package';
import type { ExpandedUserInfo } from '../../../types/user';
import { Configuration } from '../config';
import { Loggable } from '../logs';
import { sortByKey } from '../util';

export class ReArcServer extends Loggable('ReArcServer') {
	private static token: string;
	private static client?: AxiosInstance;

	public static async Connect() {
		this.Log('Connecting to Sacruda');

		const client = axios.create({
			baseURL: Configuration.reArc.serverUrl,
			responseType: 'json'
		});

		try {
			const response = await client.get('/ping');
			if (response.status !== 200) throw '';
		} catch (e) {
			this.Log('Failed to ping Sacruda backend. Exiting.');
			process.exit(1);
		}

		this.client = client;
	}

	public static async Authenticate() {
		this.Log('Logging in to Sacruda');

		try {
			const formData = toFormData({
				identity: Configuration.reArc.username,
				password: Configuration.reArc.password,
				userAgent: 'SacrudaLanding/1.0.0 Sacruda/7'
			});

			const response = await this.client!.post('/login', formData);
			if (response.status !== 200) throw '';

			this.token = response.data.token;
			this.client!.defaults.headers.Authorization = `Bearer ${this.token}`;

			this.Log(`We got a token :D`);
		} catch (e) {
			this.Log(`Failed to log in to Sacruda. ${e ?? 'Unknown failure'}`);
			process.exit(1);
		}
	}

	public static async GetVerifiedStoreItems(): Promise<StoreItem[]> {
		this.Log(`Getting store items`);

		try {
			const response = await this.client!.get<StoreItem[]>(`/store/list`);
			return sortByKey(
				response.data.filter(
					(item) =>
						item.verifiedVer &&
						item.verifiedVer === item.pkg?.version &&
						item.pkg?.type !== 'library' &&
						!item.blocked &&
						!item.deprecated
				),
				'installCount',
				true
			);
		} catch (e) {
			this.Log(`Failed to get Sacruda store items: ${e}`);
			return [];
		}
	}

	public static async GetUsers(): Promise<ExpandedUserInfo[]> {
		this.Log(`Getting users`);

		try {
			const response = await this.client!.get<ExpandedUserInfo[]>(`/admin/users/list`);
			return response.data;
		} catch (e) {
			this.Log(`Failed to get Sacruda users: ${e}`);
			return [];
		}
	}
}
