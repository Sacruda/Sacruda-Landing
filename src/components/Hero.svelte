<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		page?: string;
		backdropContent?: Snippet;
		overlayContent?: Snippet;
		leftContent?: Snippet;
		rightContent: Snippet;
	}

	let { page, backdropContent, leftContent, rightContent, overlayContent }: Props = $props();
	let className = $derived(page ? `${page}-page` : '');
</script>

<div class="hero {className}">
	{#if backdropContent}
		<div class="hero-backdrop">
			{@render backdropContent()}
		</div>
	{/if}
	<div class="hero-content">
		<div class="left">
			{@render leftContent?.()}
		</div>
		<div class="right">
			{@render rightContent()}
		</div>
	</div>
	{#if overlayContent}
		<div class="overlay-content">
			{@render overlayContent()}
		</div>
	{/if}
</div>
