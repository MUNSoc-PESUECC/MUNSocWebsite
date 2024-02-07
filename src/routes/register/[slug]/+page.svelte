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
		IPC: '900234641'
	};
</script>

<main class="bg-body-slate">
	<div class="lg:text-6xl text-4xl text-munsoc-gold text-center p-2 m-6 font-le-jour-serif">
		{data.redirect == 'IPC' ? 'Register' : 'Agenda'}
	</div>
	{#if data.redirect == 'DISEC'}
		<div class="text-center text-3xl text-munsoc-purple px-10 uppercase">
			Reviewing the role of semiconductor-based microchips in global security with special emphasis
			on it's manufacture and use in modern-day weapons systems
		</div>
	{:else if data.redirect == 'UNSC'}
		<div class="text-center text-3xl text-munsoc-purple px-10 uppercase">
			Deliberating Solutions for the South China Sea Conflict
		</div>
	{:else if data.redirect == 'HRC'}
		<div class="text-center text-3xl text-munsoc-purple px-10 uppercase">
			Preparing an action plan for access of humanitarian aid in conflict zones with specific
			reference to Gaza and Yemen
		</div>
	{:else if data.redirect == 'HCC'}
		<div class="text-center text-3xl text-munsoc-purple px-10 uppercase">Operation Barbarossa</div>
	{:else if data.redirect == 'LokSabha'}
		<div class="text-center text-3xl text-munsoc-purple px-10 uppercase">{LOKSABHA_AGENDA}</div>
	{/if}

	<div class="flex flex-col lg:flex-row items-center justify-center m-8 p-4 min-h-[50vh]">
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
