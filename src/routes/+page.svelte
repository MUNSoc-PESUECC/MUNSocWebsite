<script>
    const logoAddress = "/images/logo.png";
    let showMenu = false;
    function toggleNavbar() {
      showMenu = !showMenu;
    }
</script>





<main>
  <body class = "bg-body-slate"> 
      <nav
        class="w-auto px-10 py-1 md:flex md:justify-between md:items-center bg-navbar-slate">
        <div class="flex items-center justify-between">
            <a
            class="text-xl font-bold text-white md:text-2xl hover:text-munsoc-yellow"
            href="/">
            <img class = "pr-2" width = 100 src={logoAddress} alt="">
        
        </a>

          <a
            class="text:xl font-bold md:text-2xl text-white md:hidden"
            href="/">MUNSOC-PESUECC</a>
          
          <!-- Mobile menu button -->
          <div on:click={toggleNavbar} class="flex md:hidden">
            <button
              type="button"
              class="text-white hover:text-munsoc-gold focus:outline-none focus:text-munsoc-gold"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class="text-white hover:text-munsoc-gold hover:underline font-semibold transition-all duration-100 text-center pl-10" href="/posts">POSTS</a>
          <a class="text-white hover:text-munsoc-gold hover:underline font-semibold transition-all duration-100 text-center pl-10" href="/members">MEMBERS</a>
          <a class="text-white hover:text-munsoc-gold hover:underline font-semibold transition-all duration-100 text-center pl-10" href="/events">EVENTS</a>
          <a class="text-white hover:text-munsoc-gold hover:underline font-semibold transition-all duration-100 text-center pl-10" href="/about">ABOUT</a>
        </div>
      </nav>



      <div class = "text-white font-mono text-xl px-5 py-5">This Website Is Under Development!</div>
    


</body>
</main>






<style>

</style>