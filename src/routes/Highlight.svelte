<script lang="ts">
	let { icon, title, message }: { icon: string; title: string; message: string } = $props();
</script>

<div class="highlight">
	<span class="lucide icon-{icon}"></span>
	<div>
		<h2>{title}</h2>
		<p>{message}</p>
	</div>
</div>
