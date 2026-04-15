const products = [
  // ===================== LIVE FISH =====================
  {
    name: "Goldfish",
    price: 200,
    category: "Live Fish",
    description: "Easy-to-care freshwater fish ideal for beginners and home aquariums.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4Cjc4tg3i4MJ3EtlOgYYEpvLUaWYeuTzrg&s"
  },
  {
    name: "Betta Fish",
    price: 300,
    category: "Live Fish",
    description: "Beautiful aggressive fish with long fins and vibrant colors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBtjSQ7Qwr8Xpyva5Ve6fkLB-ah4JN3bK9w&s"
  },
  {
    name: "Guppy",
    price: 100,
    category: "Live Fish",
    description: "Small colorful fish perfect for community tanks and easy breeding.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMxC1Nye9Kt91XDPp9gcazCcYkKFjfgdaoA&s"
  },
  {
    name: "Angelfish",
    price: 400,
    category: "Live Fish",
    description: "Elegant triangular-shaped fish known for graceful swimming patterns.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJC4PMMrov8S3CJp9S3u2S2Nw96pwVSkJ-g&s"
  },
  {
    name: "Neon Tetra",
    price: 150,
    category: "Live Fish",
    description: "Small glowing fish with neon stripes ideal for schooling tanks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCaP0-vhrMVkNiv_TsK2jE1qYzvj-V9knWA&s"
  },
  {
    name: "Molly Fish",
    price: 120,
    category: "Live Fish",
    description: "Hardy freshwater fish suitable for all aquarium environments easily.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnA0Kpmk-cC0p3i1Lgyfjn8AydG74wKC65QQ&s"
  },
  {
    name: "Swordtail",
    price: 180,
    category: "Live Fish",
    description: "Peaceful fish with distinctive sword-like tail extension and active behavior.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3h1RnZ9rhAY63DcSQuxErND4pdPgWam5bxQ&s"
  },
  {
    name: "Oscar Fish",
    price: 600,
    category: "Live Fish",
    description: "Intelligent large aquarium fish with strong personality and growth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKvs7henUUlZPrhKhHwor6jXRccxpNczmRA&s"
  },
  {
    name: "Discus Fish",
    price: 1200,
    category: "Live Fish",
    description: "Premium exotic fish with round shape and stunning color patterns.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0xxjsJqxavJVdfuZY90M8P7812pk4xG2bA&s"
  },
  {
    name: "Koi Fish",
    price: 500,
    category: "Live Fish",
    description: "Ornamental pond fish known for beauty, patterns, and longevity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EMLCUtEUqQx2dub5LwuK7nKXM5ea1tozaA&s"
  },

  // ===================== LIVE PLANTS =====================
  {
    name: "Java Moss",
    price: 80,
    category: "Live Plants",
    description: "Low maintenance plant that grows easily on rocks and wood surfaces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSclOJ-O0_mPqZX5QJBR2WVdprwacp88Rzw&s"
  },
  {
    name: "Amazon Sword",
    price: 150,
    category: "Live Plants",
    description: "Tall aquarium plant providing natural shelter and oxygen enrichment.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJdtLgAp1Ogx4c5ypjUZUC8ZsV62dhnKplw&s"
  },
  {
    name: "Anubias",
    price: 200,
    category: "Live Plants",
    description: "Slow-growing hardy plant suitable for beginners and low light tanks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-WlDbdr4dqsLmKLfwjO1qzVywEsbbVbQrw&s"
  },
  {
    name: "Hornwort",
    price: 90,
    category: "Live Plants",
    description: "Fast-growing plant that improves oxygen levels and water quality naturally.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHQ4c9UiI0sfxQGlpqc3zebh1DAs4QbnQZA&s"
  },
  {
    name: "Vallisneria",
    price: 100,
    category: "Live Plants",
    description: "Grass-like plant that creates natural background and aquarium depth effect.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KWGrWAwVnEIWAdTAf2XyJ76BHaOwvyoOgA&s"
  },
  {
    name: "Water Wisteria",
    price: 120,
    category: "Live Plants",
    description: "Fast-growing plant ideal for aquascaping and nutrient absorption systems.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVphM81Y46SnKj_S6L7RiF_viPH6cph1c1uA&s"
  },
  {
    name: "Duckweed",
    price: 50,
    category: "Live Plants",
    description: "Floating plant that covers water surface and reduces algae growth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4_goBuVZvf45ZaXXVpgC40xbTULKIqymcg&s"
  },
  {
    name: "Cryptocoryne",
    price: 180,
    category: "Live Plants",
    description: "Decorative aquarium plant with varied leaf shapes and colors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnetq9UVqqEGO-Fj5gyx5r7Sut5658VGEvPQ&s"
  },
  {
    name: "Rotala",
    price: 140,
    category: "Live Plants",
    description: "Colorful stem plant used for creating beautiful aquascape layouts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPmS_TbsnnzlTKyae6TS9Vmcr00KMUullqg&s"
  },
  {
    name: "Marimo Moss Ball",
    price: 300,
    category: "Live Plants",
    description: "Unique spherical algae plant used for decorative aquariums.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkYdxzp6vSvRGZ06x8iBTqdOho7-LLjrbOg&s"
  },

  // ===================== AQUARIUM TANK =====================
  {
    name: "Mini Glass Tank",
    price: 800,
    category: "Aquarium Tank",
    description: "Compact aquarium ideal for beginners and small fish setups.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTiF9_qQGnTtUqFlzMbT7spL15VZeCBGxag&s"
  },
  {
    name: "Medium Tank",
    price: 1500,
    category: "Aquarium Tank",
    description: "Balanced size aquarium suitable for home decorative fish keeping.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSogHalrjJc0JE-yK2BBxvmOh9ed40fZSPg&s"
  },
  {
    name: "Large Tank",
    price: 3000,
    category: "Aquarium Tank",
    description: "Spacious aquarium designed for multiple fish species and aquascaping.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjU1LE3ZN5CynZlXmuwlFm0nUQ6s9E8KWE7Q&s"
  },
  {
    name: "Nano Cube",
    price: 1200,
    category: "Aquarium Tank",
    description: "Small cube-shaped aquarium perfect for minimal aquatic setups.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9bEbCWMb7SjQVuUHXngjj_bmWaqTuOIrXQ&s"
  },
  {
    name: "Wall Mounted Tank",
    price: 5000,
    category: "Aquarium Tank",
    description: "Modern aquarium designed to save space and enhance interiors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdLjg1RFPD_-8GTMuy2k8_ntpBVFKibMovg&s"
  },
  {
    name: "Bow Front Tank",
    price: 3500,
    category: "Aquarium Tank",
    description: "Curved glass aquarium providing wide viewing angle and elegance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6No1-0ubv5gnWu2jcJ8-wWnPz8k17kYPdLA&s"
  },
  {
    name: "Rectangular Tank",
    price: 2000,
    category: "Aquarium Tank",
    description: "Classic aquarium design suitable for all fish species easily.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NMvEhO--TE8aWE51_TY5ZYOe8S2pa-m_Vw&s"
  },
  {
    name: "Fish Bowl",
    price: 500,
    category: "Aquarium Tank",
    description: "Simple round container ideal for small decorative fish keeping.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfm1f161aZeIe-JJyVXyCvHU-v-a5qovwDHw&s"
  },
  {
    name: "Luxury LED Tank",
    price: 6000,
    category: "Aquarium Tank",
    description: "Premium aquarium with built-in LED lighting for aesthetic display.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7oP7_zXCoPU285Rj9bQdEhYett3rkdSxL_g&s"
  },
  {
    name: "Aquascape Tank",
    price: 4500,
    category: "Aquarium Tank",
    description: "Professional tank designed specifically for aquascaping setups.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD52UsQDp1KCP2CtNbBdLvDCYZgM27yRPJug&s"
  },

  // ===================== FILTERS =====================
  {
    name: "Sponge Filter",
    price: 200,
    category: "Filters",
    description: "Simple biological filtration system ideal for small aquariums.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwMHlJtJx_glJwxJspmsElosCBcLhWf3gnw&s"
  },
  {
    name: "Internal Filter",
    price: 600,
    category: "Filters",
    description: "Compact filter installed inside aquarium for basic filtration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUydGpjIl-_z1W0Q4q8_vKL5LNfzv_8dXgA&s"
  },
  {
    name: "Canister Filter",
    price: 2500,
    category: "Filters",
    description: "High-performance external filter for large aquariums.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAYhJbwA3zMKTm5GCRuL2etXmAwQ5EQatjQ&s"
  },
  {
    name: "Air Pump",
    price: 300,
    category: "Filters",
    description: "Device that supplies oxygen and improves water circulation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgX89w335u2bnP3-4v2_W8V-ohBsUfQp3EDA&s"
  },
  {
    name: "Water Pump",
    price: 700,
    category: "Filters",
    description: "Maintains water movement and aquarium circulation system.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWDtqO1OEZUDziJmZmABYD0tZsA7X3lvPow&s"
  },
  {
    name: "HOB Filter",
    price: 1200,
    category: "Filters",
    description: "Hang-on-back filter providing efficient aquarium filtration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMroOw4EQOzlFv05xtSNLCh9j97mYuRduSw&s"
  },
  {
    name: "UV Sterilizer",
    price: 1800,
    category: "Filters",
    description: "Eliminates algae, bacteria, and harmful microorganisms.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7reHBlEs-KimJJ5KJLFevBV0qO__ODVVkQ&s"
  },
  {
    name: "Bio Media",
    price: 250,
    category: "Filters",
    description: "Supports beneficial bacteria growth for biological filtration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ38BwiqpCbI6zJo2FdRQ0fY59a3v07odKg&s"
  },
  {
    name: "Submersible Pump",
    price: 900,
    category: "Filters",
    description: "Fully underwater pump used for water circulation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrJfRsJGXSwPlqj-6POcj78rypS_mWG2Qdw&s"
  },
  {
    name: "Air Stone",
    price: 100,
    category: "Filters",
    description: "Produces bubbles to increase oxygen levels in water.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvskt72T-rDlMyt8tEtBHbim1PqrwtcvKZw&s"
  },

  // ===================== FISH FOOD =====================
  {
    name: "Tetra Flakes",
    price: 150,
    category: "Fish Food",
    description: "Balanced nutrition flakes suitable for all freshwater fish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK80T0ivffVSe_I2cxPeJbk_Sb73FaH-NK0g&s"
  },
  {
    name: "Pellet Food",
    price: 200,
    category: "Fish Food",
    description: "High-protein pellets designed for fish growth and health.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7G5Fn4PhbvlsaLW0HvozH4j9c6ir6F02mtg&s"
  },
  {
    name: "Shrimp Food",
    price: 180,
    category: "Fish Food",
    description: "Special nutrition food formulated for shrimp development.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo7YZ_ss3T8FeHbQurcDxrPXWu49K6lQf4A&s"
  },
  {
    name: "Algae Wafers",
    price: 220,
    category: "Fish Food",
    description: "Ideal sinking food for bottom-feeding fish species.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmGO1rIqFBMNFH5nwWS8xD3Oyn3D8-YRysQ&s"
  },
  {
    name: "Freeze Worms",
    price: 300,
    category: "Fish Food",
    description: "Protein-rich natural food enhancing fish energy and growth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbb5nGMjpfF6NkkNkdtPex-LTjUTbQIyWYA&s"
  },
  {
    name: "Color Food",
    price: 250,
    category: "Fish Food",
    description: "Special diet that enhances natural fish colors.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReX4A3Sxkv_3SaJZqDv4us9tZKRB9h65RE2w&s"
  },
  {
    name: "Baby Fish Food",
    price: 120,
    category: "Fish Food",
    description: "Fine powder food designed for baby fish growth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53ihKRvzD-UJOVdJQpR9nu4UtM_17f_utWA&s"
  },
  {
    name: "Floating Pellets",
    price: 180,
    category: "Fish Food",
    description: "Surface feeding pellets for top-dwelling fish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiiSHY6ZIsO4HtZkALhvC_S2hMq4eHXtB6A&s"
  },
  {
    name: "Live Worms",
    price: 350,
    category: "Fish Food",
    description: "Natural live food for aggressive fish health.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzGy2lnhejy3vXe95cBHmznfKSunXUJKlEA&s"
  },
  {
    name: "Holiday Food",
    price: 100,
    category: "Fish Food",
    description: "Slow-release food for feeding during vacations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPNyZoD25vxl9XnrS0HnkonexcVXDyu1XOuQ&s"
  },

  // ===================== ACCESSORIES =====================
  {
    name: "LED Light",
    price: 500,
    category: "Accessories",
    description: "Bright aquarium lighting enhances fish colors beautifully.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tC_wYTstj54qmHet-rpAhnJGy19o3FbezA&s"
  },
  {
    name: "Gravel",
    price: 200,
    category: "Accessories",
    description: "Decorative substrate for aquarium bottom aesthetics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVt1vqpp_musU5pzW3geud2FU0pFecjRVaQ&s"
  },
  {
    name: "Driftwood",
    price: 400,
    category: "Accessories",
    description: "Natural wood decoration for aquascaping environments.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3mG70HLh9GE0-lTrW0qCvevXeLYlrcKFMw&s"
  },
  {
    name: "Thermometer",
    price: 150,
    category: "Accessories",
    description: "Monitors aquarium water temperature accurately.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheWo94N7luPy9V4oDIc9rvqaVipELz2LYjA&s"
  },
  {
    name: "Fish Net",
    price: 50,
    category: "Accessories",
    description: "Tool used for safely handling aquarium fish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdnHxGzNtlARE2tmCbb9DkVeItil4-6N9Xg&s"
  },
  {
    name: "CO2 Diffuser",
    price: 700,
    category: "Accessories",
    description: "Improves plant growth by adding carbon dioxide.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSNw3EifsK6ts1hYJDDkeMy5YvxemMIGpVQ&s"
  },
  {
    name: "Air Tube",
    price: 80,
    category: "Accessories",
    description: "Connects air pump to aquarium oxygen system.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYL38-VRCLO6uskMihdrpaA7fY-SDmbsAmBw&s"
  },
  {
    name: "Decoration Castle",
    price: 300,
    category: "Accessories",
    description: "Decorative aquarium ornament for visual appeal.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSETwCRfGgPWWBMWa49MVJBGMlW7B1sLdFg&s"
  },
  {
    name: "Water Conditioner",
    price: 250,
    category: "Accessories",
    description: "Removes chlorine and harmful chemicals from water.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XNPjP5Ra9ANecCvcKqcASRAc_ot7rUEttw&s"
  },
  {
    name: "Background Sheet",
    price: 100,
    category: "Accessories",
    description: "Enhances aquarium visual depth and background design.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYc-mQOyHS1Il6qthy6B1IAEvekS7oW8bLw&s"
  }
];

export default products;