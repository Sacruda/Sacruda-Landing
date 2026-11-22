<script lang="ts">
	import '../css/main.css';
	import HeaderBar from '../components/HeaderBar.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<HeaderBar />
{@render children()}
