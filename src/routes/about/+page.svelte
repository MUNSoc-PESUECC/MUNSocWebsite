<script>
  //@ts-nocheck
  export let data;

  function changeImage(){
    const image = document.getElementById("easterEggImage");
    image.src = "https://i.postimg.cc/JzRrdvJt/easter.jpg";
  }

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet">

<main>
    <title>MUNSoc PESU-ECC | ABOUT</title>
    <body class = "bg-body-slate prose prose-invert">
        <h1 class="p-10 text-center">About Us</h1>
        <h4 class = "md:pr-32 md:pl-32 pr-10 pl-10 font-normal">
          MUNSoc PESU-ECC was established in 2019, by Ashwathi Jayakumar and Akshaya Visvanathan, who had noticed the lack of any kinds of debating or diplomatic clubs on campus. Since then, we have established ourselves as one of the most happening and reputed club on the campus.
        </h4>
        <h4 class = "pt-10 pb-10 md:pr-32 md:pl-32 pr-10 pl-10 font-normal">
          In 2021, the MUNSoc legacy was passed on to two very highly accomplished students, Anurag G and Anirudh Rowjee, the first few people to be recruited into the club as members and bringing awards home for the club. Under their leadership, our members have won awards and accolades in a number of distinguished intercollegiate MUNs.
        </h4>
        <hr>


        <!-- AWARDS -->
        <h1 class = "text-center p-10">Our Awards</h1>
        <div class = "wrapper">
          {#each data.awards as award}
          <div class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md inline-block">
            <h2 class = "pr-10 pl-10 text-center mt-5 font-extrabold text-2xl">
              {award.meta.conferenceName}
          </h2>
          <div class = "flex justify-center image-div">
            {#if award.meta.conferenceName == "BMSMUN 2023"}

            <img
            id = "easterEggImage"
            src="{award.meta.img}" 
            alt="award"
            class="w-11/12 h-auto rounded-md max-w-md m-0 mb-10"
            on:click={changeImage}
            on:keydown={changeImage}
            >

            {:else}
            <img src="{award.meta.img}" 
            alt="award" 
            class="w-11/12 h-auto rounded-md max-w-md m-0 mb-10"
            >
            {/if}

          </div>

          <div class = "prizes pl-2 pr-2 md:pr-5 md:pl-5">
            <div class = "h-auto items-center">
            {#each Object.entries(award.meta.awardeeAward) as [person, award]}
              <div class = "eachPrizes">
                <h3 class = "inline-block m-0 text-right text-munsoc-gold pt-2 md:text-xl text-sm">{person}</h3>
                <h3 class = "text-center flex items-center m-0 pt-2 pb-2 md:text-xl text-sm font-normal">{award}</h3>
                <hr class = "col-span-2 m-0">
              </div>
            {/each}
          </div>
          </div>
          </div>
      
          {/each}
        </div>
    </body>
</main>




<style>
  :root{
    --munsoc-gold: #C0A960;
    --body-slate: #232C3A;
    font-family: 'Lato', sans-serif;
  }
  body{
    overflow-x: hidden; /* to fix a weird bug of horizontal scroll bar appearing out of nowhere */
  }
  .prose{
    max-width: none;
  }
  .prose h2, h1{
    color: var(--munsoc-gold);
    text-decoration: none;
    
  }
  .prose h4{
    font-weight: normal;
  }
  .prose h3{
    margin:0;
  }



  .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); 
  transition: 0.5s;
  margin-bottom: 30px;
  background-color: #202c40;
  border: 5px solid var(--munsoc-gold);
}


/* Add some padding inside the card container */
.prizes {
  padding-bottom: 30px;
}

.eachPrizes{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}


.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}



  @media (max-width: 420px) {
    .wrapper {
      display:block;
      align-items: center;
    }
    .card{
      display:block;
    }
    .prose h1{
      font-size:x-large;
    }
    .prose h2{
      font-size:medium;
    }
  }


</style>
