<script>
    /**
	 * @type {{ title: any; date: any; content: any; }}
	 */
     export let data;
</script>
  


<main>
  <body class = "bg-body-slate">
    
  <article class = "text-white p-10">
    <h1 class="text-3xl">{ data.title }</h1>
    <p>Published: {data.date}</p>
    <div class="p-5"></div>
    <svelte:component this={data.content} />

  </article>
  </body>

</main>