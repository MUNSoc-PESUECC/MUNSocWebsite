<script>
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<main>
	<body class="bg-[#F1EDE7] md:mb-20">
		<div class="heroSection h-full flex flex-col justify-end mt-2 md:mt-8">
			<div
				class="wrapper grid grid-cols-1 md:grid-cols-3 justify-items-stretch md:ml-16 md:mr-16 md:border border-munsoc-purple"
			>
				<div class="flex items-center justify-center">
					<div class="vertical grid justify-items-center">
						<img
							class="logo h-20 md:h-28 w-autom md:ml-1 mb-10"
							src="images/logo.png"
							alt="munsoc logo"
						/>
						<div class="text-5xl md:text-8xl text-munsoc-purple font-le-jour-serif ml-1">
							UNICON
						</div>
						<div class="text-xl md:text-2xl text-munsoc-gold ml-1 mb-2">MUNSoc PESUECC</div>
						<img class="instagram hidden md:block" src="images/insta.png" alt="insta logo" />
						<a
							class="text-lg text-white bg-[#461854] rounded-full mx-8 px-8 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
							href="/register">REGISTER</a
						>
					</div>
				</div>

				<div class="col-span-2 w-full h-full">
					<img
						src={innerWidth >= 1024 ? 'images/landingBg.png' : 'images/landingBgMobile.png'}
						class="max-w-full h-auto"
						alt="landing-bg"
						on:click={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
						on:keydown={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
					/>
				</div>
			</div>
		</div>
	</body>
</main>

<style>
	@font-face {
		font-family: Le Jour Serif;
		src: url('/le-jour-serif.ttf');
	}

	.font-le-jour-serif {
		font-family: Le Jour Serif;
	}
</style>
