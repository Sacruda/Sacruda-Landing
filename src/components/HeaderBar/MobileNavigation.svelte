<script lang="ts">
	import { MobileNavOpened } from '#lib/client/stores.ts';
	import { afterNavigate } from '$app/navigation';
	import IconButton from '../Button/IconButton.svelte';
	import Navigation from './Navigation.svelte';

	afterNavigate(() => {
		MobileNavOpened.set(false);
	});
</script>

<div class="mobile-navigation" class:visible={$MobileNavOpened}>
	<IconButton icon="x" onclick={() => ($MobileNavOpened = false)} suggested />
	<Navigation />
</div>
