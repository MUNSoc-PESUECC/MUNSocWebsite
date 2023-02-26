<script>  
//@ts-nocheck
	const logoAddress = "/images/logo.png";
    let showMenu = false;
    function toggleNavbar() {
      showMenu = !showMenu;
    }

    function navBarItemClicked(){
      if(showMenu){
        toggleNavbar()
      }
    }
	import '../app.postcss';
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet">

	<nav
        class="md:pl-5 md:pr-5 md:flex md:justify-between md:items-center bg-navbar-slate">
        <div class="flex items-center justify-between">
            <a
            class=""
            href="/">
            <img width=100 src={logoAddress} alt="logo" class="m-3 {showMenu? 'mb-0': ''}">
        </a>

          <a
            class="font-bold md:text-xl text-white md:hidden no-underline {showMenu? 'mt-3' : ''}"
            href="/">MUNSoc PESU-ECC</a>
          
          <!-- Mobile menu button -->
          <div on:click={toggleNavbar} on:keydown={toggleNavbar} class="flex md:hidden pr-3 {showMenu? 'mt-3' : ''}">
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
  
        <!-- Mobile Menu open: "flex", Menu closed: "hidden" -->
        <div
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 font-semibold {showMenu
            ? 'flex pb-5'
            : 'hidden'}"
        >
          <a class="text-white hover:text-munsoc-gold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1 no-underline" href="/" on:click={navBarItemClicked}>HOME</a>
          <a class="text-white hover:text-munsoc-gold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1 no-underline {showMenu ? 'pt-5' : ''}" href="/posts" on:click={navBarItemClicked}>POSTS</a>
          <a class="text-white hover:text-munsoc-gold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1 no-underline {showMenu ? 'pt-5' : ''}" href="/newsletter" on:click={navBarItemClicked}>NEWSLETTERS</a>
          <a class="text-white hover:text-munsoc-gold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1 no-underline {showMenu ? 'pt-5' : ''}" href="/members" on:click={navBarItemClicked}>MEMBERS</a>
          <a class="text-white hover:text-munsoc-gold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1 no-underline {showMenu ? 'pt-5' : ''}" href="/events" on:click={navBarItemClicked}>EVENTS</a>
          <a class="text-white hover:text-munsoc-gold transition-all ease-linear duration-100 text-center hover:border-b-2 inline-block hover:pb-1 no-underline {showMenu ? 'pt-5' : ''}" href="/about" on:click={navBarItemClicked}>ABOUT</a>
        </div>
      </nav>



<slot />



    <footer class = "bg-navbar-slate pl-5 pr-5">
      <div class="footer-content">
        <img src="/images/logo.png" class = "w-32" alt="">
        <h3>MUNSoc PESU-ECC</h3>
        <p>As Astra per Aspera</p>
        <ul class="socials">
          <li><a href="https://www.instagram.com/munsoc.pesuecc/" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a></li>
          <li><a href="mailto:munsocecc@pes.edu" target="_blank"><i class="fa fa-envelope"></i></a></li>

       </ul>
       <div>© MUNSoc PESU-ECC 2023</div>
    </div>

    </footer>




<style>

  :root{
    font-family: 'Lato', sans-serif;
  }

  footer{
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    width: 100vw;
    padding-top: 30px;
    padding-bottom: 10px;
    color: #fff;
  }
  .footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .footer-content h3{
    margin-top: 0;
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
  }
  .socials{
    padding-left:0;
    padding-top: 0px;
    padding-bottom: 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.socials li{
    margin:0 20px;
}

.socials a{
    text-decoration: none;
    color: #fff;
    
    padding: 5px;
    border-radius: 100%;
}

.socials a:hover{
  border-color: #C0A960;
}

.socials a i{
    font-size: 2rem;
    transition: color 0.4s ease;
}

.socials a:hover i{
    color: #C0A960;
    
}


</style>
