// Comprehensive Bhutan Information from Research
export const BHUTAN_VISA_INFO = {
  visaRequirements: {
    title: "Bhutan Visa & Entry Requirements",
    overview: "All international visitors (except India, Bangladesh, Maldives) require a visa before traveling to Bhutan. All visas must be processed through licensed tour operators.",
    requirements: [
      {
        title: "Required Documents",
        items: [
          "Passport valid for at least 6 months",
          "Passport-sized photograph",
          "Valid travel insurance proof",
          "Completed visa application form"
        ]
      },
      {
        title: "Application Process",
        items: [
          "Online e-visa application at visit.doi.gov.bt",
          "Application through licensed tour operator",
          "Processing time: 5-7 working days",
          "Visa approval from Thimphu required"
        ]
      }
    ],
    fees: {
      visaFee: 40,
      currency: "USD",
      refundable: false,
      note: "One-off visa application fee payable during application"
    }
  },
  
  sustainableDevelopmentFee: {
    title: "Sustainable Development Fee (SDF) 2025",
    description: "The SDF supports Bhutan's commitment to sustainable tourism and environmental conservation.",
    rates: [
      {
        category: "International Tourists",
        rate: 100,
        currency: "USD",
        period: "per person per night",
        childDiscount: "50% for ages 6-12, Free under 6"
      },
      {
        category: "Indian Nationals",
        rate: 1200,
        currency: "INR/BTN",
        period: "per person per night",
        childDiscount: "50% for ages 6-12, Free under 6"
      },
      {
        category: "Bangladeshi Nationals",
        rate: 15,
        currency: "USD", 
        period: "per person per night",
        specialNote: "🇧🇩 SPECIAL RATE: Only $15 USD/night for first 15,000 Bangladeshi tourists annually",
        quota: "Limited to 15,000 tourists per year",
        afterQuota: "Regular international rate ($100 USD/night) applies after quota is reached",
        childDiscount: "50% discount for ages 6-12, Free under 6 years"
      }
    ],
    validity: "Valid until August 31, 2027",
    exemptions: [
      "24-hour stays in border towns (Phuentsholing, Samtse, Gelephu, Samdrup Jongkhar)",
      "Children under 6 years old",
      "Refundable if trip is cancelled or shortened"
    ],
    bangladeshiSummary: {
      title: "Quick Summary for Bangladeshi Travelers",
      points: [
        "Special discounted SDF rate of only $15 USD per night",
        "Limited to first 15,000 Bangladeshi tourists per year",
        "Children 6-12 get 50% discount ($7.50 USD/night)",
        "Children under 6 travel completely free",
        "After 15,000 quota: regular $100 USD/night rate applies",
        "Book early to secure your discounted rate!"
      ]
    }
  }
};

export const BHUTAN_LIFESTYLE = {
  traditionalDress: {
    title: "Living Heritage: Gho & Kira",
    description: "Bhutanese traditional dress isn't museum wear—it's living, breathing daily attire that defines the kingdom's unique identity.",
    mensDress: {
      name: "Gho",
      description: "Knee-length robe wrapped around the body, secured with a kera (woven belt)",
      features: [
        "Creates large front pouch called 'world's largest pocket'",
        "Used for carrying phones, wallets, and traditional items",
        "Mandatory in government offices and schools",
        "Worn for sports, work, and daily activities"
      ],
      modernAdaptations: [
        "Designer T-shirts worn underneath",
        "Smartphones tucked into folds",
        "Colorful socks and modern accessories"
      ]
    },
    womensDress: {
      name: "Kira",
      description: "Ankle-length rectangular cloth wrapped around the body with intricate designs",
      components: [
        "Kira: Main rectangular cloth (100\" x 60\")",
        "Wonju: Long-sleeved blouse underneath",
        "Toego: Short jacket worn over",
        "Koma: Silver hooks fastening at shoulders"
      ],
      occasions: [
        "Daily: Simple striped patterns",
        "Special events: Elaborate embroideries and bright colors",
        "Formal: Ceremonial scarves (Rachu) indicating status"
      ]
    },
    culturalSignificance: {
      mandatorySettings: [
        "Government offices and schools",
        "Monasteries and dzongs visits",
        "National celebrations and festivals"
      ],
      statusSymbols: [
        "Kabney (men's scarves): Yellow=King, Orange=Ministers, White=Commoners",
        "Rachu (women's scarves): Indicate social and ceremonial status",
        "Colors represent strength, purity, fertility, and authority"
      ],
      economicImpact: "Typical families spend 33% of income on traditional clothing"
    }
  },
  
  dailyLife: {
    title: "Bhutanese Way of Life",
    philosophy: "Guided by Gross National Happiness principles emphasizing balance, community, and spiritual well-being",
    workLife: [
      "Traditional dress mandatory in formal settings",
      "Government offices close early for family time",
      "Work-life balance prioritized over productivity",
      "Community service (woola) expected from citizens"
    ],
    spirituality: [
      "Buddhism integrated into daily routines",
      "Morning prayers and meditation common",
      "Monastery visits part of regular life",
      "Festival participation expected and celebrated"
    ],
    modernBlend: [
      "Smartphones and internet widely used",
      "Traditional architecture maintained in cities",
      "Western education combined with Buddhist values",
      "Modern amenities with cultural preservation"
    ]
  }
};

