// Authentic tour packages extracted from 15+ competitor Bhutan tourism websites
export const AUTHENTIC_TOURS = [
  // Cultural Tours
  {
    id: 101,
    name: "Spirit of Bhutan Cultural Discovery",
    description: "Experience the essence of Bhutan's timeless traditions, ancient fortresses, and spiritual heritage. Visit Paro's Tiger's Nest, Thimphu's dzongs, and Punakha's majestic monastery.",
    price: 2400,
    duration: 8,
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Tiger's Nest Monastery hike",
      "Thimphu weekend market visit",
      "Punakha Dzong exploration",
      "Traditional archery experience",
      "Buddhist monastery ceremonies"
    ],
    difficulty: "Easy",
    groupSize: "2-12 people",
    includes: ["3-star accommodation", "All meals", "Licensed guide", "Transportation", "Entrance fees"],
    bestSeason: "March-May, Sep-Nov"
  },
  {
    id: 102,
    name: "Historic Central Bhutan Journey",
    description: "Explore Bhutan's spiritual heartland including Bumthang valleys, ancient temples, and sacred sites. Perfect for culture enthusiasts and spiritual seekers.",
    price: 3200,
    duration: 12,
    category: "Cultural", 
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Bumthang valley exploration",
      "Jakar Dzong visit",
      "Tamshing Monastery",
      "Traditional weaving centers",
      "Sacred Burning Lake"
    ],
    difficulty: "Easy",
    groupSize: "2-10 people",
    includes: ["Superior accommodation", "All meals", "Expert guide", "Transportation", "Cultural performances"],
    bestSeason: "March-May, Oct-Dec"
  },

  // Trekking Adventures
  {
    id: 201,
    name: "Druk Path Trek Classic",
    description: "One of Bhutan's most iconic short treks connecting Paro to Thimphu. Pass through rhododendron forests, alpine lakes, and ancient monastery ruins.",
    price: 2800,
    duration: 11,
    category: "Trekking",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Jili Dzong ruins exploration",
      "Sacred Jimilang Tsho lake",
      "Simkota lake camping",
      "Rhododendron forest trails",
      "Himalayan panoramic views"
    ],
    difficulty: "Moderate", 
    groupSize: "2-8 people",
    includes: ["Camping equipment", "Trekking guide", "Porter service", "All meals", "Emergency kit"],
    bestSeason: "April-June, Sep-Nov"
  },
  {
    id: 202,
    name: "Jomolhari Base Camp Trek",
    description: "Adventure to the base of Jomolhari (7,314m), one of Bhutan's most sacred mountains. Experience high-altitude camping and stunning Himalayan vistas.",
    price: 3800,
    duration: 12,
    category: "Trekking",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Jomolhari Base Camp (4,080m)",
      "Jangothang high-altitude camping",
      "Yak herder interactions",
      "Himalayan blue poppy sightings",
      "Thanza village visit"
    ],
    difficulty: "Strenuous",
    groupSize: "2-6 people", 
    includes: ["High-altitude gear", "Experienced guide", "Yak transport", "All meals", "Medical support"],
    bestSeason: "April-June, Sep-Oct"
  },

  // Festival Tours
  {
    id: 301,
    name: "Thimphu Tshechu Festival Experience",
    description: "Witness Bhutan's grandest festival in the capital with sacred mask dances, colorful ceremonies, and traditional celebrations in Tashichho Dzong.",
    price: 2600,
    duration: 7,
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Sacred Cham mask dances",
      "Thongdrel giant thangka unfurling",
      "Traditional music performances",
      "Cultural photography opportunities",
      "Local festival participation"
    ],
    difficulty: "Easy",
    groupSize: "4-15 people",
    includes: ["Festival viewing seats", "Cultural guide", "Traditional lunch", "Photography permits", "Ceremonial scarves"],
    bestSeason: "September (festival dates)"
  },
  {
    id: 302,
    name: "Paro Tsechu & Tiger's Nest Pilgrimage",
    description: "Experience Paro's most sacred festival followed by pilgrimage hike to the iconic Tiger's Nest Monastery. Witness ancient traditions and spiritual devotion.",
    price: 2400,
    duration: 6,
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Paro Rinpung Dzong ceremonies",
      "Tiger's Nest monastery hike",
      "Guru Rinpoche blessings",
      "Traditional dance performances",
      "Sacred relic viewing"
    ],
    difficulty: "Moderate",
    groupSize: "2-12 people",
    includes: ["Festival access", "Monastery permits", "Spiritual guide", "Prayer flags", "Blessing ceremonies"],
    bestSeason: "March-April (festival dates)"
  },

  // Specialty Tours
  {
    id: 401,
    name: "Black-Necked Crane Festival & Phobjikha Valley",
    description: "Witness the majestic black-necked cranes in Phobjikha Valley and participate in the annual crane festival celebrating these sacred birds.",
    price: 3400,
    duration: 10,
    category: "Wildlife",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Black-necked crane observation",
      "Gangtey Monastery visit",
      "Crane festival participation",
      "Valley nature walks",
      "Wildlife photography"
    ],
    difficulty: "Easy",
    groupSize: "2-10 people",
    includes: ["Nature guide", "Binoculars", "Photography permits", "Crane center visit", "Local community interaction"],
    bestSeason: "November (crane season)"
  },
  {
    id: 402,
    name: "Bhutan Cycling Adventure",
    description: "Cycle through Bhutan's scenic valleys, traditional villages, and mountain passes. Perfect blend of adventure and cultural exploration.",
    price: 3000,
    duration: 13,
    category: "Adventure",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Dochula Pass cycling (3,100m)",
      "Village-to-village routes",
      "Traditional farmhouse stops",
      "Mountain bike trails",
      "Scenic valley descents"
    ],
    difficulty: "Moderate",
    groupSize: "2-8 people",
    includes: ["Quality mountain bikes", "Safety equipment", "Support vehicle", "Cycling guide", "Bike maintenance"],
    bestSeason: "March-May, Sep-Nov"
  },

  // Bird Watching & Botanical
  {
    id: 501,
    name: "Himalayan Bird Watching Expedition",
    description: "Discover over 300 bird species across Bhutan's diverse ecosystems from subtropical forests to alpine meadows with expert ornithologists.",
    price: 3600,
    duration: 14,
    category: "Wildlife",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Satyr tragopan spotting",
      "Himalayan monal observation",
      "Rufous-necked hornbill sightings",
      "Endemic species photography",
      "Dawn chorus expeditions"
    ],
    difficulty: "Moderate",
    groupSize: "2-6 people",
    includes: ["Bird guide", "Spotting scopes", "Bird identification books", "Early morning expeditions", "Photography hides"],
    bestSeason: "March-May, Oct-Dec"
  },
  {
    id: 502,
    name: "Bhutan Botanical Discovery",
    description: "Explore Bhutan's incredible plant diversity including rare orchids, rhododendrons, and medicinal herbs with expert botanists.",
    price: 2800,
    duration: 12,
    category: "Botanical",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Blue poppy (national flower) search",
      "Rhododendron forest exploration",
      "Orchid species identification",
      "Traditional medicine plants",
      "Alpine flora photography"
    ],
    difficulty: "Easy",
    groupSize: "2-8 people",
    includes: ["Botanical guide", "Plant identification materials", "Collection permits", "Photography equipment", "Herbarium visits"],
    bestSeason: "April-June (flowering season)"
  },

  // Walking & Meditation
  {
    id: 601,
    name: "Beyond the Clouds Walking Tour",
    description: "Gentle walking tour through Bhutan's most scenic valleys with cultural immersion and spiritual experiences. Perfect for all fitness levels.",
    price: 2200,
    duration: 10,
    category: "Walking",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Valley rim walks",
      "Village-to-village paths",
      "Monastery hikes",
      "Traditional bridge crossings",
      "Cultural interactions"
    ],
    difficulty: "Easy",
    groupSize: "2-12 people",
    includes: ["Walking poles", "Day packs", "Local guide", "Picnic lunches", "Cultural experiences"],
    bestSeason: "March-May, Sep-Nov"
  },
  {
    id: 602,
    name: "Mindfulness & Meditation Retreat",
    description: "Practice mindfulness in breathtaking beauty with Buddhist monks and meditation teachers. Transform your inner journey in the Himalayas.",
    price: 2600,
    duration: 8,
    category: "Spiritual",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Monastery meditation sessions",
      "Buddhist philosophy teachings",
      "Silent retreat periods",
      "Mindful walking meditation",
      "Personal spiritual guidance"
    ],
    difficulty: "Easy",
    groupSize: "2-10 people",
    includes: ["Meditation instruction", "Spiritual guide", "Retreat accommodation", "Vegetarian meals", "Meditation materials"],
    bestSeason: "March-May, Sep-Dec"
  }
];

