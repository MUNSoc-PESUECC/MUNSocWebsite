<script>
	// @ts-nocheck

	export let data;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>

<main>
	<title>MUNSoc PESU-ECC | EVENTS</title>
	<body class="bg-body-slate text-white prose prose-invert">
		<h1 class="px-10 pt-10 text-center">Events</h1>
		<hr />
		{#each data.events as event}
			<div
				class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md"
				onclick="window.location='{event.path}'"
			>
				<div class="flex justify-center">
					<img src={event.meta.img} alt="" class="w-2/3 h-auto rounded-md max-w-md" />
				</div>

				<div class="card-content text-center">
					<h1 class="pr-10 pl-10">
						<a href={event.path}>
							{event.meta.title}
						</a>
					</h1>
					<hr class="mr-10 ml-10 mb-5 mt-5" />
					<h3 class="pl-10 pr-10 text-xl">Date: {event.meta.date}</h3>
					<h3 class="pl-10 pr-10 text-xl">Time: {event.meta.time}</h3>
					<h3 class="pl-10 pr-10 text-xl">Venue: {event.meta.venue}</h3>
				</div>
			</div>
		{/each}
	</body>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #232c3a;
		font-family: 'Lato', sans-serif;
	}
	body {
		overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
	}
	.prose {
		max-width: none;
	}
	.prose a {
		color: var(--munsoc-gold);
		text-decoration: none;
	}
	.prose h1 {
		color: var(--munsoc-gold);
	}

	.card {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		margin-bottom: 30px;
		background-color: #202c40;
		border: 5px solid #202c40;
		cursor: pointer;
	}

	.card:hover {
		border-color: var(--munsoc-gold);
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
	}

	.card-content {
		padding-bottom: 30px;
	}
</style>
