<script>
// @ts-nocheck

  export let data;
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
  <title>MUNSoc PESU-ECC</title>
  <body class = "bg-body-slate prose prose-invert">
    
    <!-- LATEST NEWSLETTER -->
    <h1 class="p-10 text-center text-munsoc-gold">Latest Newsletter</h1>
    
    <div class="card md:ml-10 md:mr-10 rounded-md text-center" onclick="window.location='{data.newsletters[0].path}'">
      <div class = "flex justify-center"><img src="{data.newsletters[0].meta.img}" alt="" class="w-2/3 h-auto rounded-md max-w-md"></div>
      
      <div class = "card-content">
      <h1 class = "pr-10 pl-10">
        <a href={data.newsletters[0].path}>
          {data.newsletters[0].meta.title}
        </a>
      </h1>
      <h3>{
        new Date(data.newsletters[0].meta.date).toLocaleDateString('default', { month: 'long', year: 'numeric' })
        }</h3>
    </div>
    </div>

    <hr class="pl-10 pr-10">

    
    
    
    
    <!-- POSTS -->
    <h1 class="p-10 text-center text-munsoc-gold">Recent Posts</h1>
    
          <div class="card md:ml-10 md:mr-10 rounded-md text-center" onclick="window.location='{data.posts[0].path}'">
            <div class = "flex justify-center"><img src="{data.posts[0].meta.img}" alt="" class="w-2/3 h-auto rounded-md max-w-md"></div>
            
            <div class = "card-content">
            <h1 class = "pr-10 pl-10">
              <a href={data.posts[0].path}>
                {data.posts[0].meta.title}
              </a>
            </h1>
            <h3>✍️ {data.posts[0].meta.author}</h3>
            <div class = "pl-10 pr-10 text-xl">Published: {data.posts[0].meta.date} </div> 
            <div class = "pl-10 pr-10">{data.posts[0].meta.description} </div> 
          </div>
          </div>


          <div class="card md:ml-10 md:mr-10 rounded-md text-center" onclick="window.location='{data.posts[0].path}'">
            <div class = "flex justify-center"><img src="{data.posts[1].meta.img}" alt="" class="w-2/3 h-auto rounded-md max-w-md"></div>
            
            <div class = "card-content">
            <h1 class = "pr-10 pl-10">
              <a href={data.posts[1].path}>
                {data.posts[1].meta.title}
              </a>
            </h1>
            <h3>✍️ {data.posts[1].meta.author}</h3>
            <div class = "pl-10 pr-10 text-xl">Published: {data.posts[1].meta.date} </div> 
            <div class = "pl-10 pr-10">{data.posts[1].meta.description} </div> 
          </div>
          </div>


    <hr class="pl-10 pr-10">


  <!-- EVENTS -->
  
    <h1 class="p-10 text-center">Recent Events</h1>
          <div class="card md:ml-10 md:mr-10 rounded-md text-center" onclick="window.location='{data.events[0].path}'">
            <div class = "flex justify-center"><img src="{data.events[0].meta.img}" alt="" class="w-2/3 h-auto rounded-md max-w-md"></div>
        
            <div class = "card-content">
            <h1 class = "pr-10 pl-10">
              <a href={data.events[0].path}>
                {data.events[0].meta.title}
              </a>
            </h1>
            <h3 class = "pl-10 pr-10">Date: {data.events[0].meta.date} </h3> 
            <h3 class = "pl-10 pr-10">Time: {data.events[0].meta.time} </h3> 
            <h3 class = "pl-10 pr-10">Venue: {data.events[0].meta.venue} </h3> 

          </div>
          </div>


          <div class="card md:ml-10 md:mr-10 rounded-md text-center" onclick="window.location='{data.events[0].path}'">
            <div class = "flex justify-center"><img src="{data.events[1].meta.img}" alt="" class="w-2/3 h-auto rounded-md max-w-md"></div>
            
            <div class = "card-content">
            <h1 class = "pr-10 pl-10">
              <a href={data.events[1].path}>
                {data.events[1].meta.title}
              </a>
            </h1>
            <h3 class = "pl-10 pr-10">Date: {data.events[1].meta.date} </h3> 
            <h3 class = "pl-10 pr-10">Time: {data.events[1].meta.time} </h3> 
            <h3 class = "pl-10 pr-10">Venue: {data.events[1].meta.venue} </h3>
          </div>
          </div>


    <hr class="pl-10 pr-10">

    <!-- PRESIDENTS -->

    <h1 class="p-10 text-center">Meet Our Heads</h1>
    {#each presidents as person}
    <div class="card md:ml-10 md:mr-10 rounded-md">
      <div class = "flex justify-center text-xl"><img src="{person.Photo}" alt="core member" class="w-2/3 h-auto rounded-md max-w-md"></div>
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


