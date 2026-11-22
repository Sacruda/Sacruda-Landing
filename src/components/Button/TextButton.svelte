<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon?: string;
		onclick: () => any;
		disabled?: boolean;
		suggested?: boolean;
		children: Snippet;
		className?: string;
	}

	let { icon, onclick, disabled, suggested, children, className }: Props = $props();
</script>

<button {onclick} class:suggested {disabled} class="text-button {className}">
	{#if icon}
		<span class="lucide icon-{icon}"></span>
	{/if}
	<span>{@render children()}</span>
</button>
