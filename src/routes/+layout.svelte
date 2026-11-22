<script lang="ts">
	import { ReleaseLogo } from '#lib/client/images.ts';
	import HeaderBar from '../components/HeaderBar.svelte';
	import '../css/main.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="shortcut icon" href={ReleaseLogo} />
</svelte:head>

<HeaderBar />
{@render children()}
