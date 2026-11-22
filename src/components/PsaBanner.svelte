<script lang="ts">
	import { Psa } from '#lib/client/psa/index.ts';

	let {
		location,
		inlineLong = false,
		className = ''
	}: {
		location?: string;
		inlineLong?: boolean;
		className?: string;
	} = $props();

	let psa = $derived(Psa.GetPsaFor('SacrudaSite', location));
</script>

{#if psa}
	<div class="psa-banner severity-{psa.severityStr} {className}">
		<span class="lucide icon-megaphone"></span>
		<span>
			{#if inlineLong}
				{psa.longMessage || psa.message}
			{:else}
				{psa.message}
			{/if}
		</span>
	</div>
{/if}
