<script>
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<main>
	<body class="bg-body-slate mb-5 lg:mb-20">
		<div class="heroSection h-full flex flex-col justify-end mt-2 lg:mt-8">
			<div
				class="wrapper grid grid-cols-1 lg:grid-cols-3 justify-items-stretch lg:ml-16 lg:mr-16 lg:border border-munsoc-purple"
			>
				<div class="flex items-center justify-center">
					<div class="vertical grid justify-items-center lg:justify-items-start">
						<img
							class="logo h-20 mt-5 lg:mt-0 lg:h-28 w-autom lg:ml-1 mb-10"
							src="images/logo.png"
							alt="munsoc logo"
						/>
						<div class="text-5xl lg:text-8xl text-munsoc-purple font-le-jour-serif ml-1">
							UNICON
						</div>
						<div class="text-xl lg:text-2xl text-munsoc-gold ml-1 mb-2">MUNSoc PESUECC</div>
						<img
							class="instagram hidden lg:block py-2"
							src="images/insta.png"
							alt="insta logo"
							on:click={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
							on:keydown={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
						/>
						<a
							class="text-lg text-white bg-[#461854] rounded-full mx-8 lg:mx-0 px-8 py-2.5 my-4 text-center transition-all ease-linear duration-100 inline-block no-underline"
							href="/register">REGISTER</a
						>
					</div>
				</div>

				<div class="col-span-2 w-full h-full flex justify-end">
					<img
						src={innerWidth >= 1024 ? 'images/landingBg.png' : 'images/landingBgMobile.png'}
						class="lg:max-w-full w-screen h-auto"
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
