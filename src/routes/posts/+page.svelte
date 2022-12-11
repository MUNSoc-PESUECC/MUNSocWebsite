<script>
    /**
	 * @type {{ posts: any; }}
	 */
     export let data
</script>






<main>
    <title>MUNSOC-PESUECC | POSTS</title>
    <body class = "bg-body-slate text-white">
        <h1>Posts</h1>

        <ul>
            {#each data.posts as post}
              <li>
                <h2>
                  <a href={post.path}>
                    {post.meta.title}
                  </a>
                </h2>
                Published {post.meta.date}
              </li>
            {/each}
          </ul>
    </body>
</main>




<style>

</style>