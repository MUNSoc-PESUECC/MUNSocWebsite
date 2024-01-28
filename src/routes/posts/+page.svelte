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
	<title>MUNSoc PESU-ECC | POSTS</title>
	<body class="bg-body-slate text-white prose">
		<h1 class=" p-10 text-center text-munsoc-purple">Posts</h1>
		<div class="wrapper lg:ml-12 lg:mr-12 md:ml-10">
			{#each data.posts as post}
				<div
					class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center bg-munsoc-alabaster"
					onclick="window.location='{post.path}'"
				>
					<div class="flex justify-center">
						<img src={post.meta.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
					</div>

					<div class="card-content">
						<h1 class="grey mb-1 ml-1 mr-1 text-munsoc-purple">
							<a href={post.path}>
								{post.meta.title}
							</a>
						</h1>

						<h3 class="mt-3 font-normal text-munsoc-purple">✍️ {post.meta.author}</h3>
						<div class="pl-10 pr-10 published text-munsoc-purple">Published: {post.meta.date}</div>
					</div>
				</div>
			{/each}
		</div>
	</body>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--navbar-slate: #461854;
		--body-slate: #531c63;
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

	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		margin-bottom: 30px;
		margin-left: 10px;
		margin-right: 10px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		flex-direction: column;
		border: 2px solid var(--munsoc-gold);
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
	}

	/* Add some padding inside the card container */
	.card-content {
		padding-bottom: 10px;
	}

	.published {
		font-size: 16px;
	}

	.wrapper {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		/* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
		grid-gap: 28px;
	}

	@media (max-width: 420px) {
		.wrapper {
			display: block;
			align-items: center;
		}
		.card {
			display: block;
		}
	}
</style>
