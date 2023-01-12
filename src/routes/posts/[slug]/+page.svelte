<script>
// @ts-nocheck

     export let data;
</script>
  


<main>
  <title>{data.title}</title>
  <body class = "bg-body-slate">
    
  <article class = "text-white p-10 prose prose-invert">
    <div class = "flex justify-center"><img src="{ data.img }" alt="" class="w-2/3 h-auto rounded-md"></div>
    <div class="text-center">
    <h1>{ data.title }</h1>
    <h3>✍️ {data.author}</h3>
    <p>Published: {data.date}</p>
    </div>
    <hr>
    <div class = "content md:pl-32 md:pr-32">
    <svelte:component this={data.content} class="content" />
  </div>
  </article>
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
  .prose h1{
    color: var(--munsoc-gold)
  }
  
  .content :global(img){
    width:100%;
    padding-left:10%;
    padding-right:10%;
  }


</style>