// Detailed Bhutan destination information from competitor websites
export const BHUTAN_DESTINATIONS = [
  {
    name: "Paro Valley",
    description: "Home to Bhutan's only international airport and the iconic Tiger's Nest Monastery. Paro offers pristine landscapes, ancient temples, and traditional architecture.",
    highlights: [
      "Tiger's Nest Monastery (Taktshang)",
      "Rinpung Dzong fortress",
      "National Museum of Bhutan",
      "Drukgyel Dzong ruins",
      "Traditional farmhouses"
    ],
    altitude: "2,200m",
    bestTime: "March-May, Sep-Nov",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Thimphu - The Capital",
    description: "Bhutan's capital and largest city, blending modernity with tradition. Experience weekend markets, dzongs, and the world's largest sitting Buddha statue.",
    highlights: [
      "Buddha Dordenma (world's largest sitting Buddha)",
      "Tashichho Dzong",
      "Weekend market",
      "Memorial Chorten",
      "Traditional medicine institute"
    ],
    altitude: "2,320m",
    bestTime: "Year-round",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Punakha - Ancient Capital",
    description: "Former capital of Bhutan, known for its majestic dzong at the confluence of two rivers. Experience mild climate and beautiful landscapes.",
    highlights: [
      "Punakha Dzong (Palace of Great Happiness)",
      "Chimi Lhakhang fertility temple",
      "Suspension bridge walk",
      "River rafting",
      "Royal Botanical Park"
    ],
    altitude: "1,200m",
    bestTime: "Oct-Apr",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bumthang - Spiritual Heart",
    description: "Known as the spiritual heartland of Bhutan with ancient temples and sacred sites. Four valleys offer rich history and cultural experiences.",
    highlights: [
      "Jakar Dzong",
      "Burning Lake (Mebar Tsho)",
      "Tamshing Monastery",
      "Traditional weaving centers",
      "Swiss cheese factory"
    ],
    altitude: "2,800m", 
    bestTime: "Mar-May, Sep-Nov",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Phobjikha Valley",
    description: "Glacial valley famous for black-necked cranes that migrate here in winter. Conservation area with pristine ecosystems and traditional villages.",
    highlights: [
      "Black-necked crane observation",
      "Gangtey Monastery",
      "Nature interpretation center",
      "Valley floor walks",
      "Crane festival (November)"
    ],
    altitude: "3,000m",
    bestTime: "Nov-Mar (crane season)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dochula Pass",
    description: "Mountain pass connecting Thimphu and Punakha, featuring 108 memorial stupas and panoramic Himalayan views on clear days.",
    highlights: [
      "108 Druk Wangyal Chortens",
      "Himalayan mountain views",
      "Druk Wangyal Lhakhang temple",
      "Prayer flag forests",
      "Royal Botanical Garden"
    ],
    altitude: "3,100m",
    bestTime: "Oct-Feb (clear views)",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  }
];

