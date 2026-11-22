<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		page?: string;
		backdropContent?: Snippet;
		leftContent?: Snippet;
		rightContent: Snippet;
	}

	let { page, backdropContent, leftContent, rightContent }: Props = $props();
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
</div>
