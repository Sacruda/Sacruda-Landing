<script lang="ts">
	import { NavigationPages } from '#lib/client/pages.ts';

	let { className }: { className?: string } = $props();
</script>

<nav class="site-navigation {className}">
	{#each NavigationPages as page}
		<a href={page.href} target={page.newTab ? '_blank' : undefined}>
			{page.name}
			{#if page.isExternal}
				<span class="lucide icon-arrow-up-right"></span>
			{/if}
		</a>
	{/each}
</nav>
