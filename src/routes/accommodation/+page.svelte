<script>
	//@ts-nocheck
	export let data;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>
<main>
	<div class="bg-body-slate prose prose-invert">
		<h1 class="p-10 text-center">Accommodation</h1>
		<div class="md:pr-32 md:pl-32 pr-10 pl-10 pb-5 prose content">
			<svelte:component this={data.content} />
		</div>
	</div>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #531c63;
		font-family: 'Lato', sans-serif;
	}
	body {
		overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
	}
	.prose {
		max-width: none;
	}
	.prose h2,
	h1 {
		color: var(--munsoc-gold);
		text-decoration: none;
	}
	.prose h4 {
		font-weight: normal;
	}
	.prose h3 {
		margin: 0;
	}

	.content :global(img) {
		width: 100%;
		padding-left: 10%;
		padding-right: 10%;
	}

	.content :global(p) {
		font-size: 20px;
	}
</style>
