<script lang="ts">
	import { Plural } from '#lib/client/util.ts';
	import type { StoreOverviewItem } from '../../types/package';

	let { pkg, large = false }: { pkg: StoreOverviewItem; large?: boolean } = $props();
</script>

<div class="store-item" class:large>
	<img
		src={pkg.bannerUrl || pkg.imageUrl}
		class:fallback={!pkg.bannerUrl}
		alt="Banner image for {pkg.displayName} by {pkg.author.displayName ?? pkg.author.username}"
		class="banner"
	/>
	<div class="info">
		<img
			src={pkg.imageUrl}
			alt="The logo of the {pkg.displayName} item by {pkg.author.displayName ??
				pkg.author.username}"
		/>
		<h2>{pkg.displayName}</h2>
		<p class="description">{pkg.description}</p>
		<p class="stats">
			Created by {pkg.author.displayName ?? pkg.author.username} &CenterDot; {pkg.installCount}
			{Plural('download', pkg.installCount)}
		</p>
	</div>
</div>
