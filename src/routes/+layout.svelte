<script>
	//@ts-nocheck

	import { page } from '$app/stores';
	const logoAddress = '/images/logo.png';
	let showMenu = false;
	function toggleNavbar() {
		showMenu = !showMenu;
	}

	function navBarItemClicked() {
		if (showMenu) {
			toggleNavbar();
		}
	}
	let innerWidth;
	import '../app.postcss';
</script>


<svelte:window bind:innerWidth />

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>
<meta name="darkreader-lock" />

<nav
	class="lg:pl-5 lg:pr-5 bg-body-slate max-w-screen {$page.url.pathname == '/thankyou'
		? 'hidden'
		: 'lg:flex lg:justify-between lg:items-center'}"
>
	<div class="flex items-center justify-between">
		<a class="" href="/">
			<img width="120" src={logoAddress} alt="logo" class="m-3 {showMenu ? 'mb-0' : ''}" />
		</a>

		<a
			class="font-bold lg:text-xl lg:hidden no-underline {showMenu
				? 'mt-3'
				: ''} text-munsoc-purple"
			href="/">MUNSoc PESU-ECC</a
		>

		<!-- Mobile menu button -->
		<div
			on:click={toggleNavbar}
			on:keydown={toggleNavbar}
			class="flex lg:hidden pr-3 {showMenu ? 'mt-3' : ''}"
		>
			<button
				type="button"
				class="text-white hover:text-munsoc-gold focus:outline-none focus:text-munsoc-gold"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#461854"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Menu open: "flex", Menu closed: "hidden" -->
	<div
		class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0 font-semibold {showMenu
			? 'flex pb-5'
			: 'hidden'}"
	>
		<a
			class="text-lg text-white bg-[#461854] rounded-full mx-8 px-8 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline {showMenu
				? 'mt-5'
				: ''} {['/posts', '/secretariat', '/about', '/accommodation'].includes($page.url.pathname)
				? ''
				: 'hidden'}"
			href="/"
			on:click={navBarItemClicked}>UNICON</a
		>


		<a
			class="text-lg text-[#643572] hover:text-white hover:bg-[#461854] rounded-full px-8 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline {showMenu
				? 'pt-5'
				: ''}"
			href="/posts"
			on:click={navBarItemClicked}>POSTS</a
		>

		<!-- REMOVED FOR UNICON -->
		<!-- <a -->
		<!-- 	class="text-lg text-[#643572] hover:text-white hover:bg-[#461854] rounded-full px-8 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline {showMenu -->
		<!-- 		? 'pt-5' -->
		<!-- 		: ''}" -->
		<!-- 	href="/newsletter" -->
		<!-- 	on:click={navBarItemClicked}>NEWSLETTERS</a -->
		<!-- > -->
		<a
			class="text-lg text-[#643572] hover:text-white hover:bg-[#461854] rounded-full px-8 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline {showMenu
				? 'pt-5'
				: ''}"
			href="/secretariat"
			on:click={navBarItemClicked}>THE SECRETARIAT</a
		>
		<!-- REMOVED FOR UNICON -->
		<!-- <a -->
		<!-- 	class=" text-lg text-[#643572] hover:text-white hover:bg-[#461854] rounded-full px-8 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline {showMenu -->
		<!-- 		? 'pt-5' -->
		<!-- 		: ''}" -->
		<!-- 	href="/events" -->
		<!-- 	on:click={navBarItemClicked}>EVENTS</a -->
		<!-- > -->
		<a
			class="text-lg text-[#643572] hover:text-white hover:bg-[#461854] rounded-full px-8 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline {showMenu
				? 'pt-5'
				: ''}"
			href="/about"
			on:click={navBarItemClicked}>ABOUT</a
		>
	</div>
</nav>

<div class="bottom-long-line">
	<img src={innerWidth >= 1024 ? "/images/longiLine.svg" : "/images/line.png"} alt="divider" class="w-full p-5 lg:p-0">
</div>

<slot />

<footer
	class="bg-munsoc-purple pl-5 pr-5 max-w-screen {$page.url.pathname == '/thankyou'
		? 'hidden'
		: 'block'}"
>
	<div class="footer-content">
		<img src="/images/logo.png" class="w-32" alt="" />
		<h3 class="text-white">MUNSoc PESU-ECC</h3>
		<p>Ad Astra per Aspera</p>
		<ul class="socials m-5">
			<li>
				<a href="https://www.instagram.com/munsoc.pesuecc/" target="_blank" rel="noreferrer"
					><i class="fa fa-instagram" /></a
				>
			</li>
			<li>
				<a href="mailto:munsocecc@pes.edu" target="_blank" rel="noreferrer"
					><i class="fa fa-envelope" /></a
				>
			</li>
			<li>
				<a href="https://github.com/MUNSoc-PESUECC/MUNSocWebsite" target="_blank" rel="noreferrer"
					><i class="fa fa-github" /></a
				>
			</li>
		</ul>
		<div>© MUNSoc PESU-ECC 2023</div>
	</div>
</footer>

<style>
	:root {
		font-family: 'Lato', sans-serif;
		background-color: #f1ede7;
	}

	footer {
		bottom: 0;
		left: 0;
		right: 0;
		height: auto;
		width: 100vw;
		padding-top: 30px;
		padding-bottom: 10px;
		color: #fff;
	}
	.footer-content {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}
	.footer-content h3 {
		margin-top: 0;
		font-size: 2.1rem;
		font-weight: 500;
		text-transform: capitalize;
		line-height: 3rem;
	}
	.socials {
		padding-left: 0;
		padding-top: 0px;
		padding-bottom: 10px;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.socials li {
		margin: 0 20px;
	}

	.socials a {
		text-decoration: none;
		color: #fff;

		padding: 5px;
		border-radius: 100%;
	}

	.socials a:hover {
		border-color: #c0a960;
	}

	.socials a i {
		font-size: 2rem;
		transition: color 0.4s ease;
	}

	.socials a:hover i {
		color: #c0a960;
	}
</style>
