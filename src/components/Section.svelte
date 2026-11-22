<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		title?: string;
		subtitle?: string;
		message?: string;
		children?: Snippet;
		className?: string;
	}

	let { name, title, subtitle, message, children, className }: Props = $props();
</script>

<section class="page-section section-{name} {className ?? ''}">
	{#if title}
		<h1 class="section-title">{title}</h1>
	{/if}
	{#if subtitle}
		<p class="section-subtitle">{subtitle}</p>
	{/if}
	{#if message}
		<p class="section-message">{message}</p>
	{/if}
	{@render children?.()}
</section>
