import { get, writable } from 'svelte/store';
import type { ReadableStore } from '../types/writable';

export function Store<T>(initial?: T): ReadableStore<T> {
	const store = writable<T>(initial);
	const obj = { ...store, get: () => get(store) };
	const fn = () => obj.get();

	fn.get = obj.get;
	fn.set = obj.set;
	fn.update = obj.update;
	fn.subscribe = obj.subscribe;
	fn.__STORE__ = true;

	return fn;
}
