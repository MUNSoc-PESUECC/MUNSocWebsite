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
	<title>MUNSoc PESU-ECC | NEWSLETTERS</title>
	<div class="bg-body-slate text-white prose prose-invert">
		<h1 class="p-10 text-center">Newsletters</h1>

		{#each data.newsletters as newsletter}
			<div
				class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center bg-munsoc-alabaster"
				onclick="window.location='{newsletter.path}'"
			>
				<div class="flex justify-center">
					<img src={newsletter.meta.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
				</div>

				<div class="card-content">
					<h1 class="pr-10 pl-10">
						<a href={newsletter.path}>
							{newsletter.meta.title}
						</a>
					</h1>
					<h3 class="text-munsoc-purple">
						{new Date(newsletter.meta.date).toLocaleDateString('default', {
							month: 'long',
							year: 'numeric'
						})}
					</h3>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #531c63;
		--navbar-slate: #461854;
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
		/* Add shadows to create the "card" effect */
		box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		margin-bottom: 30px;
		cursor: pointer;
		border: 2px solid var(--munsoc-gold);
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
	}

	/* Add some padding inside the card container */
	.card-content {
		padding-bottom: 30px;
	}
</style>
