<main>
	<body class="bg-body-slate">
		<h1 class="text-5xl p-10 text-center text-munsoc-purple">COMMITTEES</h1>
		<div class="wrapper lg:mr-28 lg:ml-28 lg:mb-28 lg:mt-12">
			<div><img src="images/0.1.jpg" alt="UN Security Council" class="w-full" /></div>
			<div><img src="images/1.1.jpg" alt="UNGA DISEC" class="w-full" /></div>
			<div><img src="images/2.1.jpg" alt="Human Rights Council" class="w-full" /></div>
			<div><img src="images/3.1.jpg" alt="Historical Crisis Committee" class="w-full" /></div>
			<div><img src="images/4.1.jpg" alt="Lok Sabha" class="w-full" /></div>
			<div><img src="images/5.1.jpg" alt="International Press Corps" class="w-full" /></div>
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
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-gap: 5px;
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
