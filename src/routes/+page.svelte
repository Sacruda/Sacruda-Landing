<script lang="ts">
	import { HeroScreenshot, Img33, ReleaseLogo } from '#lib/client/images.ts';
	import { Plural } from '#lib/util.ts';
	import TextButton from '../components/Button/TextButton.svelte';
	import Hero from '../components/Hero.svelte';
	import CallToAction from '../components/Hero/CallToAction.svelte';
	import Section from '../components/Section.svelte';
	import type { PageProps } from './$types';
	import Highlight from './Highlight.svelte';

	let { data }: PageProps = $props();
</script>

<Hero page="home">
	{#snippet backdropContent()}
		<img src={Img33} alt="" class="masked" />
	{/snippet}
	{#snippet leftContent()}
		<!-- <img src={HeroScreenshot} class="os-screenshot" alt=""> -->
	{/snippet}
	{#snippet rightContent()}
		<CallToAction
			title="Say Hi to Sacruda"
			message="Sacruda is an advanced cloud-based Web Operating System that runs in your browser. Personally, I like it a lot."
		>
			{#snippet beforeHeader()}
				<img src={ReleaseLogo} class="logo" alt="" />
			{/snippet}
			{#snippet actions()}
				<TextButton className="boot" icon="power" onclick={() => {}} suggested>
					Boot Sacruda
				</TextButton>
				<TextButton icon="chevron-down" onclick={() => {}}>Learn more...</TextButton>
			{/snippet}
			{#snippet afterCta()}
				{#if data.onlineCount}
					<div class="online-counter">
						<div class="dot"></div>
						<span>{data.onlineCount} {Plural('user', data.onlineCount)} online</span>
					</div>
				{/if}
			{/snippet}
		</CallToAction>
	{/snippet}
</Hero>

<Section
	name="what-is"
	title="What is Sacruda?"
	message="Sacruda is an advanced Web Operating System built with reliability and expandability in mind. I've been working hard for years to give you the WebOS experience you deserve. With Sacruda, everything you do is stored in the cloud, so that you can access your stuff from anywhere. Just pop open a browser, type in the address, log in and you're right back on your familiar desktop. Sacruda also has infrastructure put in place to allow users to make and distribute their own apps to other Sacruda users."
>
	<h3>What does it look like?</h3>
	<img src={HeroScreenshot} alt="" class="hero-screenshot" />
	<i class="image-alt">Sacruda 7.0.10, back when it was still called ArcOS.</i>
</Section>
<Section
	name="home-highlights"
	title="Sacruda's Highlights"
	subtitle="The important stuff"
	message="These are some of the most important highlights of Sacruda, displayed in no particular order:"
>
	<div class="highlights">
		<Highlight
			icon="cloud"
			title="Cloud based"
			message="All your files, settings and preferences are stored securely in the cloud, allowing you to log in from anywhere in the world."
		/>
		<Highlight
			icon="shield-check"
			title="Secure"
			message="We go to great lengths to make sure your stuff is safe and sound. Sacruda also has security features like two-factor authentication to keep intruders away."
		/>
		<Highlight
			icon="gauge"
			title="Performance in mind"
			message="Sacruda is built with performance as a priority. It boots fast and apps load quickly, so that you can get to what’s important as fast as possible."
		/>
		<Highlight
			icon="shopping-bag"
			title="Expandable"
			message="Want more apps? No problem! Sacruda has an app store from which you can download apps created by other Sacruda users. Free forever."
		/>
		<Highlight
			icon="sparkles"
			title="Customizability everywhere"
			message="Do you like customization? Because we do. There are so many options to make Sacruda look and feel exactly as you want."
		/>
		<Highlight
			icon="share-2"
			title="Stay connected"
			message="You can send messages and share files with other Sacruda users to stay connected and in
					touch with what’s going on."
		/>
	</div>
</Section>
