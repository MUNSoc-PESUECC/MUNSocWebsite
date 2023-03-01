<script>
	// @ts-nocheck

	export let data;


	function isOver(dateString){
		const date = new Date(dateString);
		const today = new Date();
		if (date <= today){
			return true;
		} else{
			return false;
		}
	}
	
	
	function changeImage(event){
	  event.stopPropagation();
      const image = document.getElementById("easterEggImage");
      image.src = "https://i.imgur.com/u4lW09X.jpg";
    }

</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
	rel="stylesheet"
/>

<main>
	<title>MUNSoc PESU-ECC | EVENTS</title>
	<body class="bg-body-slate text-white prose prose-invert">
		<h1 class="px-10 pt-10 text-center">Events</h1>
		<hr />
		{#each data.events as event}
			<div
				class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md"
				onclick="window.location='{event.path}'">

					<div class = "flex justify-center image-div pt-10">


						{#if event.meta.title == "Orientation MUNDay"}
            			<img src="{event.meta.img}" 
						id = "easterEggImage"
						on:click={changeImage}
						on:keydown={changeImage}
            			alt="event" 
            			class="w-11/12 h-auto rounded-md max-w-md m-0 mb-10"
            			>
						{:else}
						<img src="{event.meta.img}" 
            			alt="event" 
            			class="w-11/12 h-auto rounded-md max-w-md m-0 mb-10"
            			>
						{/if}

					
					
				</div>

				<div class="card-content text-center">
					<h1 class="pr-10 pl-10">
						<a href={event.path}>
							{event.meta.title}
						</a>
					</h1>
					<hr class="mr-10 ml-10 mb-5 mt-5" />
					<h3 class="pl-10 pr-10 text-xl">Date: {event.meta.date}</h3>
					<h3 class="pl-10 pr-10 text-xl">Time: {event.meta.time}</h3>
					<h3 class="pl-10 pr-10 text-xl">Venue: {event.meta.venue}</h3>
					{#if isOver(event.meta.date)}
					<h3 class = "text-munsoc-gold">
						This event is over!
					</h3>
					{:else}
					<button class="register-button" onclick="window.open('{event.meta.registrationLink}', '_blank')">
						Register Here!
					  </button>
					{/if}
				</div>
			</div>
		{/each}
	</body>
</main>

<style>
	:root {
		--munsoc-gold: #c0a960;
		--body-slate: #232c3a;
		font-family: 'Lato', sans-serif;
	}
	body {
		overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
	}
	.prose {
		max-width: none;
	}
	.prose a {
		color: var(--munsoc-gold);
		text-decoration: none;
	}
	.prose h1 {
		color: var(--munsoc-gold);
	}

	.card {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transition: 0.5s;
		margin-bottom: 30px;
		background-color: #202c40;
		border: 5px solid #202c40;
		cursor: pointer;
	}

	.card:hover {
		border-color: var(--munsoc-gold);
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
	}

	.card-content {
		padding-bottom: 30px;
	}
	.register-button{
        width:80%;
        padding: 8px;
        color: var(--munsoc-gold);
        font-size:x-large;
        font-weight: bold;
        background-color: var(--button-color);
        border-radius: 6px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transition: 0.5s;
        background-color: #202c40;
        border: 5px solid #202c40;
      }
	  .register-button:hover{
		box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);
	  }      
</style>
