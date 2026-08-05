  //  EXPLORE PAGE ARRAY WITH OBJECT 
  const citiesData = [
    {
      id: 1,
      cityName: "Lahore",
      tagline: "The Heart of Culture & Cuisine",
      cardImg: "../IMAGES/Lahore.jfif",
      modalVideo: "https://www.youtube.com/embed/oBFZWfDv2Zk?autoplay=1&mute=1",

      hotels: [
        { name: "Pearl Continental (PC)", price: "PKR 35,000 / night", img: "../IMAGES/pclahoreimg.webp" },
        { name: "Nishat Hotel Johar Town", price: "PKR 28,000 / night", img: "../IMAGES/nishatlahoreimg.jfif" },
        { name: "Avari Lahore", price: "PKR 30,000 / night", img: "../IMAGES/awarilahoreimg.webp" }
      ],
      restaurants: [
        { name: "Haveli Restaurant", detail: "Traditional Desi Food", img: "../IMAGES/hawalilahoreimg.jfif" },
        { name: "Howdy Burgers", detail: "Gourmet Fast Food", img: "../IMAGES/howdylahoreimg.jfif" },
        { name: "Monal Lahore ", detail: "Buffet & Continental", img: "../IMAGES/monallahoreimg.webp" }
      ],
      places: [
        { name: "Badshahi Mosque", detail: "Mughal Architecture", img: "../IMAGES/badshahilahoreimg.jpg" },
        { name: "Lahore Fort (Shahi Qila)", detail: "Historical Monument", img: "../IMAGES/shahilahoreimg.jpg" },
        { name: "Shalimar Gardens", detail: "Mughal Garden Complex", img: "../IMAGES/shahlimarlahoreimg.webp" }
      ]
    }
    , {
      id: 2,
      cityName: "Karachi",
      tagline: "Where the sea breeze meets the city that never sleeps",
      cardImg: "../IMAGES/Karachi-Pakistan.webp",
      modalVideo: "",
      hotels: [
        { name: "Mövenpick Hotel Karachi", price: "PKR 35,000 / night", img: "../IMAGES/karachiimg.jpg" },
        { name: "Marriott Hotel Karachi", price: "PKR 28,000 / night", img: "../IMAGES/mariotkarachiimg.jpg" },
        { name: "Beach Luxury Hotel", price: "PKR 30,000 / night", img: "../IMAGES/beachkarachi.jfif" }
      ],
      restaurants: [
        { name: "The Imperial Court", detail: "Traditional Desi Food", img: "../IMAGES/imperialkarachi.jpg" },
        { name: "The Grand Nawab", detail: "Gourmet Fast Food", img: "../IMAGES/nawabkarachi.jfif" },
        { name: "Kolachi Restaurant", detail: "Buffet & Continental", img: "../IMAGES/kolachikarachi.jfif" }
      ],
      places: [
        { name: "Mazar-e-Quaid", detail: "Founder's iconic white-marble mausoleum and monument.", img: "../IMAGES/mazarkarachi.jfif" },
        { name: "Mohatta Palace", detail: "Historic 1920s pink Rajasthani stone palace museum", img: "../IMAGES/mohattakarachi.jfif" },
        { name: "Frere Hall", detail: "British-era Gothic hall with Sadequain's ceiling mural.", img: "../IMAGES/ferretekarachi.jpg" }
      ]
    },
     {
      id: 3,
      cityName: "Islamabad",
      tagline: "Where the Margalla hills touch the calm, green horizons.",
      cardImg: "../IMAGES/islamabad.jfif",
      modalVideo: "",
      hotels: [
        { name: "The Centaurus Suites", price: "PKR 35,000 / night", img: "../IMAGES/centerisl.jpg" },
        { name: "Best Western Premier", price: "PKR 28,000 / night", img: "../IMAGES/premierisb.jfif" },
        { name: "Ambiance Boutique Art Hote", price: "PKR 30,000 / night", img: "../IMAGES/ambianceisb.jpg" }
      ],
      restaurants: [
        { name: "Des Pardes (Saidpur Village", detail: "Traditional Desi Food", img: "../IMAGES/desisb.jpg" },
        { name: "Tuscany Courtyard", detail: "Gourmet Fast Food", img: "../IMAGES/tuscanyisb.jfif" },
        { name: "Kabul Restaurant", detail: "Buffet & Continental", img: "../IMAGES/kabulisb.jfif" }
      ],
      places: [
      { name: "Faisal Mosque", detail: "Iconic Bedouin-tent architectural national mosque", img: "../IMAGES/faisalisb.jpg" },
      { name: "Pakistan Monument", detail: "Petal-shaped national monument & history museum", img: "../IMAGES/pakisb.jpg" },
      { name: "Lok Virsa Museum", detail: "Living history & traditional culture museum", img: "../IMAGES/museumisb.jpg" }
]
    },
     {
      id: 4,
      cityName: "Swat",
      tagline: "Where the emerald Swat river meets the snow-capped Swiss of the East.",
      cardImg: "../IMAGES/Sawat.jfif",
      modalVideo: "",
      hotels: [
      { name: "Swat Serena Hotel", price: "PKR 28,000 / night", img: "../IMAGES/swathotel.webp" },
      { name: "Burj Al Swat", price: "PKR 18,000 / night" ,  img: "../IMAGES/alburjswat.jpg"  },
      { name: "Rock City Resort", price: "PKR 22,000 / night" ,  img: "../IMAGES/rockyswat.jpg" }
      ],
      restaurants: [
      { name: "Fizagat Trout Spot", detail: "Fresh Swat River trout & riverside BBQ" ,  img: "../IMAGES/spotswat.jfif" },
      { name: "White Palace Dining", detail: "Royal fine dining in a historic marble palace" , img: "../IMAGES/whiteswat.jpg" },
      { name: "Shinwari Karahi", detail: "Authentic Pashtun Shinwari mutton & chapli kebabs" , img: "../IMAGES/shinvariswat.jfif" }
      ],
     places: [
        { name: "Swat Museum", detail: "Mughal Architecture", img: "../IMAGES/badshahi.jpg"  , img: "../IMAGES/swatmueseum.jpg" },
        { name: "White Palace Marghazar", detail: "Historical Monument", img: "../IMAGES/shahi-qila.jpg",  img: "../IMAGES/palaceswat.jfif"  },
        { name: "Amluk Dara Stupa", detail: "Ancient 3rd-century Gandharan Buddhist stupa", img: "../IMAGES/anukswat.jfif"  }
      ],
    },
    
     {
      id: 5,
      cityName: "Muree",
      tagline: "Where pine-covered misty peaks meet British-era colonial charm.",
      cardImg: "../IMAGES/Muree.jpg",
      modalVideo: "",
      hotels: [
        { name: "PC Hotel Bhurban", price: "PKR 45,000 / night" , img: "../IMAGES/pcmuree.webp"},
        { name: "Cecil Hotel Murree", price: "PKR 35,000 / night" , img: "../IMAGES/cecilmuree.jpg"},
        { name: "Lockwood Hotel", price: "PKR 25,000 / night" , img: "../IMAGES/lockwoodmuree.jfif"}
      ],
      restaurants: [
        { name: "Lintott's Restaurant", detail: "Historic British-era cafe & continental dining" , img: "../IMAGES/linmuree.jfif" },
        { name: "Usmania Restaurant", detail: "Authentic Pakistani handi, BBQ & traditional karahi" , img: "../IMAGES/usmaniamuree.jfif"},
        { name: "Murree To Night BBQ", detail: "Bustling Mall Road BBQ & local grilled delicacies" , img: "../IMAGES/bbqmuree.jfif"}
      ],
      places: [
       { name: "Mall Road", detail: "Iconic colonial-era pedestrian street & market" , img: "../IMAGES/mallmuree.jpg"},
       { name: "Pindi Point", detail: "Historic mountain viewpoint over Rawalpindi plains" , img: "../IMAGES/snowmuree.jpg"},
       { name: "Patriata Chairlift", detail: "Scenic forest cable car & chairlift rides" , img: "../IMAGES/pindimuree.webp"}
      ]
    },
     {
      id: 6,
      cityName: "Hunza Valley",
      tagline: "Where majestic Karakoram peaks frame serene alpine lakes and timeless",
      cardImg: "../IMAGES/Hunza.jpg",
      modalVideo: "",
    hotels: [
       { name: "Faletti's Hotel ", price: "PKR 35,000 / night" , img: "../IMAGES/fallatehunza.jpg"},
       { name: "The Nishat Hotel", price: "PKR 40,000 / night" , img: "../IMAGES/nishathunza.jpg"},
       { name: "Legacy Hotel ", price: "PKR 45,000 / night" , img: "../IMAGES/legacyhunza.jpg"}
],
    restaurants: [
       { name: "Cooco's Den", detail: "Rooftop heritage dining with Badshahi Mosque views" , img: "../IMAGES/denhunza.jpg"},
       { name: "Spice Bazaar", detail: "Upscale traditional Pakistani feast & fine dining" , img: "../IMAGES/spicyhunza.jfif"},
       { name: "Butt Karahi", detail: "Famous Laxmi Chowk spot for authentic desi ghee karahi" , img: "../IMAGES/butthunza.jfif"}
],
    places: [
      { name: "Baltit Fort", detail: "Iconic 17th-century fort ", img: "../IMAGES/baltithunza.jfif" },
      { name: "Attabad Lake", detail: "Stunning turquoise lake created by a massive landslide in 2010" , img: "../IMAGES/lakehunza.jfif"},
      { name: "Passu Cones (Cathedral Peaks)", detail: "Iconic jagged mountain peaks along the Karakoram Highway" , img: "../IMAGES/peakhunza.jpg"}
]
    },
     {
      id: 7,
      cityName: "Skardu",
      tagline: "Where desert dunes meet turquoise lakes under giant peaks.",
      cardImg: "../IMAGES/Skardu.jfif",
      modalVideo: "",
      hotels: [
        { name: "Serena Shigar Fort", price: "PKR 45,000 / night" , img: "../IMAGES/shigarskardu.jfif"},
        { name: "Shangrila Resort", price: "PKR 38,000 / night" , img: "../IMAGES/shangrilaskardu.jpg"},
        { name: "PC Legacy Skardu", price: "PKR 40,000 / night" , img: "../IMAGES/legacyskardu.jpg"}
],
      restaurants: [
        { name: "Dewane Khas", detail: "Gold standard for authentic Balti food & local specialties" , img: "../IMAGES/deewaneskardu.jfif"},
        { name: "Pagoda Restaurant", detail: "Iconic lakefront dining at Shangrila Resort" , img: "../IMAGES/pagodaskardu.jpg"},
        { name: "Mount Feast Restaurant", detail: "Terrace dining with panoramic Karakoram mountain views" , img: "../IMAGES/mountskardu.jpeg"}
],
     places: [
        { name: "Kharphocho Fort", detail: "16th-century 'King of Forts' perched above the Indus River", img: "../IMAGES/kharposkardu.webp" },
        { name: "Shigar Fort", detail: "17th-century restored palace combining Tibetan & Balti architecture" , img: "../IMAGES/shiskardu.jpg"},
        { name: "Manthal Buddha Rock", detail: "8th-century granite boulder with intricate Buddhist carvings" , img: "../IMAGES/buddhaskardu.jfif"}
]
    },
     {
      id: 8,
      cityName: "Chitral",
      tagline: "Where ancient Kalash traditions meet the towering Hindu Kush peaks.",
      cardImg: "../IMAGES/Chitral.jpg",
      modalVideo: "",
      hotels: [
        { name: "Bejaan Resorts Chitral", price: "PKR 45,000 / night", img: "../IMAGES/bejaanchitral.jfif" },
        { name: "Gahirat Castle Chitral", price: "PKR 25,000 / night" , img: "../IMAGES/gahiratchitral.jfif"},
        { name: "Chitral Inn Resort", price: "PKR 18,000 / night" , img: "../IMAGES/innchitral.jpg"}
],
     restaurants: [
        { name: "Fokker Friendship Restaurant", detail: "Scenic riverside dining near Garam Chashma" , img: "../IMAGES/fokkerchitral.jfif"},
        { name: "River Breeze Restaurant", detail: "Authentic local Pakistani dishes with river views", img: "../IMAGES/riverchitral.jfif" },
        { name: "Zowalo Restaurant", detail: "Traditional Chitrali karahi & local mountain flavors" , img: "../IMAGES/zomalochitral.jfif"}
],
    places: [
       { name: "Chitral Fort", detail: "Historic 18th-century royal seat along the Chitral River" , img: "../IMAGES/fortchitral.jfif"},
       { name: "Shahi Masjid Chitral", detail: "Grand 19th-century royal mosque with pink marble domes" , img: "../IMAGES/shahichitral.jpg"},
       { name: "Chitral Museum", detail: "Heritage museum showcasing Gandhara art & Kalash ethnology" , img: "../IMAGES/mueseumchitral.jpg"}
]
    },
     {
      id: 9,
      cityName: "Naran",
      tagline: "Where glacial alpine lakes meet roaring river valleys and majestic mountain passes",
      cardImg: "../IMAGES/Naran.jpg",
      modalVideo: "",
      hotels: [
        { name: "The Sarai Hotel & Resort", price: "PKR 35,000 / night" , img: "../IMAGES/sarainaran.jpg"},
        { name: "Mount Feast Hotel Naran", price: "PKR 25,000 / night" , img: "../IMAGES/mountnaran.jpg"},
        { name: "Rockwood Resort Naran", price: "PKR 20,000 / night" , img: "../IMAGES/woodnaran.jpg"}
],
      restaurants: [
        { name: "Moon Restaurant", detail: "Popular spot for traditional Pakistani handi & mountain views" , img: "../IMAGES/moonnaran.jfif" },
        { name: "Punjab Tikka House", detail: "Local favorite for hot desi BBQ, karahi & tikkas" , img: "../IMAGES/tikkanaran.jpg"},
        { name: "The Sarai Restaurant", detail: "Upscale fine dining with river and valley views" , img: "../IMAGES/sarainaran.jfif"}
],
      places: [
        { name: "Saif-ul-Malook Lake", detail: "Legendary turquoise glacial lake surrounded by snowy peaks", img: "../IMAGES/saifnaran.jfif" },
        { name: "Babusar Top", detail: "High mountain pass at 13,700 ft with panoramic valley vistas" , img: "../IMAGES/babusarnaran.jfif"},
        { name: "Lulusar Lake", detail: "Sprawling alpine lake that serves as the main source of the Kunhar River" , img: "../IMAGES/lulusarnaran.jfif"}
]
    },
     {
      id: 10,
      cityName: "Peshawar",
      tagline: "Where ancient Silk Road heritage meets legendary Pashtun hospitality.",
      cardImg: "../IMAGES/Peshawar.jpg",
      modalVideo: "",
     hotels: [
       { name: "Peshawar Serena Hotel", price: "PKR 45,000 / night" , img: "../IMAGES/serenapesh.jpg"},
       { name: "Shelton House Peshawar", price: "PKR 22,000 / night", img: "../IMAGES/sheltonpesh.jpg" },
       { name: "Fort Continental Hotel", price: "PKR 18,000 / night" , img: "../IMAGES/frontpesh.jpg"}
],
     restaurants: [
       { name: "Khyber Charsi Tikka", detail: "Legendary Namak Mandi spot famous for authentic mutton tikka & dumpukht" , img: "../IMAGES/tikkapesh.jfif"},
       { name: "Chief Burgers", detail: "Iconic local Peshawar fast food landmark famous for loaded burgers & pizzas", img: "../IMAGES/burgerpesh.jpg" },
       { name: "Shinwari Restaurant", detail: "Traditional local favorite serving authentic Shinwari karahi & chapli kebabs" , img: "../IMAGES/shinwaripesh.jfif"}
],
     places: [
       { name: "Sethi House", detail: "19th-century grand Silk Road merchant haveli with carved wooden architecture" , img: "../IMAGES/sethipesh.jfif"},
       { name: "Mahabat Khan Mosque", detail: "Iconic 17th-century Mughal white marble mosque in the Old City" , img: "../IMAGES/mahabatpesh.jpg"},
       { name: "Peshawar Museum", detail: "World's largest collection of ancient Gandhara Buddhist art & artifacts" , img: "../IMAGES/mueseumpesh.jfif"}
]
    },
     {
      id: 11,
      cityName: "Azad Kashmir ",
      tagline: "Where emerald rivers and pine-covered valleys cradle pristine alpine beauty.",
      cardImg: "../IMAGES/Azadkashmir.jpg",
      modalVideo: "",
     hotels: [
        { name: "Pearl Continental Muzaffarabad", price: "PKR 42,000 / night" , img: "../IMAGES/pckashmir.jpg"},
        { name: "Shangrila Resort Sharda", price: "PKR 18,000 / night" , img: "../IMAGES/shangrilakashmir.jpg"},
        { name: "Kutton Jagran Resort", price: "PKR 15,000 / night" , img: "../IMAGES/kuttonkashmir.jfif"}
],
    restaurants: [
        { name: "Marco Polo Restaurant", detail: "Fine dining with panoramic river and mountain views" , img: "../IMAGES/marcokashmir.jfif"},
        { name: "Tandoori Restaurant Muzaffarabad", detail: "Popular spot for authentic traditional handi & desi BBQ" , img: "../IMAGES/tandoorikashmir.jfif"},
        { name: "Desi Dera Restaurant", detail: "Traditional local karahi, Kashmiri specialties & grilled meats" , img: "../IMAGES/derakashmir.avif"}
],
    places: [
        { name: "Red Fort (Muzaffarabad Fort)", detail: "16th-century historic fort built by the Chak rulers along the Neelum River", img: "../IMAGES/redkashmir.jpg" },
        { name: "Sharda Peeth Ruins", detail: "Ancient 6th-century temple & educational center ruins in Neelum Valley" , img: "../IMAGES/peethkashmir.jfif"},
        { name: "Pir Chinasi", detail: "Historic mountain shrine at 9,500 ft offering panoramic valley views" , img: "../IMAGES/chinasikashmir.jpg"}
]
    },
     {
      id: 12,
      cityName: "Quetta",
      tagline: "Where high-altitude fruit orchards meet dry rugged peaks and rich Balochi tradition.",
      cardImg: "../IMAGES/Queeta.jpg",
      modalVideo: "",
      hotels: [
        { name: "Quetta Serena Hotel", price: "PKR 40,000 / night" , img: "../IMAGES/serenaquetta.jpg" },
        { name: "Hotel Bloom Star", price: "PKR 15,000 / night" , img: "../IMAGES/bloomquetta.jpg"},
        { name: "Luranz Hotel Quetta", price: "PKR 22,000 / night" , img: "../IMAGES/hotelquetta.jpg"}
],
     restaurants: [
       { name: "Lehri Sajji House", detail: "Legendary spot famous for authentic slow-cooked Balochi sajji", img: "../IMAGES/sajjiquetta.jpg" },
       { name: "Kabul Jaan Restaurant", detail: "Famous for traditional mutton Rosh, Dumba Rosh & Kabuli Pulao", img: "../IMAGES/kabulquetta.jfif" },
       { name: "Usmania Restaurant", detail: "Popular family restaurant serving multi-cuisine desi handi & BBQ" , img: "../IMAGES/usmaniaquetta.jfif"}
],
     places: [
       { name: "Hanna Lake", detail: "Historic 19th-century reservoir surrounded by dry rugged hills" , img: "../IMAGES/hannaquetta.jfif"},
       { name: "Quetta Archaeological Museum", detail: "Museum holding ancient regional artifacts & Bronze Age tools" , img: "../IMAGES/mueseumquetta.jfif"},
       { name: "Miri Fort", detail: "Ancient historic citadel perched on a high mound overlooking the city" , img: "../IMAGES/miriquetta.jfif"}
]
}]
    

    