<script>
    /**
	 * @type {{ posts: any; }}
	 */
     export let data
</script>






<main>
    <title>MUNSOC-PESUECC | POSTS</title>
    <body class = "bg-body-slate text-white prose prose-invert">
        <h1 class="px-10 pt-10 text-center">Posts</h1>
        <hr>
        
        {#each data.posts as post}
          
            <h2 class = "px-10">
              <a href={post.path}>
                {post.meta.title}
              </a>
            </h2>
            <div class = "px-10">Published: {post.meta.date} </div> 
            <div class = "px-10">{post.meta.description} </div> 

            <hr>
        {/each}
          
    </body>
</main>




<style>
  .prose{
    max-width: none;
  }
</style>