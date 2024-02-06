<script>
	// @ts-nocheck

	const coreMembers = [
		{
			Name: 'Abhiram Gopala Dasika',
			Role: 'Secretary General',
			Photo: 'https://i.imgur.com/SdChrcL.png'
		},
		{
			Name: 'Harsh Somvanshi',
			Role: 'Director General',
			Photo: 'https://i.imgur.com/YFnnr3q.png'
		},
		{
			Name: 'Hemanth V',
			Role: 'Charge D’affaires',
			Photo: 'https://i.imgur.com/ECFqzKF.png'
		},
		{
			Name: 'Sukruthi Sanampudi',
			Role: 'Undersecretary General - Delegate Affairs',
			Photo: 'https://i.imgur.com/4r2a1eR.png'
		},
		{
			Name: 'Nikhil Girish',
			Role: 'Undersecretary General - Outreach',
			Photo:
				'https://cdn.discordapp.com/attachments/1080892669313699881/1204470879489228820/lovelypicture.png'
		},
		{
			Name: 'Srinivaasan N S',
			Role: 'Undersecretary General - Finance',
			Photo: 'https://i.imgur.com/P6MnSpZ.png'
		},
		{
			Name: 'Divyansh Vinayak',
			Role: 'Undersecretary General- Logistics ',
			Photo: 'https://i.imgur.com/sLjEDXL.png'
		}
		// {
		// 	Name: 'Garima Bajpayi',
		// 	Role: 'Head Of Marketing',
		// 	Photo: 'https://i.imgur.com/Jeh5Bwj.png'
		// },
		// {
		// 	Name: 'Sphurthi Yandamuri',
		// 	Role: 'Head Of Social Media',
		// 	Photo: 'https://i.imgur.com/HauEJy7.png'
		// },
		// {
		// 	Name: 'Disha Kiran',
		// 	Role: 'Editor-In-Chief',
		// 	Photo: 'https://i.imgur.com/M9SIPEY.png'
		// },
		// {
		// 	Name: 'Avani Dhagam',
		// 	Role: 'Membership Chair',
		// 	Photo: 'https://i.imgur.com/PBFX060.jpg'
		// },
		// {
		// 	Name: 'Anurag G',
		// 	Role: 'Training And Development',
		// 	Photo: 'https://i.imgur.com/HfP0Lv4.png'
		// },
		// {
		// 	Name: 'Babu B',
		// 	Role: 'Training And Development',
		// 	Photo: 'https://i.imgur.com/mEblgB7.png'
		// },
		// {
		// 	Name: 'Shreyas',
		// 	Role: 'Head Of Design',
		// 	Photo: 'https://i.imgur.com/p92FAuC.png'
		// },
		// {
		// 	Name: 'Sarthak S Kumar',
		// 	Role: 'Head Of Design',
		// 	Photo: 'https://i.imgur.com/jGBAj5K.png'
		// },
		// {
		// 	Name: 'Jova Varghese',
		// 	Role: 'Content Designer',
		// 	Photo: ' https://i.imgur.com/X5YW6yg.png'
		// },
		// {
		// 	Name: 'Shreya Gurram',
		// 	Role: 'Web Developer',
		// 	Photo:
		// 		'https://cdn.discordapp.com/attachments/1070378486256124036/1202122131639640064/IMG_20231123_132144_281.jpg'
		// },
		// {
		// 	Name: 'Anurag Rao',
		// 	Role: 'Head of Website Development',
		// 	Photo: 'https://i.imgur.com/VI6ZUhJ.png'
		// }
	];

	function changeImage(id, src) {
		console.log(id);
		const image = document.getElementById(id);
		image.src = src;
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>

<main>
	<title>MUNSoc PESU-ECC | MEMBERS</title>
	<body class="bg-body-slate prose prose-invert">
		<h1 class="p-10 text-center">The Secretariat</h1>
		<div class="wrapper mb-12 lg:ml-6 lg:mr-6">
			{#each coreMembers as person}
				<div class="card ml-5 mr-5 rounded-md inline-block bg-munsoc-alabaster">
					<div class="flex justify-center">
						{#if person.Name == 'Abhiram Dasika'}
							<img
								src={person.Photo}
								id={person.Name}
								alt="core member"
								class="w-11/12 h-auto rounded-md max-w-md"
								on:click={() => {
									changeImage(
										person.Name,
										'https://cdn.discordapp.com/attachments/1080892669313699881/1080904223790739606/16.png'
									);
								}}
								on:keydown={() => {
									changeImage(
										person.Name,
										'https://cdn.discordapp.com/attachments/1080892669313699881/1080904223790739606/16.png'
									);
								}}
							/>
						{:else if person.Name == 'Anurag Rao'}
							<img
								src={person.Photo}
								id={person.Name}
								alt="core member"
								class="w-11/12 h-auto rounded-md max-w-md"
								on:click={() => {
									changeImage(
										person.Name,
										'https://cdn.discordapp.com/attachments/1080892669313699881/1080904224113709168/17.png'
									);
								}}
								on:keydown={() => {
									changeImage(
										person.Name,
										'https://cdn.discordapp.com/attachments/1080892669313699881/1080904224113709168/17.png'
									);
								}}
							/>
						{:else}
							<img
								src={person.Photo}
								alt="core member"
								class="w-11/12 h-auto rounded-md max-w-md"
							/>
						{/if}
					</div>

					<div class="card-content">
						<h1 class="pr-10 pl-10 text-center lg:text-3xl">
							{person.Name}
						</h1>

						<h3 class="pr-10 pl-10 text-center font-medium text-munsoc-purple">
							{person.Role}
						</h3>
					</div>
				</div>
			{/each}
		</div>
	</body>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #531c63;
		--navbar-slate: #461854;
		font-family: 'Lato', sans-serif;
	}
	body {
		overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
	}
	.prose {
		max-width: none;
	}
	.prose h1 {
		color: var(--munsoc-gold);
	}

	.card {
		/* Add shadows to create the "card" effect */
		box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.5);
		transition: 0.5s;
		margin-bottom: 30px;
		border: 2px solid var(--munsoc-gold);
	}

	/* Add some padding inside the card container */
	.card-content {
		padding-bottom: 30px;
	}
	.wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 10px;
		align-items: stretch;
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
			font-size: large;
		}
	}
</style>
