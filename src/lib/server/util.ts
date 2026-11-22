import type { StoreItem } from '../../types/package';
import { Configuration } from './config';

export function sortByKey<T extends any[]>(array: T, key: keyof T[number], reverse = false) {
	return array.sort(function (a, b) {
		const x = a[key];
		const y = b[key];

		const comparison = x < y ? -1 : x > y ? 1 : 0;
		return reverse ? -comparison : comparison;
	}) as T;
}

export function StoreItemImage(item: StoreItem) {
	return item.pkg.store?.image
		? `${Configuration.reArc.serverUrl}/store/assets/${item._id}/icon`
		: '';
}

export function StoreItemBanner(item: StoreItem) {
	return item.pkg.store?.banner
		? `${Configuration.reArc.serverUrl}/store/assets/${item._id}/banner`
		: '';
}
