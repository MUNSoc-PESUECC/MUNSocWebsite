<script>
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<main>
	<div class="bg-body-slate mb-5 lg:mb-20">
		<div class="heroSection h-full flex flex-col justify-end mt-2 lg:mt-8">
			<div
				class="wrapper grid grid-cols-1 lg:grid-cols-3 justify-items-stretch lg:ml-16 lg:mr-16 lg:border border-munsoc-purple"
			>
				<div class="flex items-center justify-center">
					<div class="vertical grid justify-items-center lg:justify-items-start">
						
						<div class="text-5xl lg:text-8xl text-munsoc-purple ml-1 flex flex-col items-center justify-center">
							<img
							class="logo h-24 mt-5 lg:mt-0 lg:h-32 w-autom lg:ml-1 mb-6"
							src="images/UniConLogo.png"
							alt="unicon logo"
							/>
							<span class="text-5xl lg:text-8xl text-munsoc-purple font-le-jour-serif">UNICON</span>
							<span class="text-2xl lg:text-3xl tracking-wider">UNITED CONFERENCE</span>
						</div>
						<div class="text-xl lg:text-2xl text-munsoc-gold ml-1 mb-2">MUNSoc PESUECC</div>
						<img
							class="instagram hidden lg:block py-2"
							src="images/insta.png"
							alt="insta logo"
							onclick={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
							onkeydown={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
						/>
					<!--<a
						class="text-lg text-white bg-[#461854] rounded-full mx-8 lg:mx-0 px-8 py-2.5 my-1 text-center transition-all ease-linear duration-100 inline-block no-underline"
						href="/unicon-info">CONFERENCE INFORMATION</a
					>-->
					<a
						class="text-lg text-white bg-[#461854] rounded-full mx-8 lg:mx-0 px-8 py-2.5 my-4 text-center transition-all ease-linear duration-100 inline-block no-underline"
						href="/register">REGISTER NOW</a
					>
					<!-- <a
						class="text-lg text-white bg-[#461854] rounded-full mx-8 lg:mx-0 px-8 py-2.5 my-1 text-center transition-all ease-linear duration-100 inline-block no-underline" 
						href="/accommodation">ACCOMMODATION</a> -->					</div>
				</div>

				<div class="col-span-2 w-full h-full flex justify-end">
					<img
						src={innerWidth >= 1024
							? 'images/LandingPage2025.png'
							: 'images/LandingPageM2025.png'}
						class="lg:max-w-full w-screen h-auto"
						alt="landing-bg"
						onclick={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
						onkeydown={() => window.open('https://www.instagram.com/munsoc.pesuecc/', '_blank')}
					/>
				</div>
			</div>
		</div>
		<div class="three-buttons flex flex-wrap items-center justify-around mt-10">
			<!-- <a -->
			<!-- 	class="m-4 lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline" -->
			<!-- 	href="/accommodation">Accommodation</a -->
			<!-- > -->
			<!-- <a -->
			<!-- 	class="m-4 lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline" -->
			<!-- 	href="/unicon-info">Itinerary & Guides</a -->
			<!-- > -->
			<!-- <a
				class="m-4 lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
				href="/">Unga Bunga</a
			> -->
		</div>

		<div class="bg-munsoc-gold p-5 lg:w-100">
			<span class="mx-10 text-munsoc-purple font-extrabold text-xl lg:text-4xl">Contact Us</span><br/>
			<span class="mx-10 text-white font-bold text-sm lg:text-xl">Email: unicon.pesu@gmail.com</span><br/>
			<span class="mx-10 text-white font-semibold text-sm lg:text-xl">Himank Jain: +91 9502281002</span><br/>
			<span class="mx-10 text-white font-semibold text-sm lg:text-xl">Shreya Robin: +91 7025148666</span>
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
</style>
