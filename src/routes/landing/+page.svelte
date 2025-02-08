<script>
	// @ts-nocheck

	export let data;
	const presidents = [
		{
			Name: 'Abhiram Dasika',
			Photo: 'https://i.imgur.com/SdChrcL.png'
		},
		{
			Name: 'Harsh Somvanshi',
			Photo: 'https://i.imgur.com/YFnnr3q.png'
		}
	];
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

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
	rel="stylesheet"
/>
<main>
	<title>MUNSoc PESU-ECC</title>

	<div class="bg-body-slate prose prose-invert">
		<!-- HERO SECTION -->
		<div class="bg-[#F1EDE7] h-screen">
			<div class="heroSection h-full flex flex-col items-center mt-8">
				<div
					class="wrapper grid grid-cols-3 justify-items-stretch ml-16 mr-16 border border-munsoc-purple"
				>
					<div class="flex items-center justify-center">
						<div class="vertical grid">
							<img class="logo h-28 w-autom ml-1 mb-10" src="images/logo.png" alt="munsoc logo" />
							<div class="text-9xl text-munsoc-purple font-le-jour-serif ml-1">UNICON</div>
							<div class="text-2xl text-munsoc-gold ml-1">MUNSoc PESUECC</div>
							<img class="instagram" src="images/insta.png" alt="insta logo" />
						</div>
					</div>

					<div class="col-span-2 w-full h-full">
						<img src="images/landingBg.png" class="max-w-full h-auto" alt="landing-bg" />
					</div>
				</div>
			</div>
		</div>

		<!-- LATEST NEWSLETTER -->
		<h1 class="p-10 text-center text-munsoc-gold">Latest Newsletter</h1>

		<div
			class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center"
			style="width: auto; height: 50%; "
			onclick={window.location=data.newsletters[0].path}
		>
			<div class="flex justify-center">
				<img src={data.newsletters[0].meta.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
			</div>

			<div class="card-content">
				<h1 class="pr-10 pl-10">
					<a href={data.newsletters[0].path}>
						{data.newsletters[0].meta.title}
					</a>
				</h1>
				<h3>
					{new Date(data.newsletters[0].meta.date).toLocaleDateString('default', {
						month: 'long',
						year: 'numeric'
					})}
				</h3>
			</div>
		</div>
		<div class="text-right md:pr-10 pr-5 text-xl">
			<a href="/newsletter">See older Newsletters</a>
			<div class="inline arrow text-munsoc-gold">-></div>
		</div>

		<hr class="ml-10 mr-10" />

		<!-- POSTS -->
		<h1 class="p-10 text-center text-munsoc-gold">Recent Posts</h1>
		<div class="wrapper">
			<div
				class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center inline-block"
				onclick={window.location=data.posts[0].path}
			>
				<div class="flex justify-center">
					<img src={data.posts[0].meta.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
				</div>

				<div class="card-content">
					<h1 class="pr-10 pl-10">
						<a href={data.posts[0].path}>
							{data.posts[0].meta.title}
						</a>
					</h1>
					<h3>✍️ {data.posts[0].meta.author}</h3>
					<div class="pl-10 pr-10 text-xl">Published: {data.posts[0].meta.date}</div>
					<div class="pl-10 pr-10">{data.posts[0].meta.description}</div>
				</div>
			</div>

			<div
				class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center inline-block"
				onclick={window.location=data.posts[1].path}
			>
				<div class="flex justify-center">
					<img src={data.posts[1].meta.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
				</div>

				<div class="card-content">
					<h1 class="pr-10 pl-10">
						<a href={data.posts[1].path}>
							{data.posts[1].meta.title}
						</a>
					</h1>
					<h3>✍️ {data.posts[1].meta.author}</h3>
					<div class="pl-10 pr-10 text-xl">Published: {data.posts[1].meta.date}</div>
					<div class="pl-10 pr-10">{data.posts[1].meta.description}</div>
				</div>
			</div>
		</div>
		<div class="text-right md:pr-10 pr-5 text-xl">
			<a href="/posts">See more Posts</a>
			<div class="inline arrow text-munsoc-gold">-></div>
		</div>
		<hr class="ml-10 mr-10" />

		<!-- EVENTS -->

		<h1 class="p-10 text-center">Recent Events</h1>

		<div class="wrapper">
			<div
				class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center inline-block"
				onclick={window.location=data.events[0].path}
			>
				<div class="flex justify-center">
					<img src={data.events[0].meta.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
				</div>

				<div class="card-content">
					<h1 class="pr-10 pl-10">
						<a href={data.events[0].path}>
							{data.events[0].meta.title}
						</a>
					</h1>
					<h3 class="pl-10 pr-10">Date: {data.events[0].meta.date}</h3>
					<h3 class="pl-10 pr-10">Time: {data.events[0].meta.time}</h3>
					<h3 class="pl-10 pr-10">Venue: {data.events[0].meta.venue}</h3>

					{#if isOver(data.events[0].meta.date)}
						<h3 class="text-munsoc-gold">This event is over!</h3>
					{:else}
						<button
							class="register-button"
							onclick={window.open(data.events[0].meta.registrationLink, '_blank')}
						>
							Register Here!
						</button>
					{/if}
				</div>
			</div>

			<div
				class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center inline-block"
				onclick={window.location=data.events[1].path}
			>
				<div class="flex justify-center">
					<img src={data.events[1].meta.img} alt="" class="w-11/12 h-auto rounded-md max-w-md" />
				</div>

				<div class="card-content">
					<h1 class="pr-10 pl-10">
						<a href={data.events[1].path}>
							{data.events[1].meta.title}
						</a>
					</h1>
					<h3 class="pl-10 pr-10">Date: {data.events[1].meta.date}</h3>
					<h3 class="pl-10 pr-10">Time: {data.events[1].meta.time}</h3>
					<h3 class="pl-10 pr-10">Venue: {data.events[1].meta.venue}</h3>
					{#if isOver(data.events[1].meta.date)}
						<h3 class="text-munsoc-gold">This event is over!</h3>
					{:else}
						<button
							class="register-button"
							onclick={window.open(data.events[1].meta.registrationLink, '_blank')}
						>
							Register Here!
						</button>
					{/if}
				</div>
			</div>
		</div>
		<div class="text-right md:pr-10 pr-5 text-xl">
			<a href="/events">See more Events</a>
			<div class="inline arrow text-munsoc-gold">-></div>
		</div>
		<hr class="ml-10 mr-10" />

		<!-- PRESIDENTS -->

		<h1 class="p-10 text-center">Meet Our Heads</h1>

		<div class="wrapper mb-12">
			{#each presidents as person}
				<div class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md inline-block">
					<div class="flex justify-center text-xl">
						<img src={person.Photo} alt="core member" class="w-11/12 h-auto rounded-md max-w-md" />
					</div>
					<div class="card-content">
						<h1 class="pr-10 pl-10 text-center">
							{person.Name}
						</h1>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	@font-face {
		font-family: Le Jour Serif;
		src: url('/le-jour-serif.ttf');
	}

	.font-le-jour-serif {
		font-family: Le Jour Serif;
	}

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
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	/* On mouse-over, add a deeper shadow */
	.card:hover {
		border: 2px solid var(--munsoc-gold);
		box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
	}

	/* Add some padding inside the card container */
	.card-content {
		padding-bottom: 30px;
	}
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 420px) {
		.wrapper {
			display: block;
			align-items: center;
		}
		.card {
			width: auto;
		}
	}

	.arrow {
		font-family: 'JetBrains Mono', monospace;
	}

	.register-button {
		width: 80%;
		padding: 8px;
		color: var(--munsoc-gold);
		font-size: x-large;
		font-weight: bold;
		background-color: var(--button-color);
		border-radius: 6px;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		background-color: var(--body-slate);
		border: 2px solid var(--body-slate);
	}
	.register-button:hover {
		border-color: var(--munsoc-gold);
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
	}
</style>
