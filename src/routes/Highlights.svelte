<script>
	import Section from "../components/Section.svelte";
	import Highlight from "./Highlight.svelte";

</script>
<Section
	name="home-highlights"
	title="Sacruda's Highlights"
	subtitle="The important stuff"
	message="These are some of the most important highlights of Sacruda, displayed in no particular order:"
>
	<div class="highlights">
		<Highlight
			icon="cloud"
			title="Cloud based"
			message="All your files, settings and preferences are stored securely in the cloud, allowing you to log in from anywhere in the world."
		/>
		<Highlight
			icon="shield-check"
			title="Secure"
			message="We go to great lengths to make sure your stuff is safe and sound. Sacruda also has security features like two-factor authentication to keep intruders away."
		/>
		<Highlight
			icon="gauge"
			title="Performance in mind"
			message="Sacruda is built with performance as a priority. It boots fast and apps load quickly, so that you can get to what’s important as fast as possible."
		/>
		<Highlight
			icon="shopping-bag"
			title="Expandable"
			message="Want more apps? No problem! Sacruda has an app store from which you can download apps created by other Sacruda users. Free forever."
		/>
		<Highlight
			icon="sparkles"
			title="Customizability everywhere"
			message="Do you like customization? Because we do. There are so many options to make Sacruda look and feel exactly as you want."
		/>
		<Highlight
			icon="share-2"
			title="Stay connected"
			message="You can send messages and share files with other Sacruda users to stay connected and in
					touch with what’s going on."
		/>
	</div>
</Section>
