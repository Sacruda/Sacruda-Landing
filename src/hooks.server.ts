import type { ServerInit } from '@sveltejs/kit/hooks';
import { ReArcServer } from './lib/server/rearc';
import { PocketBaseClient } from './lib/server/pocketbase';
import { Psa } from './lib/client/psa';

export const init: ServerInit = async () => {
	await ReArcServer.Connect();
	await ReArcServer.Authenticate();
	await PocketBaseClient.Authenticate();
	await Psa.Initialize();
};
