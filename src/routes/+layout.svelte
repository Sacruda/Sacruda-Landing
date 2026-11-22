<script lang="ts">
	import { ReleaseLogo } from '#lib/client/images.ts';
	import { onMount } from 'svelte';
	import HeaderBar from '../components/HeaderBar.svelte';
	import '../css/main.css';
	import type { LayoutProps } from './$types';
	import { Psa } from '#lib/client/psa/index.ts';
	import Footer from '../components/Footer.svelte';

	let { children }: LayoutProps = $props();

	let loading = $state<boolean>(true);

	onMount(async () => {
		await Psa.Refresh();
		loading = false;
	});
</script>

<svelte:head>
	<link rel="shortcut icon" href={ReleaseLogo} />
</svelte:head>

{#if !loading}
	<HeaderBar />
	{@render children()}
	<Footer />
{/if}
