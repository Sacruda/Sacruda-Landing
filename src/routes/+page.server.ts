import { ReleaseLogo } from '#lib/client/images.ts';
import { ReArcServer } from '#lib/server/rearc/index.ts';
import { StoreItemBanner, StoreItemImage } from '#lib/server/util.ts';
import type { StoreOverviewItem } from '../types/package';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const users = (await ReArcServer.GetUsers()).filter((user) => user?.profile?.dispatchClients > 0);
	const packages: StoreOverviewItem[] = (await ReArcServer.GetVerifiedStoreItems()).map(
		(storeItem) => ({
			_id: storeItem._id,
			author: storeItem.user ?? {
				admin: false,
				dispatchClients: 0,
				profilePicture: ReleaseLogo,
				username: 'Unknown user'
			},
			description: storeItem.description,
			name: storeItem.name,
			banner: storeItem.pkg.store?.banner,
			image: storeItem.pkg.store?.image,
			bannerUrl: StoreItemBanner(storeItem),
			imageUrl: StoreItemImage(storeItem),
            installCount: storeItem.installCount,
            displayName: storeItem.pkg?.name ?? storeItem.name
		})
	);

    console.log(packages);

	return { onlineCount: users.length, packages };
}) satisfies PageServerLoad;
