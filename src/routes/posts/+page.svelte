<script>
// @ts-nocheck
    export let data
</script>



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">


<main>
    <title>MUNSoc PESU-ECC | POSTS</title>
    <body class = "bg-body-slate text-white prose prose-invert">
        <h1 class="px-10 pt-10 text-center">Posts</h1>
        <hr>
        
        {#each data.posts as post}
          <div class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md text-center" onclick="window.location='{post.path}'">
            <div class = "flex justify-center"><img src="{post.meta.img}" alt="" class="w-2/3 h-auto rounded-md max-w-md"></div>
            
            <div class = "card-content">
            <h1 class = "pr-10 pl-10">
              <a href={post.path}>
                {post.meta.title}
              </a>
            </h1>
            <h3>✍️ {post.meta.author}</h3>
            <div class = "pl-10 pr-10 text-xl">Published: {post.meta.date} </div> 
            <div class = "pl-10 pr-10">{post.meta.description} </div> 
          </div>
          </div>

        {/each}
          
    </body>
</main>




<style>
  :root{
    --munsoc-gold: #C0A960;
    --body-slate: #232C3A;
    font-family: 'Roboto', sans-serif;
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