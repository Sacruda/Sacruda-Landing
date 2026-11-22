<script lang="ts">
	import { FireGif } from '#lib/client/images.ts';
	import Section from '../../components/Section.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Section
	name="support"
	title="Need help?"
	subtitle="FIRE!!! WHERE'S THE FIRE!?!"
	message="The Sacruda team is always on stand-by to help you with any issues you may run in to. Did you forget your username or email? We can fix that. Is Sacruda malfunctioning? We can help. There's several different ways to reach the team. These are your options:"
>
	<button class="support-option" onclick={() => window.open('https://discord.gg/t5PaNP9dvg')}>
		<span class="lucide icon-message-circle-question-mark"></span>
		<p>Chat with us on Discord</p>
		<span class="lucide arrow icon-chevron-right"></span>
	</button>
	<button class="support-option" onclick={() => window.open('mailto:support@sacruda.nl')}>
		<span class="lucide icon-mail-question-mark"></span>
		<p>Send an email to our Support address</p>
		<span class="lucide arrow icon-chevron-right"></span>
	</button>
	<button class="support-option" onclick={() => {}} disabled>
		<span class="lucide icon-send"></span>
		<p>Send one of us a message using Sacruda</p>
	</button>

	<img src={FireGif} alt="" />
</Section>
