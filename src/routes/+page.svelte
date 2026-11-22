<script lang="ts">
	import { HeroScreenshot } from '#lib/client/images.ts';
	import { Psa } from '#lib/client/psa/index.ts';
	import Section from '../components/Section.svelte';
	import type { PageProps } from './$types';
	import Highlights from './Highlights.svelte';
	import MainHero from './MainHero.svelte';
	import StoreItems from './StoreItems.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Home - Sacruda</title>
</svelte:head>

<MainHero onlineCount={data.onlineCount} />
<Section
	name="what-is"
	title="What is Sacruda?"
	message="Sacruda is an advanced Web Operating System built with reliability and expandability in mind. I've been working hard for years to give you the WebOS experience you deserve. With Sacruda, everything you do is stored in the cloud, so that you can access your stuff from anywhere. Just pop open a browser, type in the address, log in and you're right back on your familiar desktop. Sacruda also has infrastructure put in place to allow users to make and distribute their own apps to other Sacruda users."
>
	<h3>What does it look like?</h3>
	<img src={HeroScreenshot} alt="" class="hero-screenshot" />
	<i class="image-alt">Sacruda 7.0.10, back when it was still called ArcOS.</i>
</Section>
<Highlights />
<StoreItems items={data.packages} />
