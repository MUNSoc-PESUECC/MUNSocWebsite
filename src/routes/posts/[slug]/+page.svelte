<script>
    /**
	 * @type {{ title: any; date: any; content: any; }}
	 */
     export let data;
</script>
  


<main>
  <body class = "bg-body-slate">
    
  <article class = "text-white p-10 prose prose-invert">
    <h1>{ data.title }</h1>
    <p>Published: {data.date}</p>
    <hr>
    <svelte:component this={data.content} />

  </article>
  </body>

</main>



<style>
  .prose{
    max-width: none;
  }
</style>