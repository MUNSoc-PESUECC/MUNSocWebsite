<script>
// @ts-nocheck


    export let data
</script>






<main>
    <title>MUNSOC-PESUECC | POSTS</title>
    <body class = "bg-body-slate text-white prose prose-invert ml-10 mr-10">
        <h1 class="px-10 pt-10 text-center">Posts</h1>
        <hr>
        
        {#each data.posts as post}
            <div class = "flex justify-center"><img src="{post.meta.img}" alt="" class="w-2/3 h-auto rounded-md"></div>
            <h1 class = "pr-10 pl-10">
              <a href={post.path}>
                {post.meta.title}
              </a>
            </h1>
            <div class = "pl-10 pr-10">Published: {post.meta.date} </div> 
            <div class = "pl-10 pr-10">{post.meta.description} </div> 

            <hr>
        {/each}
          
    </body>
</main>




<style>
  .prose{
    max-width: none;
  }
</style>