<script>
	// @ts-nocheck
	export let data;

	function isOver(dateString) {
		const date = new Date(dateString);
		const today = new Date();
		if (date <= today) {
			return true;
		} else {
			return false;
		}
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>

<main>
	<title>{data.title}</title>
	<body class="bg-body-slate">
		<article class="text-white p-10 prose prose-invert">
			<div class="flex justify-center">
				<img src={data.img} alt="" class="w-11/12 h-auto rounded-md" />
			</div>
			<h1 class="text-center">{data.title}</h1>
			<h3 class="text-center">Date: {data.date}</h3>
			<h3 class="text-center">Time: {data.time}</h3>
			<h3 class="text-center">Venue: {data.venue}</h3>
			{#if !isOver(data.date)}
				<button class="register-button" onclick="window.open('{data.registrationLink}', '_blank')">
					Register Here!
				</button>
			{/if}
			<hr class="pl-10 pr-10" />
			<div class="content">
				<svelte:component this={data.content} class="content" />
			</div>
		</article>
	</body>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #531C63;
		--button-color: #202c40;
		font-family: 'Lato', sans-serif;
	}
	body {
		overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
	}
	.prose {
		max-width: none;
	}
	.prose h1 {
		color: var(--munsoc-gold);
	}
	.register-button {
		width: 100%;
		padding: 8px;
		color: var(--munsoc-gold);
		font-size: x-large;
		font-weight: bold;
		background-color: var(--button-color);
		border-radius: 6px;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		background-color: var(--body-slate);
		border: 5px solid #202c40;
	}
	.register-button:hover {
		border-color: var(--munsoc-gold);
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
	}
	.content :global(p) {
		font-size: 20px;
	}
</style>
