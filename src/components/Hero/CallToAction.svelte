<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		beforeHeader?: Snippet;
		afterCta?: Snippet;
		actions: Snippet;
		title: string;
		message: string;
	}

	let { beforeHeader, actions, title, message, afterCta }: Props = $props();
</script>

<div class="call-to-action">
	{@render beforeHeader?.()}
	<h1>{title}</h1>
	<p>{message}</p>
	<div class="cta">
		{@render actions()}
	</div>
	{@render afterCta?.()}
</div>
