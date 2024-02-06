<main class="min-h-screen">
	<body class="bg-body-slate min-h-screen">
		<div class="heading flex flex-col justify-center items-center lg:mt-6 m-4">
			<h1 class="lg:text-6xl text-3xl mt-4 text-munsoc-purple font-le-jour-serif">
				Select Committee
			</h1>
			<div><img class="h-10" src="/images/line.png" alt="line" /></div>
		</div>
		<div class="flex justify-center items-center mb-24 p-4 h-full">
			<div class="wrapper min-h-[80vh] justify-items-center">
				<a href="/register/UNSC">
					<img
						class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tl-lg lg:mb-1 lg:mr-1"
						src="images/0.jpg"
						alt="UN Security Council"
					/>
				</a>

				<a href="/register/DISEC">
					<img
						class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mb-1 lg:mr-1"
						src="images/1.jpg"
						alt="UNGA DISEC"
					/>
				</a>

				<a href="/register/HRC">
					<img
						class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tr-lg lg:mb-1 lg:mr-1"
						src="images/2.jpg"
						alt="Human Rights Council"
					/>
				</a>

				<a href="/register/HCC">
					<img
						class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-bl-lg lg:mr-1"
						src="images/3.jpg"
						alt="Historical Crisis Committee"
					/>
				</a>

				<a href="/register/LokSabha">
					<img
						class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
						src="images/4.jpg"
						alt="Lok Sabha"
					/>
				</a>

				<a href="/register/IPC">
					<img
						class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-br-lg lg:mr-1"
						src="images/5.jpg"
						alt="International Press Corps"
					/>
				</a>
			</div>
		</div>
	</body>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #531c63;
		--navbar-slate: #461854;
		font-family: 'lato', sans-serif;
	}
	body {
		overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
	}
	.wrapper {
		display: grid;
		grid-template-areas:
			'card1 card2 card3'
			'card4 card5 card6';
		grid-template-columns: repeat(3, 1fr);
	}

	/* Responsive design */
	@media (max-width: 1024px) {
		.wrapper {
			grid-template-areas:
				'card1'
				'card2'
				'card3'
				'card4'
				'card5'
				'card6';
			grid-template-columns: 1fr; /* Stack cards vertically on small screens */
		}
	}

	.card {
		transition: 0.2s;
	}
	.card:hover {
		box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
	}
	@font-face {
		font-family: Le Jour Serif;
		src: url('/le-jour-serif.ttf');
	}
	.font-le-jour-serif {
		font-family: Le Jour Serif;
	}
</style>
