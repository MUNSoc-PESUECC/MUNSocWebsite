<script>
// @ts-nocheck

   export let data
  const presidents = [
    {
      Name: "Abhiram Dasika",
      Photo: "https://i.imgur.com/SdChrcL.png",
    },
    {
      Name: "Harsh Somvanshi",
      Photo: "https://i.imgur.com/YFnnr3q.png",
    },
    ]
</script>





<main>
  <title>MUNSOC-PESUECC</title>
  <body class = "bg-body-slate prose prose-invert">
    <h1 class="p-10 text-center">Recent Posts</h1>
    {#each data.posts as post, i}
      {#if i < 2}
          <div class="card ml-10 mr-10 rounded-md text-center" onclick="window.location='{post.path}'">
            <div class = "flex justify-center"><img src="{post.meta.img}" alt="" class="w-2/3 h-auto rounded-md max-w-md"></div>
            
            <div class = "card-content">
            <h1 class = "pr-10 pl-10">
              <a href={post.path}>
                {post.meta.title}
              </a>
            </h1>
            <div class = "pl-10 pr-10 text-xl">Published: {post.meta.date} </div> 
            <div class = "pl-10 pr-10">{post.meta.description} </div> 
          </div>
          </div>
      {/if}
      {/each}


    <hr class="pl-10 pr-10">

    <h1 class="p-10 text-center">Meet Our Heads</h1>
    {#each presidents as person}
    <div class="card ml-10 mr-10 rounded-md">
      <div class = "flex justify-center"><img src="{person.Photo}" alt="core member" class="w-2/3 h-auto rounded-md max-w-md"></div>
      <div class = "card-content">
      <h1 class = "pr-10 pl-10 text-center">
          {person.Name}
      </h1>
    </div>
    </div>

    {/each}
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
  .prose a{
    color: var(--munsoc-gold);
    text-decoration: none;
  }
  .prose h1{
    color: var(--munsoc-gold);
  }

  .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.5s;
  margin-bottom: 30px;
  background-color: #202c40;
  border: 5px solid #202c40;
  cursor: pointer;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  border-color: var(--munsoc-gold);
  box-shadow: 0 16px 32px rgba(0,0,0,0.5);
}

/* Add some padding inside the card container */
.card-content {
  padding-bottom: 30px;
}
</style>