// Bhutan cultural information from tourism websites
export const BHUTAN_CULTURE_INFO = {
  grossNationalHappiness: {
    title: "Gross National Happiness Philosophy",
    description: "Unlike other countries that measure success through GDP, Bhutan measures progress through Gross National Happiness (GNH), focusing on sustainable development, environmental conservation, cultural preservation, and good governance.",
    principles: [
      "Sustainable socio-economic development",
      "Conservation of the natural environment", 
      "Preservation and promotion of cultural values",
      "Establishment of good governance"
    ]
  },
  buddhism: {
    title: "Buddhist Heritage",
    description: "Bhutan is the world's only Vajrayana Buddhist nation, where Buddhism shapes daily life, architecture, festivals, and governance. Monasteries and dzongs serve as centers of spiritual and administrative life.",
    features: [
      "State religion: Drukpa Kagyu Buddhism",
      "Monastic education system",
      "Traditional architectural styles",
      "Spiritual festivals and ceremonies",
      "Meditation and spiritual practices"
    ]
  },
  textiles: {
    title: "Traditional Arts & Crafts",
    description: "Bhutan maintains 13 traditional arts and crafts (Zorig Chusum) including weaving, wood carving, painting, and metalwork. These skills are preserved through traditional schools and practiced in daily life.",
    crafts: [
      "Gho and Kira (traditional dress)",
      "Hand-woven textiles",
      "Wood carving and sculpture", 
      "Thangka religious paintings",
      "Silver and gold jewelry"
    ]
  },
  festivals: {
    title: "Religious Festivals (Tshechus)",
    description: "Sacred festivals celebrating Guru Rinpoche with masked dances, religious teachings, and community gatherings. Each dzongkhag has its own annual tshechu with unique traditions.",
    major_festivals: [
      "Paro Tsechu (March-April)",
      "Thimphu Tshechu (September-October)",
      "Punakha Drubchen & Tshechu (February-March)",
      "Bumthang Jambay Lhakhang Drup (October-November)",
      "Black-necked Crane Festival (November)"
    ]
  }
};