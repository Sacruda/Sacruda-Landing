import type { ServerInit } from '@sveltejs/kit/hooks';
import { ReArcServer } from './lib/server/rearc';
import { PocketBaseClient } from './lib/server/pocketbase';

export const init: ServerInit = async () => {
	await ReArcServer.Connect();
	await ReArcServer.Authenticate();
    await PocketBaseClient.Authenticate();
};
