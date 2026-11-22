<script lang="ts">
	import { ReleaseLogo } from '#lib/client/images.ts';
	import { MobileNavOpened } from '#lib/client/stores.ts';
	import { GITHUB_REPO_URL, RELEASE_OS_URL } from '#lib/globals.ts';
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
		<TextButton
			icon="power"
			onclick={() => window.open(RELEASE_OS_URL)}
			suggested
			className="only-desktop boot"
		>
			Boot Sacruda
		</TextButton>
		<IconButton
			icon="power"
			onclick={() => window.open(RELEASE_OS_URL)}
			suggested
			className="only-mobile boot"
		/>
		<IconButton
			icon="git-branch"
			title="Go to the GitHub Repository"
			onclick={() => window.open(GITHUB_REPO_URL, '_blank')}
		/>
	</div>
</header>
