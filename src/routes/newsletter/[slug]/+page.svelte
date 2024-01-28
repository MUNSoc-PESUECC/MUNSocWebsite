<script>
	// @ts-nocheck
	export let data;
	let formattedDate = new Date(data.date).toLocaleDateString('default', {
		month: 'long',
		year: 'numeric'
	});
	data.embedLink = data.embedLink.slice(0, -4) + 'preview';
	console.log(data.embedLink);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>

<main>
	<title>{'NEWSLETTER | ' + formattedDate.toUpperCase()}</title>
	<body class="bg-body-slate">
		<div class="wrapper">
			<div class="canvaEmbed mr-1 ml-1 md:ml-3 md:mr-3">
				<iframe
					title="newsletter"
					loading="lazy"
					style="position: absolute; width: 100%; height: 100%; top: 0; left: 50; border: none; padding: 0;margin: 0;"
					class="iframeEmbed"
					src={data.embedLink}
					allowfullscreen="allowfullscreen"
					allow="fullscreen"
				/>
			</div>
		</div>
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
	.prose h1 {
		color: var(--munsoc-gold);
	}

	.content :global(img) {
		width: 100%;
		padding-left: 10%;
		padding-right: 10%;
	}

	.canvaEmbed {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		margin: 0 auto;
		height: 0;
		padding-top: 141.4286%;
		padding-bottom: 0;
		box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
		margin-top: 1.6em;
		margin-bottom: 0.9em;
		overflow: hidden;
		border-radius: 8px;
		will-change: transform;
	}

	@media (min-width: 1000px) {
		.iframeEmbed {
			max-width: 70%;
		}
	}
</style>
