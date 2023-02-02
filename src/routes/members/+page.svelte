<script>
// @ts-nocheck

  const coreMembers = [
    {
      Name: "Abhiram Dasika",
      Role: 'President',
      Photo: "https://i.imgur.com/SdChrcL.png",
    },
    {
      Name: "Harsh Somvanshi",
      Role: 'President',
      Photo: "https://i.imgur.com/YFnnr3q.png",
    },
    {
      Name: "Hemanth V",
      Role: 'Head Of Events',
      Photo: "https://i.imgur.com/ECFqzKF.png",
    },
    {
      Name: "Divyansh Vinayak",
      Role: 'Head Of Events',
      Photo: "https://i.imgur.com/sLjEDXL.png",
    },
    {
      Name: "Garima Bajpayi",
      Role: 'Head Of Marketing',
      Photo: "https://i.imgur.com/Jeh5Bwj.png",
    },
    {
      Name: "Sphurthi Yandamuri",
      Role: 'Head Of Social Media',
      Photo: "https://i.imgur.com/HauEJy7.png",
    },
    {
      Name: "Shreyas",
      Role: 'Head Of Design',
      Photo: "https://i.imgur.com/p92FAuC.png",
    },
    {
      Name: "Sarthak S Kumar",
      Role: 'Head Of Design',
      Photo: "https://i.imgur.com/jGBAj5K.png",
    },
    {
      Name: 'Anurag G',
      Role: 'Training And Development',
      Photo: "https://i.imgur.com/HfP0Lv4.png",
    },
    {
      Name: "Babu B",
      Role: 'Training And Development',
      Photo: "https://i.imgur.com/mEblgB7.png",
    },
    {
      Name: "Disha Kiran",
      Role: 'Editor In Chief And Membership Chair',
      Photo: "https://i.imgur.com/M9SIPEY.png",
    },
    {
      Name: "Sukruthi Sanampudi",
      Role: 'Head Of Operations',
      Photo: "https://i.imgur.com/4r2a1eR.png",
    },
    {
      Name: "Srinivaasan N S",
      Role: 'Head Of Finance',
      Photo: "https://i.imgur.com/P6MnSpZ.png",
    },
    
  ];
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

<main>
  
    <title>MUNSoc PESU-ECC | MEMBERS</title>
    <body class = "bg-body-slate prose prose-invert">
    <h1 class="p-10 text-center">Meet Our Team</h1>
    <div class = "wrapper">
    {#each coreMembers as person}
    <div class="card md:ml-10 md:mr-10 ml-5 mr-5 rounded-md inline-block">
      <div class = "flex justify-center"><img src="{person.Photo}" alt="core member" class="w-2/3 h-auto rounded-md max-w-md"></div>
      <div class = "card-content">
      <h1 class = "pr-10 pl-10 text-center">
          {person.Name}
      </h1>
      <h3 class="pr-10 pl-10 text-center font-medium">
        {person.Role}
      </h3>
    </div>
    </div>

    {/each}
  </div>
    </body>
</main>




<style>
:root{
    --munsoc-gold: #C0A960;
    --body-slate: #232C3A;
    font-family: 'Roboto', sans-serif;
  }
  .prose{
    max-width: none;
  }
  .prose a{
    color: var(--munsoc-gold);
    text-decoration: none;
  }
  .prose h1{
    color: var(--munsoc-gold);
  }

  .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
  transition: 0.5s;
  margin-bottom: 30px;
  background-color: #202c40;
  border: 5px solid var(--munsoc-gold);
}



/* Add some padding inside the card container */
.card-content {
  padding-bottom: 30px;
}
.wrapper { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  }

  @media (max-width: 420px) {
    .wrapper {
      display:block;
      align-items: center;
    }
    .card{
      display:block;
    }
    .prose h1{
      font-size:large;
    }
  }

</style>