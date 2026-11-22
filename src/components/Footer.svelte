<script>
	import { ReleaseLogo } from '#lib/client/images.ts';
	import { RELEASE_OS_URL } from '#lib/globals.ts';
	import TextButton from './Button/TextButton.svelte';
</script>

<footer>
	<div class="branding">
		<img src={ReleaseLogo} alt="" />
		<h3>Sacruda</h3>
		<TextButton
			icon="power"
			className="only-desktop"
			onclick={() => window.open(RELEASE_OS_URL)}
			suggested
		>
			Boot Sacruda
		</TextButton>
	</div>
	<div class="links">
		<section>
			<h4>Find us here</h4>
			<a href="https://sacruda.nl">Sacruda Website</a>
			<a href="https://discord.gg/t5PaNP9dvg">The Sacruda Discord</a>
			<a href="https://reddit.com/r/arcos">r/ArcOS subreddit</a>
			<a href="https://github.com/Sacruda">Sacruda GitHub</a>
			<a href="https://github.com/Sacruda/v7">Sacruda v7 Frontend</a>
			<a href="https://docs.sacruda.nl">Documentation</a>
		</section>
		<section>
			<h4>Sacruda versions</h4>
			<a href="https://os.sacruda.nl">Release</a>
			<a href="https://beta.sacruda.nl">Beta</a>
			<a href="https://v5.sacruda.nl">ArcOS v5</a>
			<a href="https://v6.sacruda.nl">ArcOS v6</a>
		</section>
		<section>
			<h4>Administration</h4>
			<a href="https://team.sacruda.nl">Sacruda Team Site</a>
			<a href="https://pb.sacruda.nl/_">Sacruda Pocketbase</a>
			<a href="https://management.sacruda.nl">Sacruda Management</a>
		</section>
	</div>
</footer>
