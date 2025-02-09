<script>
	// @ts-nocheck
	let LOKSABHA_AGENDA =
		'Discussion on the implications of implementing the Uniform Civil Code in India';
	export let data;
	let GIDs = {
		DISEC: '1507689500',
		UNSC: '1379504494',
		UNHRC: '0',
		CCC: '1180994174',
		AIPPM: '1530097759',
		IPC: '1479207330',
		UNODC: '173368057',
		Delegation: 'null'
	};
</script>

<main class="bg-body-slate min-h-screen">
	<div class="lg:text-6xl text-4xl text-munsoc-gold text-center p-2 m-8 font-le-jour-serif">
		{data.redirect}
	</div>
	{#if data.redirect == 'DISEC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 ml-12 mr-12 justify-items-center">
			<img
				class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:mb-1 lg:mr-1"
				src="/images/2025/5.png"
				alt="UNGA DISEC"
			/>
			<div
				class="lg:col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
			>
				<div
					class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl"
				>
					AGENDA
				</div>
				Deliberating on Strengthening the Arms Trade Treaty
			</div>
		</div>
	{:else if data.redirect == 'UNSC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 mx-12 justify-items-center">
			<img
				class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tl-lg lg:mb-1 lg:mr-1"
				src="/images/2025/1.png"
				alt="UN Security Council"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
			>
				<div
					class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl"
				>
					AGENDA
				</div>
				Situation in Haiti
			</div>
		</div>
	{:else if data.redirect == 'UNHRC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 mx-12 justify-items-center">
			<img
				class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tr-lg lg:mb-1 lg:mr-1"
				src="/images/2025/6.png"
				alt="Human Rights Council"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
			>
				<div
					class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl"
				>
					AGENDA
				</div>
				Deliberating on Migration rights at the US-Mexico Border with special emphasis on child protection
			</div>
		</div>
	{:else if data.redirect == 'UNODC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 mx-12 justify-items-center">
			<img
				class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-tr-lg lg:mb-1 lg:mr-1"
				src="/images/2025/7.png"
				alt="Human Rights Council"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
			>
				<div
					class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl"
				>
					AGENDA
				</div>
				Ensuring access to justice in Sub Saharan Africa
			</div>
		</div>
	{:else if data.redirect == 'CCC'}
		<div class="grid grid-cols-1 lg:grid-cols-3 mx-12 justify-items-center">
			<img
				class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:rounded-bl-lg lg:mr-1"
				src="/images/2025/ccc.png"
				alt="Historical Crisis Committee"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
			>
				<div
					class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl"
				>
					AGENDA
				</div>
				Soviet Invasion of Afghanistan Freeze Date: December 24, 1979
			</div>
		</div>
	{:else if data.redirect == 'AIPPM'}
		<div class="grid grid-cols-1 lg:grid-cols-3 mx-12 justify-items-center">
			<img
				class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
				src="/images/2025/3.png"
				alt="Lok Sabha"
			/>
			<div
				class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
			>
				<div
					class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl"
				>
					AGENDA
				</div>
				Examining the practicality of a nationwide caste-based census in India, and analyzing its impact on policy, social justice, and resource distribution
			</div>
		</div>
	{:else if data.redirect == 'IPC'}
	<div class="grid grid-cols-1 lg:grid-cols-3 mx-12 justify-items-center">
		<img
			class="max-h-[50vh] card mb-1 rounded-xl lg:rounded-none lg:mr-1"
			src="/images/2025/4.png"
			alt="Lok Sabha"
		/>
		<div
			class="col-span-2 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
		>
			<div
				class="font-le-jour-serif text-munsoc-gold font-semibold m-3 mb-5 lg:text-5xl text-3xl"
			>
				AGENDA
			</div>
			Reporting on Conference proceedings and offering a distinctive journalistic perspective on diplomatic debates and resolutions
		</div>
	</div>
	{:else if data.redirect == 'Delegation'}
		<div
			class="col-span-1 flex flex-col justify-center items-center text-center text-xl text-munsoc-purple lg:px-10"
		>
			<div class="font-le-jour-serif text-munsoc-purple m-3 lg:text-4xl text-3xl">
				GUIDELINES FOR DELEGATION REGISTRATION
			</div>
			<div class="text-left px-2 lg:px-10">
				<div class="mb-4 ml-4 mr-4 mt-2 text-munsoc-purple prose">
					<h4>
						1. Visit the MUNSoc PESU ECC Website: <a href="https://munsocecc.vercel.app/"
							>MUNSoc ECC</a
						>
					</h4>
					<h4>2. Navigate to the UniCon home page and click on the "Register Now" button.</h4>
					<h4>3. Select "Register as Delegation" to begin the registration process.</h4>
					<h4>4. On the bottom of this page, locate the "Register Now as Delegation" button.</h4>
					<h4>
						5. A Razorpay page will open. Examine the allocation matrix in the description and
						consult with your delegation to finalize preferred allocation requests.
					</h4>
					<h4>
						6. Make a public view-only copy of the following sheet and fill in details of all
						delegates: <a
							target="_blank"
							href="https://docs.google.com/spreadsheets/d/1DXTaiCNLMIKL1ez98MtbhGOrJ0e1QeJX7eeE2XyrARU/edit?usp=sharing"
							class="text-munsoc-purple"
						>
							link here</a
						>. Submit the link to the filled sheet in the Razorpay page.
					</h4>
					<div class="font-extrabold">
						7. UniCon 2025 mandates each delegation to have at least 10 delegates with a minimum of 1 Delegate in each committee with additional delegates taking part in any other committee of choice. Failure to comply
						with this rule will result in non-acceptance of the delegation and all delegates who
						have paid through said delegation will be considered individual delegates. Please
						carefully consider this requirement and ensure that your delegation meets the committee
						representation criteria before proceeding with the registration process.
					</div>
					<h4>
						8. The maximum delegation size is of 30 delegates. 
					</h4>
					<h4>
						9. Sum up the total number of delegates for whom you've filled in the details on the
						sheet. Enter this count as the number of delegates you are paying for. By default, the number of delegates has been set to 10 delegates on the razorpay page.
						</h4>
					<h4>
						10. Click "Pay" and proceed to the payment.
					</h4>
					<h4>
						11. After the payment is successful, you will receive a confirmation email from
						Razorpay.
					</h4>
					<p>
						By following these steps, your delegation will successfully register for UniCon 2024. If
						you have any questions or concerns, feel free to reach out to <a
							href="mailto:unicon.pesu@gmail.com">unicon.pesu@gmail.com</a
						> for assistance.
					</p>
				</div>
			</div>
		</div>
	{/if}

	<div class="flex flex-col lg:flex-row items-center justify-center m-8 pb-4 pl-4 pr-4]">
		{#if data.redirect == 'Delegation'}
		<a
			class="lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			href={'https://rzp.io/rzp/uzRd8sJ'}
			target="_blank">Register Now as Delegation</a
		>
		{:else}
		<a
			class="lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			href={' https://docs.google.com/spreadsheets/d/1bP1pF4N9WGOK8g5IVYce3y9FzijFEMWrGCONQ6w75Ks/edit#gid=' +
				GIDs[data.redirect]}
			target="_blank">View Allocation Matrix</a
		>
		{/if}
		<!-- <a
			class="lg:m-2 text-2xl lg:text-3xl text-white bg-[#461854] rounded-full my-3 lg:mx-8 lg:px-8 px-4 py-2.5 text-center transition-all ease-linear duration-100 inline-block no-underline"
			href={'https://pages.razorpay.com/UniCon2024-' + data.redirect}
			>Register as {data.redirect == 'Delegation' ? 'Delegation' : 'Delegate'}</a
		> -->
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
