<script lang="ts">
	interface Props {
		icon: string;
		onclick: () => any;
		disabled?: boolean;
		suggested?: boolean;
		title?: string;
		className?: string;
	}

	let { icon, onclick, disabled, suggested, title, className }: Props = $props();
</script>

<button
	class="icon-button lucide icon-{icon} {className}"
	{onclick}
	class:suggested
	{disabled}
	{title}
>
</button>
