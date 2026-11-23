<script lang="ts">
	import Section from '../../components/Section.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<Section
	title="About Sacruda"
	subtitle="What's the fuss all about?"
	message="Sacruda is an advanced Web Operating System built with reliability and expandability in mind. I've been working hard for years to give you the WebOS experience you deserve. With Sacruda, everything you do is stored in the cloud, so that you can access your stuff from anywhere. Just pop open a browser, type in the address, log in and you're right back on your familiar desktop. Sacruda also has infrastructure put in place to allow users to make and distribute their own apps to other Sacruda users."
	name="about"
></Section>
<Section
	name="team"
	title="Our Team"
	subtitle="These are the people behind Sacruda"
	message="Sacruda is worked on by a handful of people. These also happen to be System Administrators: you can always message them on Discord or on Sacruda itself to get help with something, like changing your email or troubleshooting a bug."
>
	{#if !data.admins.length}
		<p>
			It appears that we can't currently load the list of Administrators. Please check in again
			later.
		</p>
	{:else}
		<div class="admins">
			{#each data.admins as admin (admin.username)}
				<div class="person">
					<img
						src={admin.profilePicture}
						alt="The Sacruda profile picture of {admin.displayName || admin.username}"
					/>
					<h3 class="display-name">{admin.displayName || admin.username}</h3>
					{#if admin.displayName}
						<p class="username">{admin.username}</p>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</Section>
<Section
	name="history"
	title="Sacruda's History"
	subtitle="Back in the olden days..."
	message="After so many years, it's easy to forget where it all started. Sacruda hasn't always been as large as it is now, back in 2020, this project looked a lot different. This timeline walks you through my journey of creating what I believe to be a pretty amazing project. Some snippets of this page were taken from my blog, a link to which you can find underneath the timeline."
>
	<div class="timeline">
		<div class="fragment">
			<p class="date">
				<span>November 2020</span>
			</p>
			<h3>The start of WebOS</h3>
			<p class="description">
				On November 4th, 2020, I started working on a little hobby thing called WebOS, because I
				encountered an error page at school that had a header bar that made me think of MacOS. WebOS
				had no movable windows, no boot screen, login screen or really any apps at all.
			</p>
		</div>
		<div class="fragment">
			<p class="date">
				<span>December 2020</span>
			</p>
			<h3>Version 2 already?!</h3>
			<p class="description">
				A month later, on December 13th 2020, I started on WebOSv2. My motivation for starting on v2
				was a w3schools article I ran into that allowed me to make windows that you can drag around.
				v2 was one of the earliest web development projects I built from scratch.
			</p>
		</div>
		<div class="fragment">
			<p class="date">
				<span>February 2021</span>
			</p>
			<h3>The age of Electron</h3>
			<p class="description">
				In late February of 2021, I came across Electron; a project that allows you to create
				multi-platform desktop apps using web technologies. Because of this, I immediately got
				motivated to work on WebOSv3, the third iteration of the project. v3 had a lot more
				applications, and was the first version of the OS that focused on personalization. You can
				still see this by downloading and installing v3, but the basic idea was that I wanted to
				give my users the option to customize their experience to their exact demands. I added
				themes, taskbar positions, stuff like that. I even added a file manager that allowed you to
				view the files on your actual device.
			</p>
		</div>
		<div class="fragment">
			<p class="date">
				<span>July 2021</span>
			</p>
			<h3>ArcOS! Version 4 was born.</h3>
			<p class="description">
				ArcOS' name comes from Electron, which ofcourse was the foundation for WebOSv3 and v4. I
				started working on v4 on July 6th 2021, a couple of months after v3. This new version
				actually didn't rewrite anything; it was simply just a visual refresh of the OS. We went
				from gray, utilitarian styling to a modern UI with fancy glass surfaces.
			</p>
		</div>
		<div class="fragment">
			<p class="date">
				<span>July 2022</span>
			</p>
			<h3>ArcOS v5: Svelte</h3>
			<p class="description">
				After leaving the project behind for a couple months, I felt the urge to give it another go.
				I had been learning Svelte; a lightweight Javascript framework that makes web development so
				simple, it's almost embarrassing. Anyway, given what I knew about Svelte 3 at the time, I
				decided to give creating an OS in it a shot. On July 6th, 2022, exactly one year after v4, I
				started working on v5. I moved away from the land of Electron and node integration, so I had
				to figure out another way to store files and users, so I created ArcAPI: a backend for
				ArcOS, which stores all the data inside of ArcOS, even now.
			</p>
		</div>
		<div class="fragment">
			<p class="date">
				<span>November 2023</span>
			</p>
			<h3>Version 6: Processes</h3>
			<p class="description">
				After working on v5 for over a year, I started to notice that it became quite a mess
				internally. I didn't really ever rewrite or refactor anything inside the codebase, so there
				was a whole ton of redundant old code that in many cases wasn't even used anymore. Despite
				that though, it wasn't the primary reason why I cut off v5. The real reason was a lack of
				processes; the apps inside of ArcOS could only run once up to this point. ArcOS v6 had a
				fresh design, and was focused on professionalism from the very beginning. I had one main
				objective: create an operating system that would last me a long time and that resembled an
				actual bare metal OS, creating the illusion that it isn't just a website. I accomplished
				this by using compact margins, consistent paddings, and logical details like borders and
				font sizes.
			</p>
		</div>
		<div class="fragment">
			<p class="date">
				<span>January 2025</span>
			</p>
			<h3>Version 7: ArcOS, reborn</h3>
			<p class="description">
				This new (and likely final) codebase has a bunch of features I couldn't dream of before. I
				always wanted to add third-party apps to ArcOS, so I finally did in v7. I wanted 2FA, so I
				added that too. I wanted a dedicated administrative suite for my admins to properly moderate
				the server, with scopes and all, so I added that also. I wanted an over complicated
				foundation, so complex that nobody ever dares to modify it, so I made it. I wanted an app
				store so that people can create and publish apps for other users, so I did that. ArcOS v7 is
				focused on modularity, maintainability and expandability. This is evident when looking at
				the third-party apps, filesystem-based configuration files, and the various baselayers like
				services and kernel modules. Everything in ArcOS can be swapped out with other things, and
				with a minimal amount of corrections, ArcOS will keep functioning just fine.
			</p>
		</div>
		<div class="fragment">
			<p class="date">
				<span>November 2026</span>
			</p>
			<h3>An incredibly hard decision</h3>
			<p class="description">
				I created the ArcOS name as a 14-year old kid back in early July of 2021. The way I thought
				of it is quite creative, I'll admit, but the name was never very original. The ArcOS name
				(or anything close to it) occurs thousands of times in the tech industry. So, after 5.5 long
				years, we've made the decision to change the name from ArcOS to Sacruda for originality and
				recognition. Sacruda is still the same ArcOS v7 we know and love, just with some refreshed
				branding and a different name. As of writing this, I'm in the middle of making the site
				you're on, one whole day after starting the long process of renaming ArcOS to Sacruda.
			</p>
		</div>
	</div>
	<p class="learn-more">
		<a href="https://izkuipers.nl/blog/2025/11/4/ArcOS-5-years-old">
			Read the story of the first 5 years
		</a>
		<span class="lucide icon-chevron-right"></span>
	</p>
</Section>
