<script>
	//@ts-nocheck
	export let data;

	function changeImage() {
		const image = document.getElementById('easterEggImage');
		image.src = 'https://i.postimg.cc/JzRrdvJt/easter.jpg';
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>

<main>
	<title>MUNSoc PESU-ECC | ABOUT</title>
	<div class="bg-body-slate prose prose-invert min-h-screen">
		<h1 class="p-6 text-center">About Us</h1>
		<h4 class="md:pr-32 md:pl-32 pr-10 pl-10 mb-6 font-normal text-black lg:text-lg">
			UniCon is the inaugural Model United Nations Conference hosted by MUNSoc PESUECC. We are
			dedicated to paving the way for the leaders of tomorrow, empowering them to navigate the
			complexities of our ever-evolving world.
		</h4>
		<h4 class="md:pr-32 md:pl-32 pr-10 pl-10 mb-6 font-normal text-black lg:text-lg">
			Since its foundation in 2019, MUNSoc PESU-ECC has grown into a well established and reputed
			organisation within the MUN circuit. With a remarkable track record of success, the society
			has maintained an impressive placement record at the inter-collegiate level and aims to reach
			greater heights in the years to come.
		</h4>
		<h4 class="md:pr-32 md:pl-32 pr-10 pl-10 mb-6 font-normal text-black lg:text-lg">
			UniCon heralds the debut of our society’s efforts at such a level, welcoming hundreds of
			delegates across 6 committees to engage with pertinent agendas. Guided by an outstanding
			Executive Board, our conference prioritizes fair and meaningful deliberation.
		</h4>
		<h4 class="md:pr-32 md:pl-32 pr-10 pl-10 mb-6 font-normal text-black lg:text-lg">
			To represent all the values that UniCon stands for, we have chosen the Triskele, a Celtic
			symbol that holds profound significance. This emblem embodies the constant evolution and the
			transformative nature of existence; it’s dynamic spirals reflecting the journey of
			development, strength and progress.
		</h4>
		<h4 class="md:pr-32 md:pl-32 pr-10 pl-10 mb-6 font-normal text-black lg:text-lg">
			We hope that these values pervade all levels of our conference, and provide an exceptional and
			well rounded experience.
		</h4>
		<h4 class="md:pr-32 md:pl-32 pr-10 pl-10 mb-6 font-normal text-black lg:text-lg">
			On that note, Team UniCon cordially invites you to participate, engage in discourse, and
			collaborate to craft solutions that leave an enduring imprint on tomorrow.
		</h4>
		<hr class="ml-10 mr-10 bg-munsoc-purple" />
		<h1 class="text-center mb-10">Awards</h1>
		<div class="wrapper">
			{#each data.awards as award}
				<div class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md inline-block bg-munsoc-alabaster">
					<h2 class="pr-10 pl-10 text-center mt-5 font-extrabold text-2xl">
						{award.meta.conferenceName}
					</h2>
					<div class="flex justify-center image-div">
						{#if award.meta.conferenceName == 'BMSMUN 2023'}
							<img
								id="easterEggImage"
								src={award.meta.img}
								alt="award"
								class="w-11/12 h-auto rounded-md max-w-md m-0 mb-10"
								onclick={changeImage}
								onkeydown={changeImage}
							/>
						{:else if award.meta.img}
							<img
								src={award.meta.img}
								alt="award"
								class="w-11/12 h-auto rounded-md max-w-md m-0 mb-10"
							/>
						{/if}
					</div>

					<div class="prizes pl-2 pr-2 md:pr-5 md:pl-5">
						<div class="h-auto items-center">
							{#each Object.entries(award.meta.awardeeAward) as [person, award]}
								<div class="eachPrizes">
									<h3 class="inline-block m-0 text-right text-munsoc-gold pt-2 md:text-xl text-sm">
										{person}
									</h3>
									<h3
										class="text-center flex items-center m-0 pt-2 pb-2 md:text-xl text-sm font-normal text-munsoc-purple"
									>
										{award}
									</h3>
									<hr class="col-span-2 m-0" />
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #531c63;
		font-family: 'Lato', sans-serif;
	}
	body {
		overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
	}
	.prose {
		max-width: none;
	}
	.prose h2,
	h1 {
		color: var(--munsoc-gold);
		text-decoration: none;
	}
	.prose h4 {
		font-weight: normal;
	}
	.prose h3 {
		margin: 0;
	}

	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		margin-bottom: 30px;
		border: 2px solid var(--munsoc-gold);
	}

	/* Add some padding inside the card container */
	.prizes {
		padding-bottom: 30px;
	}

	.eachPrizes {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 10px;
	}

	.wrapper {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		/* grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); */
		grid-gap: 28px;
	}

	@media (max-width: 420px) {
		.wrapper {
			display: block;
			align-items: center;
		}
		.card {
			display: block;
		}
		.prose h1 {
			font-size: x-large;
		}
		.prose h2 {
			font-size: medium;
		}
	}
</style>
