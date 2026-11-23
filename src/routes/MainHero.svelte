<script lang="ts">
	import { ReleaseLogo } from '#lib/client/images.ts';
	import { Plural } from '#lib/client/util.ts';
	import { RandomWallpaper } from '#lib/client/wallpaper.ts';
	import { RELEASE_OS_URL } from '#lib/globals.ts';
	import TextButton from '../components/Button/TextButton.svelte';
	import Hero from '../components/Hero.svelte';
	import CallToAction from '../components/Hero/CallToAction.svelte';
	import PsaBanner from '../components/PsaBanner.svelte';

	let { onlineCount }: { onlineCount: number } = $props();

	const PARALLAX_SPEED = 0.3;
	let wallpaper: HTMLImageElement | undefined = $state();
	let frame = 0;

	function updateParallax() {
		frame = 0;
		if (!wallpaper?.parentElement) return;

		const max = wallpaper.parentElement.clientHeight * PARALLAX_SPEED;
		const offset = Math.min(window.scrollY * PARALLAX_SPEED, max);
		wallpaper.style.transform = `translate3d(0, ${offset}px, 0)`;
	}

	function onScroll() {
		if (!frame) frame = requestAnimationFrame(updateParallax);
	}

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		updateParallax();
		return () => {
			if (frame) cancelAnimationFrame(frame);
			frame = 0;
		};
	});
</script>

<svelte:window onscroll={onScroll} onresize={onScroll} />

<Hero page="home">
	{#snippet backdropContent()}
		<div class="masked">
			<img bind:this={wallpaper} src={RandomWallpaper()} alt="" class="parallax" />
		</div>
	{/snippet}
	{#snippet rightContent()}
		<CallToAction
			title="Say Hi to Sacruda"
			message="Sacruda is an advanced Web Operating System that runs in your browser. It's built with reliability and expandability in mind. Personally, I like it a lot."
		>
			{#snippet beforeHeader()}
				<img src={ReleaseLogo} class="logo" alt="" />
			{/snippet}
			{#snippet actions()}
				<TextButton
					className="boot"
					icon="power"
					onclick={() => window.open(RELEASE_OS_URL)}
					suggested
				>
					Boot Sacruda
				</TextButton>
				<TextButton icon="chevron-down" onclick={() => (location.href = '/#what-is')}>
					Learn more...
				</TextButton>
			{/snippet}
			{#snippet afterCta()}
				{#if onlineCount}
					<div class="online-counter">
						<div class="dot"></div>
						<span>{onlineCount} {Plural('user', onlineCount)} online</span>
					</div>
				{/if}
			{/snippet}
		</CallToAction>
	{/snippet}
	{#snippet overlayContent()}
		<PsaBanner location="homePage" inlineLong className="home-page" />
	{/snippet}
</Hero>
