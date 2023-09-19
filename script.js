const games = [
    {
      code: "hcw_cubes",
      demo: true,
      id: "0dc65596-5600-4abf-9771-73fc4c85287a",
      imgUrl: "https://luckmedia.link/hcw_cubes/thumb_3_2.webp",
      name: "Cubes",
    },
    {
      code: "spb_aviator",
      demo: true,
      id: "13acfdd3-54fe-4937-a5ad-43a7fbea6d4c",
      imgUrl: "https://luckmedia.link/spb_aviator/thumb_3_2.webp",
      name: "Aviator",
    },
    {
      code: "hcw_scratch_platinum",
      demo: true,
      id: "1d09ba46-31dd-41d4-8ee5-18d867d4ace7",
      imgUrl: "https://luckmedia.link/hcw_scratch_platinum/thumb_3_2.webp",
      name: "SCRATCH! Platinum",
    },
    {
      code: "bgm_penny_pelican",
      demo: true,
      id: "25dc329b-1e2a-4cfb-9612-97984a458f01",
      imgUrl: "https://luckmedia.link/bgm_penny_pelican/thumb_3_2.webp",
      name: "Penny Pelican",
    },
    {
      code: "spb_dice",
      demo: true,
      id: "2f54ccf5-860c-4920-a1be-49b6a538fa69",
      imgUrl: "https://luckmedia.link/spb_dice/thumb_3_2.webp",
      name: "Dice",
    },
  
    {
      code: "hcw_stack_em",
      demo: true,
      id: "479833b9-2034-49a4-a452-ca7e49521957",
      imgUrl: "https://luckmedia.link/hcw_stack_em/thumb_3_2.webp",
      name: "Stack 'Em",
    },
  
    {
      code: "hcw_plinko",
      demo: true,
      id: "4e45e441-833f-4253-b926-79409d2ca755",
      imgUrl: "https://luckmedia.link/hcw_plinko/thumb_3_2.webp",
      name: "Plinko",
    },
    {
      code: "hcw_wanted_dead_or_a_wild",
      demo: true,
      id: "6352afa6-090e-4a86-b299-9dbab7cac785",
      imgUrl: "https://luckmedia.link/hcw_wanted_dead_or_a_wild/thumb_3_2.webp",
      name: "Wanted Dead or a Wild",
    },
    {
      code: "spb_keno",
      demo: true,
      id: "8c9b1fc8-01a9-4b90-860e-459d2eadeda0",
      imgUrl: "https://luckmedia.link/spb_keno/thumb_3_2.webp",
      name: "Keno",
    },
    {
      code: "spb_goal",
      demo: true,
      id: "944fd204-5409-4eee-980b-b070e439c3e2",
      imgUrl: "https://luckmedia.link/spb_goal/thumb_3_2.webp",
      name: "Goal",
    },
  ];



  

  const box = document.getElementById('box');
  const gameNames = games.map(function(game){
    // console.log(game);
    const img = document.createElement('img');
    img.src = game.imgUrl;
    box.appendChild(img)

    
    // box.appendChild(img)
    // console.log(img.src);
    

    
  })