export const HOT_STONE_BATH_INFO = {
  title: "Menchu: Traditional Hot Stone Bath Therapy",
  overview: "Ancient Bhutanese healing therapy combining heated river stones, medicinal herbs, and mineral-rich mountain water for physical and spiritual wellness.",
  
  traditionalProcess: {
    setup: [
      "Wooden bathtubs constructed outdoors or rustic settings",
      "River boulders heated in fires for several hours until glowing",
      "Fresh mountain spring water fills wooden tubs",
      "Artemisia leaves and medicinal herbs added to water"
    ],
    experience: [
      "Hot stones placed in separate wooden chamber connected to tub",
      "Stones crack and release beneficial minerals when hitting water",
      "Temperature controlled by adding more heated stones",
      "Sessions typically last 60-90 minutes"
    ]
  },
  
  healthBenefits: {
    physical: [
      "Relieves muscle aches, joint pain, arthritis",
      "Helps chronic headaches and skin conditions",
      "Boosts immune system and circulation",
      "Releases deep tension and stress",
      "Aids detoxification through mineral absorption"
    ],
    mentalSpiritual: [
      "Promotes deep relaxation and meditation",
      "Harmonizes body and mind",
      "Cultural connection to wellness traditions",
      "Based on Tibetan medicine and Ayurvedic practices"
    ]
  },
  
  experiences: {
    luxury: [
      {
        name: "Uma Paro & Uma Punakha",
        feature: "90-minute treatments with wildflowers and mountain views",
        setting: "Premium resort spas"
      },
      {
        name: "Amankora Gangtey",
        feature: "Candlelit farm shed settings with tea service",
        setting: "Exclusive lodge experience"
      },
      {
        name: "Six Senses Thimphu",
        feature: "Focus on immune system boosting and spiritual healing",
        setting: "World-class wellness resort"
      }
    ],
    traditional: [
      {
        name: "Sherab Dema Farmhouse (Bumthang)",
        feature: "Authentic experience near Jambay Lhakhang temple",
        price: "$12-18 USD"
      },
      {
        name: "Aum Choden Homestay (Paro)",
        feature: "108-year-old traditional Bhutanese house",
        price: "$15-20 USD"
      }
    ]
  },
  
  culturalContext: {
    history: "Discovered by Buddhist masters seeking relief from ailments",
    familyTradition: "Weekly ritual for farming families after hard work",
    seasons: "Winter months particularly popular for warming therapy",
    astrology: "Many consult astrologers for auspicious bathing days",
    heritage: "Bhutan known as 'Land of Medicinal Herbs' (Menjong)"
  }
};

export const BHUTAN_RAFTING_INFO = {
  title: "White Water Rafting & Adventure Activities",
  overview: "Bhutan offers pristine glacial rivers, stunning mountain scenery, and world-class adventure activities in an unspoiled Himalayan setting.",
  
  moChhuRiver: {
    name: "Mo Chhu River (Female River)",
    status: "Bhutan's premier white water rafting destination",
    details: {
      location: "Punakha Valley",
      distance: "10-16 km routes available",
      duration: "1.5-3 hours",
      difficulty: "Class I-II+ (beginner-friendly)",
      bestTime: "Year-round, optimal March-May & September-November"
    },
    highlights: [
      "Float past magnificent Punakha Dzong (1637 fortress)",
      "Views of traditional villages and terraced rice fields",
      "Crystal-clear glacial waters from Himalayas",
      "Start point: Base of Khamsum Yulay Namgyal Chorten"
    ],
    pricing: {
      groupRate: "$300 USD for 1-6 people + $50 each additional",
      peakSeason: "$24-42 USD per person",
      offSeason: "$12-18 USD per person",
      included: "Helmets, life jackets, professional guides"
    }
  },
  
  otherRivers: [
    {
      name: "Pho Chhu (Male River)",
      difficulty: "Class II-III+",
      location: "Punakha",
      bestFor: "Intermediate rafters"
    },
    {
      name: "Puna Tsang Chhu",
      difficulty: "Class III-V",
      location: "West Central",
      bestFor: "Adrenaline seekers"
    },
    {
      name: "Wang Chhu",
      difficulty: "Class III-V",
      location: "Thimphu",
      bestFor: "Experienced rafters"
    },
    {
      name: "Drangme Chhu",
      difficulty: "Class II",
      location: "Manas National Park",
      bestFor: "Families/beginners"
    }
  ],
  
  adventureActivities: {
    mountain: [
      "Trekking: Tiger's Nest, Jomolhari, Snowman Trek",
      "Mountain Biking: Paro, Phobjikha Valley trails",
      "Rock Climbing: The Nose (Thimphu), 13 bolted routes",
      "Paragliding: Ura Valley with Himalayan views"
    ],
    cultural: [
      "Archery: National sport with traditional bamboo bows",
      "Hot Air Ballooning: Paro Valley scenic flights",
      "Helicopter Tours: Royal Bhutan Helicopter Service"
    ],
    nature: [
      "Wildlife Safari: Royal Manas National Park",
      "Fishing: Trout & freshwater tuna (700 rupees/day permit)",
      "Hot Springs: Duer Hot Springs, Bumthang",
      "Suspension Bridge Crossing: Punakha's historic iron bridge"
    ]
  },
  
  operators: [
    {
      name: "Druk Rafting Service",
      specialty: "Oldest operator with best equipment",
      website: "raftingbhutan.com"
    },
    {
      name: "Amen Bhutan Tours",
      specialty: "Premier eco-friendly operator",
      focus: "Sustainable adventure tourism"
    },
    {
      name: "Firefox Tours",
      specialty: "Multi-river options, Manas expeditions",
      strength: "Comprehensive adventure packages"
    }
  ]
};