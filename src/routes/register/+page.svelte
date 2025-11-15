<script>
	//import { div } from "three/tsl";

	//const LOKSABHA_ENABLE = false;
	//const HRC_ENABLE = false;
	//const HCC_ENABLE = false;
	
	
	// 2025 Committees
	
	const UNSC_ENABLE = true; 
	const DISEC_ENABLE = true; 
	const IPC_ENABLE = false;  
	const CCC_ENABLE = true;
	const AIPPM_ENABLE = true;
	const UNHRC_ENABLE = true;
	const UNODC_ENABLE = true;

	// Thes flags take bool values to toggle the cards' status
</script>

<main class="min-h-screen">
	<div class="bg-body-slate min-h-screen">
		<div class="heading flex flex-col justify-center items-center lg:mt-6 m-4">
			<h1 class="lg:text-6xl text-3xl my-4 text-munsoc-purple font-le-jour-serif">
				Select Committee
			</h1>
			<a
				class="lg:m-4 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline" href="https://rzp.io/rzp/oaktSN6o" target="_blank">Register as Delegate</a
			>
			<a 
			class="lg:m-4 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			>Register as Delegation (Closed)</a
		>
		</div>
		<!-- <div class="flex justify-center items-center mb-24 p-4 h-full">
			<div class="wrapper min-h-[80vh] justify-items-center">
				{#if UNSC_ENABLE}
					<a href="/register/UNSC">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tl-lg lg:mb-1 lg:mr-1"
							src="images/0.jpg"
							alt="UN Security Council"
						/>
					</a>
				{:else}
					<div class="disabled-card">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
							src="images/0.jpg"
							alt="UN Security Council"
						/>
					</div>
				{/if}
				{#if DISEC_ENABLE}
					<a href="/register/DISEC">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mb-1 lg:mr-1"
							src="images/1.jpg"
							alt="UNGA DISEC"
						/>
					</a>
				{:else}
					<div class="disabled-card">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
							src="images/1.jpg"
							alt="UNGA DISEC"
						/>
					</div>
				{/if}
				{#if HRC_ENABLE}
					<a href="/register/HRC">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tr-lg lg:mb-1 lg:mr-1"
							src="images/2.jpg"
							alt="Human Rights Council"
						/>
					</a>
				{:else}
					<div class="disabled-card">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
							src="images/2.jpg"
							alt="Human Rights Council"
						/>
					</div>
				{/if}
				{#if HCC_ENABLE}
					<a href="/register/HCC">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-bl-lg lg:mr-1"
							src="images/3.jpg"
							alt="Historical Crisis Committee"
						/>
					</a>
				{:else}
					<div class="disabled-card">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
							src="images/3.jpg"
							alt="Human Rights Council"
						/>
					</div>
				{/if}
				{#if LOKSABHA_ENABLE}
					<a href="/register/LokSabha">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
							src="images/4.jpg"
							alt="Lok Sabha"
						/>
					</a>
				{:else}
					<div class="disabled-card">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
							src="images/4.jpg"
							alt="Lok Sabha"
						/>
					</div>
				{/if}

				{#if IPC_ENABLE}
					<a href="/register/IPC">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-br-lg lg:mr-1"
							src="images/5.jpg"
							alt="International Press Corps"
						/>
					</a>
				{:else}
					<div class="disabled-card">
						<img
							class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
							src="images/5.jpg"
							alt="International Press Corps"
						/>
					</div>
				{/if}
			</div>
		</div> -->
		<div class="my-24">
			<div class="flex items-center justify-center flex-wrap gap-0">
				{#if UNSC_ENABLE}
				<a
					href="/register/UNSC"
				>
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/1.png"
						alt="UN Security Council"
					/>
				</a>
				{:else}
				<div
					class="disabled-card"
				>
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/1.png"
						alt="UN Security Council"
					/>
					</div>
				{/if}
				{#if CCC_ENABLE}
				<a
					href="/register/CCC"
				>
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/ccc.png"
						alt="Continuous Crisis Committee"
					/>
				</a>
				{:else}
				<div
					class="disabled-card"
				>
				<img
				class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
				src="images/2025/2.png"
				alt="Join Crisis Committee"
			/>
				</div>
				{/if}
			</div>
			<div class="flex items-center justify-center flex-wrap">
				{#if AIPPM_ENABLE}
				<a
				href="/register/AIPPM"
			>
				<img
					class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
					src="images/2025/3.png"
					alt="All India Political Parties Meet"
				/>
			</a>

				{:else}
				<div class="disabled-card">
					<img
					class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
					src="images/2025/3.png"
					alt="All India Political Parties Meet"
				/>
				</div>
				{/if}
				{#if DISEC_ENABLE}
				<a
					href="/register/DISEC"
				>
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/5.png"
						alt="Disarmament and International Security Committee"
					/>
				</a>
				{:else}
				<div class="disabled-card">
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/5.png"
						alt="Disarmament and International Security Committee"
					/>
				</div>
				{/if}
			</div>
			<div class="flex items-center justify-center flex-wrap">
				{#if UNHRC_ENABLE}
				<a
					href="/register/UNHRC"
				>
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/6.png"
						alt="United Nations Human Rights Committee"
					/>
				</a>
				{:else}
					<div class="disabled-card">
						<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/6.png"
						alt="United Nations Human Rights Committee"
					/>
					</div>
				{/if}
				{#if UNODC_ENABLE}
				<a
					href="/register/UNODC"
				>
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/7.png"
						alt="United Nation Office on Drugs and Crime"
					/>
				</a>
				{:else}
				<div class="disabled-card">
					<img
						class="max-h-[40vh] card m-1 rounded-xl lg:rounded-xl lg:mb-1 lg:mr-1"
						src="images/2025/7.png"
						alt="United Nation Office on Drugs and Crime"
					/>
				</div>
				{/if}
			</div>
		</div>
	</div>
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

	.disabled-card {
		opacity: 0.5;
		filter: grayscale(70%);
		cursor: not-allowed;
	}
</style>
