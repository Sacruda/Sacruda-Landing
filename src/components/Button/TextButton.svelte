<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon?: string;
		onclick?: () => any;
		disabled?: boolean;
		suggested?: boolean;
		children: Snippet;
		className?: string;
		submit?: boolean;
	}

	let { icon, onclick, disabled, suggested, children, className, submit }: Props = $props();
</script>

<button
	{onclick}
	class:suggested
	{disabled}
	class="text-button {className}"
	type={submit ? 'submit' : undefined}
>
	{#if icon}
		<span class="lucide icon-{icon}"></span>
	{/if}
	<span>{@render children()}</span>
</button>
