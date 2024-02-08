<script>
	// @ts-nocheck
	let LOKSABHA_AGENDA = 'To Be Announced';
	export let data;
	let GIDs = {
		DISEC: '78860240',
		UNSC: '0',
		HRC: '1071050547',
		HCC: '1985252569',
		LokSabha: '132684112',
		IPC: '900234641',
		Delegation: '0'
	};
</script>

<main class="bg-body-slate min-h-screen">
	<div class="lg:text-6xl text-4xl text-munsoc-gold text-center p-2 m-8 font-le-jour-serif">
		{data.redirect}	
	</div>
	{#if data.redirect == 'DISEC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 ml-24 mr-24 justify-items-center">
			<img
				class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:mb-1 lg:mr-1"
				src="/images/1.1.jpg"
				alt="UNGA DISEC"
			/>
			<div
				class="lg:col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple px-2 lg:px-10 uppercase"
			>
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 lg:text-5xl text-3xl">
					AGENDA
				</div>
				Reviewing the role of semiconductor-based microchips in global security with special emphasis
				on it's manufacture and use in modern-day weapons systems
			</div>
		</div>
	{:else if data.redirect == 'UNSC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 ml-24 mr-24 justify-items-center">
			<img
				class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tl-lg lg:mb-1 lg:mr-1"
				src="/images/0.1.jpg"
				alt="UN Security Council"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10 uppercase"
			>
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 lg:text-5xl text-3xl">
					AGENDA
				</div>
				Deliberating Solutions for the South China Sea Conflict
			</div>
		</div>
	{:else if data.redirect == 'HRC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 ml-24 mr-24 justify-items-center">
			<img
				class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tr-lg lg:mb-1 lg:mr-1"
				src="/images/2.1.jpg"
				alt="Human Rights Council"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10 uppercase"
			>
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 lg:text-5xl text-3xl">
					AGENDA
				</div>
				Preparing an action plan for access of humanitarian aid in conflict zones with specific reference
				to Gaza and Yemen
			</div>
		</div>
	{:else if data.redirect == 'HCC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 ml-24 mr-24 justify-items-center">
			<img
				class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-bl-lg lg:mr-1"
				src="/images/3.1.jpg"
				alt="Historical Crisis Committee"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10 uppercase"
			>
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 lg:text-5xl text-3xl">
					AGENDA
				</div>
				Operation Barbarossa
			</div>
		</div>
	{:else if data.redirect == 'LokSabha'}
		<div class="grid grid-cols-1 lg:grid-cols-3 ml-24 mr-24 justify-items-center">
			<img
				class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
				src="/images/4.1.jpg"
				alt="Lok Sabha"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10 uppercase"
			>
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 lg:text-5xl text-3xl">
					AGENDA
				</div>
				{LOKSABHA_AGENDA}
			</div>
		</div>

	{:else if data.redirect == 'IPC'}
	<div class="flex justify-center items-center">
			<img
				class="max-h-[40vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
				src="/images/5.1.jpg"
				alt="IPC"
			/>
	</div>

	{:else if data.redirect == "Delegation"}
			<div
				class="col-span-1 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10 uppercase"
			>
				<div class="font-le-jour-serif text-munsoc-gold m-3 lg:text-5xl text-3xl">
					GUIDELINES
				</div>

				<div class="m-3">
					<div>Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi</div>
					<br />
					<div>Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi</div>
					<br />
					<div>Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi</div>
					<br />
					<div>Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi Ungi bungi ungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi ungi bungi</div>
				</div>
				
			</div>

	{/if}

	<div
		class="flex flex-col lg:flex-row items-center justify-center m-8 pb-4 pl-4 pr-4]"
	>
		<a
			class="lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			href={'https://docs.google.com/spreadsheets/d/1D1AgYFibXWpm3zFWOuHluX5sxkwzl48mPDrsCqN5rkQ/edit#gid=' +
				GIDs[data.redirect]}
			target="_blank">View Allocation Matrix</a
		>
		<a
			class="lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full my-3 lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			href={'https://pages.razorpay.com/UniCon2024-' + data.redirect}>Register as Delegate</a
		>
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
