<script>
// @ts-nocheck

     export let data;
</script>
  


<main>
  <title>{data.title}</title>
  <body class = "bg-body-slate">
    
  <article class = "text-white p-10 prose prose-invert">
    <div class = "flex justify-center"><img src="{ data.img }" alt="" class="w-2/3 h-auto rounded-md"></div>
    <h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    <hr>
    <svelte:component this={data.content} />

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
</style>
