<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			goto('/');
		}, 5000);
	});
</script>

<main>
	<div class="flex justify-center items-center h-screen bg-munsoc-alabaster">
		<div class="lg:grid lg:grid-cols-3 lg:m-24">
			<div class="flex flex-col justify-center items-center lg:mr-6">
				<img src="/images/logo.png" class="w-28 lg:w-48 mb-4" alt="" />
				<h3 class="text-munsoc-purple">MUNSoc PESU-ECC</h3>
				<p class="text-munsoc-purple">Ad Astra per Aspera</p>
			</div>
			<div class="lg:col-span-2 lg:ml-6">
				<div class="grid grid-cols-1">
					<div
						class="text-7xl text-center lg:text-left lg:text-8xl text-munsoc-gold font-le-jour-serif mt-12"
					>
						UNICON
					</div>
					<div
						class="text-xl text-center lg:text-left lg:text-6xl text-munsoc-purple font-le-jour-serif mt-8"
					>
						THANK YOU FOR REGISTERING!
					</div>
				</div>
			</div>
			<ul class="socials m-5 grid grid-cols-3 col-span-3 justify-items-center lg:mt-24">
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
		</div>
	</div>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--navbar-slate: #461854;
		--body-slate: #531c63;
		font-family: 'Lato', sans-serif;
	}
	@font-face {
		font-family: Le Jour Serif;
		src: url('/le-jour-serif.ttf');
	}
	.font-le-jour-serif {
		font-family: Le Jour Serif;
	}
	.socials li {
		margin: 0 20px;
	}

	.socials a {
		text-decoration: none;
		color: var(--navbar-slate);
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
	h3 {
		margin-top: 0;
		font-size: 2.2rem;
		font-weight: 500;
		text-transform: capitalize;
		line-height: 3rem;
	}
</style>
