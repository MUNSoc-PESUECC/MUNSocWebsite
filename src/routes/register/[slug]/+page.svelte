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
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl">
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
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl">
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
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl">
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
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl">
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
				<div class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl">
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
	{:else if data.redirect == 'Delegation'}
		<div
			class="col-span-1 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10 "
		>
			<div class="font-le-jour-serif text-munsoc-purple m-3 lg:text-4xl text-3xl">
				GUIDELINES FOR DELEGATION REGISTRATION
			</div>
			<div class="mb-4 ml-4 mr-4 mt-2 text-munsoc-purple prose">
				<h4>
					1. Visit the MUNSoc PESU ECC Website: <a href="https://munsocecc.vercel.app/"
						>MUNSoc ECC</a
					>
				</h4>
				<h4>2. Navigate to the UniCon home page and click on the "Register" button.</h4>
				<h4>3. Select "Register as Delegation" to begin the registration process.</h4>
				<h4>4. On the bottom of this page, locate the "Register Now as Delegation" button.</h4>
				<h4>
					5. A Razorpay page will open. Examine the allocation matrix in the description and consult
					with your delegation to finalize preferred allocation requests.
				</h4>
				<h4>
					6. Access the Google Sheet in the Payment Details tab questions provided on the Razorpay
					page.
				</h4>
				<h4>
					7. Duplicate the given sheet and complete the information for your delegation on each
					committee's page.
				</h4>
				<h4>
					8. Once you've filled in the duplicated sheet, make it visible to everyone for viewing and
					copy the link.
				</h4>
				<div class="font-bold">
					9. UniCon 2024 mandates each delegation to have at least one delegate in each committee,
					including IPC (International Press Corps). Failure to comply with this rule will result in
					non-acceptance of the registration, and a refund will not be processed. Please carefully
					consider this requirement and ensure that your delegation meets the committee
					representation criteria before proceeding with the registration process.
				</div>
				<h4>10. Paste the link in the space provided on the Razorpay page.</h4>
				<h4>
					11. Sum up the total number of delegates for whom you've filled in the details on the
					sheet. Enter this count as the number of delegates you are paying for.
				</h4>
				<h4>12. Click "Pay" and proceed to the payment.</h4>
				<h4>
					13. After the payment is successful, you will receive a confirmation email from Razorpay.
				</h4>
				<p>
					By following these steps, your delegation will successfully register for UniCon 2024. If
					you have any questions or concerns, feel free to reach out to <a
						href="mailto:unicon.pesu@gmail.com">unicon.pesu@gmail.com</a
					> for assistance.
				</p>
			</div>
		</div>
	{/if}

	<div class="flex flex-col lg:flex-row items-center justify-center m-8 pb-4 pl-4 pr-4]">
		<a
			class="lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			href={'https://docs.google.com/spreadsheets/d/1D1AgYFibXWpm3zFWOuHluX5sxkwzl48mPDrsCqN5rkQ/edit#gid=' +
				GIDs[data.redirect]}
			target="_blank">View Allocation Matrix</a
		>
		<a
			class="lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full my-3 lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			href={'https://pages.razorpay.com/UniCon2024-' + data.redirect}
			>Register as {data.redirect == 'Delegation' ? 'Delegation' : 'Delegate'}</a
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
	.prose {
		max-width: none;
	}
	.prose h4 {
		font-weight: normal;
		margin: 6px;
	}
	
</style>
