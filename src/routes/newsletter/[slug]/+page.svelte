<script>
// @ts-nocheck
    export let data;
    let formattedDate = new Date(data.date).toLocaleDateString('default', { month: 'long', year: 'numeric' });
    data.embedLink = data.embedLink+"?embed";
</script>
  


<main>
  <title>{"NEWSLETTER | " + formattedDate.toUpperCase() }</title>
  <body class = "bg-body-slate">
    <div class = "canvaEmbed mr-1 ml-1 md:ml-3 md:mr-3">
     <iframe title = "newsletter" loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
       src="{data.embedLink}" allowfullscreen="allowfullscreen" allow="fullscreen">
     </iframe>
   </div>
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


  .canvaEmbed{
    position: relative;
    width: 100%; 
    height: 0; 
    padding-top: 
    141.4286%;
    padding-bottom: 0; 
    box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); 
    margin-top: 1.6em; 
    margin-bottom: 0.9em; 
    overflow: hidden;
    border-radius: 8px; 
    will-change: transform;
  }


</style>
