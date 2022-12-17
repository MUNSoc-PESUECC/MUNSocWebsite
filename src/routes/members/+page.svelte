<script>
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
      Name: 'Anurag G',
      Role: 'Head Of Training And Development',
      Photo: "https://i.imgur.com/HfP0Lv4.png",
    },
    {
      Name: "Hemanth V",
      Role: 'Events Co-ordinator',
      Photo: "https://i.imgur.com/ECFqzKF.png",
    },
    {
      Name: "Disha Kiran",
      Role: 'Editor In Chief And Membership Chair',
      Photo: "https://i.imgur.com/M9SIPEY.png",
    },
    {
      Name: "Babu B",
      Role: 'Mentor',
      Photo: "https://i.imgur.com/mEblgB7.png",
    },
    {
      Name: "Srinivaasan N S",
      Role: 'Head Of Finance',
      Photo: "https://i.imgur.com/P6MnSpZ.png",
    },
    {
      Name: "Garima Bajpayi",
      Role: 'Media And Marketing',
      Photo: "https://i.imgur.com/Jeh5Bwj.png",
    },
    {
      Name: "Divyansh Vinayak",
      Role: 'Event Co-Head',
      Photo: "https://i.imgur.com/sLjEDXL.png",
    },
    {
      Name: "Sphurthi Yandamuri",
      Role: 'Media And Marketing',
      Photo: "https://i.imgur.com/HauEJy7.png",
    },
    {
      Name: "Sukruthi Sanampudi",
      Role: 'Operations Head',
      Photo: "https://i.imgur.com/4r2a1eR.png",
    },
    {
      Name: "Shreyas",
      Role: 'Design Lead',
      Photo: "https://i.imgur.com/p92FAuC.png",
    },
    {
      Name: "Sarthak S Kumar",
      Role: 'Design',
      Photo: "https://i.imgur.com/jGBAj5K.png",
    },
  ];
</script>






<main>
    <title>MUNSOC-PESUECC | MEMBERS</title>
    <body class = "bg-body-slate prose prose-invert">
    <h1 class="p-10 text-center">Meet Our Team</h1>
    {#each coreMembers as person}
    <div class="card ml-10 mr-10 rounded-md">
      <div class = "flex justify-center"><img src="{person.Photo}" alt="core member" class="w-2/3 h-auto rounded-md max-w-md"></div>
      <div class = "card-content">
      <h1 class = "pr-10 pl-10 text-center">
          {person.Name}
      </h1>
      <h3 class="pr-10 pl-10 text-center">
        {person.Role}
      </h3>
    </div>
    </div>

    {/each}
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
  .prose a{
    color: var(--munsoc-gold);
    text-decoration: none;
  }
  .prose h1{
    color: var(--munsoc-gold);
  }

  .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.5s;
  margin-bottom: 30px;
  background-color: #202c40;
  border: 5px solid #202c40;
  cursor: pointer;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  border-color: var(--munsoc-gold);
  box-shadow: 0 16px 32px rgba(0,0,0,0.5);
}

/* Add some padding inside the card container */
.card-content {
  padding-bottom: 30px;
}
</style>