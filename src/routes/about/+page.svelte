<script>
  /**
	 * @type {{ awards: any; }}
	 */
   export let data;
</script>






<main>
    <title>MUNSoc PESU-ECC | ABOUT</title>
    <body class = "bg-body-slate prose prose-invert">
        <h1 class="p-10 text-center">About Us</h1>
        <h4 class = "md:pr-32 md:pl-32 pr-10 pl-10">
            The PESU ECC MUNSoc club was established in the year 2019 by Ashwathi Jayakumar and Akshaya Visvanathan who had noticed the lack of any kinds of debating or diplomatic clubs on the campus. And since then we have established ourselves as one of the most happening and reputed club on the campus.  
        </h4>
        <h4 class = "pt-10 pb-10 md:pr-32 md:pl-32 pr-10 pl-10">
            In 2021, the MUNSoc legacy was passed on to two very highly accomplished delegates namely Anurag G and Anirudh Rowjee who were one of the first few people to be recruited into the club as members and also the ones who started the streak of winning awards. Under their leadership, our club members have won many Best delegates, High commendations, Special Mentions and so on in a number of distinguished intercollegiate MUNs
        </h4>

        <hr>
        <h1 class = "text-center p-10">Our Awards</h1>
        <div class = "wrapper">
          {#each data.awards as award}
          <div class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md inline-block">
            <div class = "flex justify-center"><img src="{award.meta.img}" alt="award" class="w-2/3 h-auto rounded-md max-w-md"></div>
            <div class = "card-content">
            <h2 class = "pr-10 pl-10 text-center m-2">
                {award.meta.title}
            </h2>
            <h4 class = "text-center m-0">Awarded To</h4>
            <h3 class="pr-10 pl-10 text-center text-munsoc-gold">
              {award.meta.awardee}
            </h3>
            <h4 class = "text-center m-0">At {award.meta.place}</h4>
            <p class= "text-center pl-2 pr-2">{award.meta.description}</p>
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
  cursor: pointer;
}

/* On mouse-over, add a deeper shadow */


/* Add some padding inside the card container */
.card-content {
  padding-bottom: 30px;
}
.wrapper { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  }

  @media (max-width: 420px) {
    .wrapper {
      display:block;
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