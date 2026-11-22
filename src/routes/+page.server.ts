import { ReArcServer } from '#lib/server/rearc/index.ts';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const users = (await ReArcServer.GetUsers()).filter((user) => user?.profile?.dispatchClients > 0);

	return { onlineCount: users.length };
}) satisfies PageServerLoad;
