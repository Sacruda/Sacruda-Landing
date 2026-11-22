<script lang="ts">
	import Section from '../components/Section.svelte';
	import type { StoreOverviewItem } from '../types/package';
	import StoreItem from './StoreItems/StoreItem.svelte';

	let { items }: { items: StoreOverviewItem[] } = $props();

	let mostPopular = $derived(items.shift());
</script>

<Section
	name="store-items"
	title="Third-party apps"
	message="Our users have everything they need to distribute their own apps on our App Store. Here are the apps that you can download today:"
>
	{#if mostPopular}
		<StoreItem pkg={mostPopular} large />
	{/if}

	<div class="store-item-grid">
		{#each items as item (item._id)}
			<StoreItem pkg={item}></StoreItem>
		{/each}
	</div>

	<p class="learn-more">
		<a href="https://docs.sacruda.nl/developers/getting-started/intro">
			Learn how to develop apps
		</a>

		<span class="lucide icon-chevron-right"></span>
	</p>
</Section>
