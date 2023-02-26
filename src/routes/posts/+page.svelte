<script>
// @ts-nocheck
    export let data
</script>



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet">



<main>
    <title>MUNSoc PESU-ECC | POSTS</title>
    <body class = "bg-body-slate text-white prose prose-invert">
        <h1 class="px-10 pt-10 text-center">Posts</h1>
        <hr>
        
        {#each data.posts as post}
          <div class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center" onclick="window.location='{post.path}'">
            <div class = "flex justify-center"><img src="{post.meta.img}" alt="" class="w-11/12 h-auto rounded-md max-w-md"></div>
            
            <div class = "card-content">
            <h1 class = "grey mb-1">
              <a href={post.path}>
                {post.meta.title}
              </a>
            </h1>

            <div class = "pl-10 pr-10">{post.meta.description} </div> 
            <h3 class = "mt-3 font-normal">✍️ {post.meta.author}</h3>
            <div class = "pl-10 pr-10 published">Published: {post.meta.date} </div> 
          </div>
          </div>

        {/each}
          
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
  padding-bottom: 10px;
}

.published{
  font-size: 16px;
}
</style>