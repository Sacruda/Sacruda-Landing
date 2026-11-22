import { Configuration } from '#lib/server/config.ts';
import { ReArcServer } from '#lib/server/rearc/index.ts';
import { AdminScopes } from '#lib/server/scopes.ts';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const admins = (await ReArcServer.GetUsers())
		.filter(
			(user) =>
				!user.isSystem &&
				user.admin &&
				user.approved &&
				(user.adminScopes.includes(AdminScopes.adminGod) ||
					user.adminScopes.includes(AdminScopes.adminShowOnSite))
		)
		.map((user) => ({
			...user.profile,
			profilePicture: `${Configuration.reArc.serverUrl}/user/pfp/${user._id}`
		}));

	return { admins };
}) satisfies PageServerLoad;
