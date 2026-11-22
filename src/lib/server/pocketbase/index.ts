import pocketbase from 'pocketbase';
import { Configuration } from '../config';
import { Loggable } from '../logs';

export const Pocketbase = new pocketbase(Configuration.pocketbase.url);

export class PocketBaseClient extends Loggable('PocketBaseClient') {
	public static async Authenticate() {
		this.Log('Logging in to Pocketbase');

		Pocketbase.autoCancellation(false);

		try {
			if (Pocketbase.authStore.isValid) {
				await Pocketbase.collection(Configuration.pocketbase.authDatabase).authRefresh();
			} else {
				throw '';
			}
		} catch (_) {
			Pocketbase.authStore.clear();
			await Pocketbase.collection(Configuration.pocketbase.authDatabase).authWithPassword(
				Configuration.pocketbase.username,
				Configuration.pocketbase.password
			);

			if (!Pocketbase.authStore.isValid) {
				this.Log('Failed to log in to Pocketbase');
				process.exit(1);
			}
		}
	}
}
