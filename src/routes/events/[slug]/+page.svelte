<script>
    // @ts-nocheck
         export let data;
    </script>
      
    
    
    <main>
      <title>{data.title}</title>
      <body class = "bg-body-slate">
      <article class = "text-white p-10 prose prose-invert">
        <div class = "flex justify-center"><img src="{ data.img }" alt="" class="w-2/3 h-auto rounded-md"></div>
        <h1 class="text-center">{ data.title }</h1>
        <h3 class="text-center">Date: {data.date}</h3>
        <h3 class="text-center">Time: {data.time}</h3>
        <h3 class="text-center">Venue: {data.venue}</h3>
        <h3 class="text-center">Date: {data.date}</h3>
        <button class="register-button" onclick="window.open('{data.registrationLink}', '_blank')">
          Register Here!
        </button>
        <hr class="pl-10 pr-10">
        <svelte:component this={data.content} />
      </article>

      
    
      </body>
    
    </main>
    
    
    <style>
      :root{
        --munsoc-gold: #C0A960;
        --body-slate: #232C3A;
        --button-color: #202c40;
      }
      .prose{
        max-width: none;
      }
      .prose h1{
        color: var(--munsoc-gold)
      }
      .register-button{
        width:100%;
        padding: 8px;
        color: var(--munsoc-gold);
        font-size:x-large;
        font-weight: bold;
        background-color: var(--button-color);
        border-radius: 6px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transition: 0.5s;
        background-color: #202c40;
        border: 5px solid #202c40;
      }
      .register-button:hover{
        border-color: var(--munsoc-gold);
        box-shadow: 0 16px 32px rgba(0,0,0,0.5);
      }
    </style>
    