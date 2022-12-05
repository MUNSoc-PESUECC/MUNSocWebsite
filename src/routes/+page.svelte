<script>
    const logoAddress = "/images/logo.png";
</script>











<main>
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
</head>
<body>
    <header>
        <nav class="main-nav">
          <input type="checkbox" id="check" />
          <label for="check" class="menu-btn">
            <i class="fas fa-bars"></i>
          </label>
          <a href="/" ><img class="logo" src={logoAddress} alt="logo" width="80px"></a>
          <ul class="navlinks">
            <li><a href="#">Posts</a></li>
            <li><a href="#">Members</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    <div class = "dev_text">This website is currently under development!</div>
</body>


</main>













<style>
:root {
    --text-color: rgb(192, 169, 96);
}


.dev_text {
    color: grey;
    font-size: 20px;
}

body {
    margin: 0;
    padding: 0;
    font-family: "Lato", serif;
    background-color: #212c3b;
}

header {
    background-color: #141b25;
}

.main-nav {
    height: 90px;
}

.logo {
    padding: 4px;
}

.navlinks {
    list-style: none;
    float: right;
    line-height: 90px;
    margin: 0;
    padding: 0;
}

.navlinks li {
    display: inline-block;
    margin: 0px 20px;
}

.navlinks li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: all 100ms linear 0s;
    text-transform: uppercase;
}

.navlinks li a:hover {
    color: var(--text-color);
    padding-bottom: 7px;
    border-bottom: 2px solid var(--text-color);

}


#check {
    display: none;
}

.menu-btn {
    font-size: 25px;
    color: white;
    float: right;
    line-height: 90px;
    margin-right: 40px;
    display: none;
    cursor: pointer;
}

@media (max-width: 800px) {
    .navlinks {
        position: fixed;
        width: 100%;
        height: 100vh;
        text-align: center;
        transition: all 0.5s;
        right: -100%;
        background: #222831;
    }

    .navlinks li {
        display: block;
    }

    .navlinks li a {
        font-size: 20px;
    }

    .navlinks li a:hover {
        border-bottom: none;
    }

    .menu-btn {
        display: block;
    }

    #check:checked~.navlinks {
        right: 0;
    }
}

@media (max-width: 360px) {

    .menu-btn {
        margin-right: 10px;
        font-size: 25px;
    }

    .menu-btn:focus {
        color: var(--text-color);
    }
}
</style>