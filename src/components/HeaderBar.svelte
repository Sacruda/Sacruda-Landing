<script lang="ts">
	import { ReleaseLogo } from '#lib/client/images.ts';
	import { MobileNavOpened } from '#lib/client/stores.ts';
	import IconButton from './Button/IconButton.svelte';
	import TextButton from './Button/TextButton.svelte';
	import Navigation from './HeaderBar/Navigation.svelte';
</script>

<header>
	<IconButton
		icon="menu"
		onclick={() => ($MobileNavOpened = !$MobileNavOpened)}
		suggested={$MobileNavOpened}
		className="mobile-nav-toggle"
	/>
	<div class="branding">
		<img src={ReleaseLogo} alt="" />
		<h1>Sacruda</h1>
	</div>
	<Navigation />
	<div class="links">
		<TextButton icon="power" onclick={() => {}} suggested className="only-desktop boot">
			Boot Sacruda
		</TextButton>
		<IconButton icon="power" onclick={() => {}} suggested className="only-mobile boot" disabled />
		<IconButton
			icon="git-branch"
			title="Go to the GitHub Repository"
			onclick={() => window.open('https://github.com/Sacruda/v7', '_blank')}
		/>
	</div>
</header>
