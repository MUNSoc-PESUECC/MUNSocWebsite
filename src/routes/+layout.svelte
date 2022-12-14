<script>
	const logoAddress = "/images/logo.png";
    let showMenu = false;
    function toggleNavbar() {
      showMenu = !showMenu;
    }
	import '../app.postcss';
</script>




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
          <div on:click={toggleNavbar} on:keydown={toggleNavbar} class="flex md:hidden">
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
          <a class="text-white hover:text-munsoc-gold font-semibold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1" href="/" on:click={toggleNavbar}>HOME</a>
          <a class="text-white hover:text-munsoc-gold font-semibold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1" href="/posts" on:click={toggleNavbar}>POSTS</a>
          <a class="text-white hover:text-munsoc-gold font-semibold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1" href="/members" on:click={toggleNavbar}>MEMBERS</a>
          <a class="text-white hover:text-munsoc-gold font-semibold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1" href="/events" on:click={toggleNavbar}>EVENTS</a>
          <a class="text-white hover:text-munsoc-gold font-semibold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1" href="/about" on:click={toggleNavbar}>ABOUT</a>
        </div>
      </nav>



<slot />
