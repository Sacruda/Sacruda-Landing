<script lang="ts">
	import { ReleaseLogo } from '#lib/client/images.ts';
	import IconButton from './Button/IconButton.svelte';
	import TextButton from './Button/TextButton.svelte';
</script>

<header>
	<div class="branding">
		<img src={ReleaseLogo} alt="" />
		<h1>Sacruda</h1>
	</div>
	<nav>
		<a href="/">Home</a>
		<a href="/">Docs</a>
	</nav>
	<div class="links">
		<TextButton icon="power" onclick={() => {}} suggested>Boot Sacruda</TextButton>
		<IconButton icon="git-branch" title="Go to the GitHub Repository" onclick={() => {}} />
	</div>
</header>
