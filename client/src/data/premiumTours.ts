// Premium tours based on competitor analysis
export const PREMIUM_TOURS = [
  {
    id: 1,
    name: "Luxury Bhutan Discovery",
    description: "Experience Bhutan's timeless traditions and breathtaking landscapes in ultimate luxury. Stay in premium hotels, enjoy private cultural performances, and explore with expert guides.",
    price: 5800,
    duration: 10,
    category: "Luxury",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Amankora luxury lodges",
      "Private monastery visits", 
      "Helicopter transfers",
      "Royal dinner experiences",
      "Spa treatments with Himalayan views"
    ],
    difficulty: "Easy",
    groupSize: "2-8 people",
    featured: true
  },
  {
    id: 2,
    name: "Jomolhari Snow Leopard Trek",
    description: "Join our signature high-altitude adventure to Jomolhari Base Camp. Moderate 14-day trek with incredible Himalayan panoramas and rare snow leopard spotting opportunities.",
    price: 4200,
    duration: 14,
    category: "Trekking",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Jomolhari Base Camp (4,080m)",
      "Snow leopard tracking",
      "Alpine lake camping", 
      "Mount Everest views",
      "Expert mountain guides"
    ],
    difficulty: "Moderate",
    groupSize: "4-12 people",
    featured: true
  },
  {
    id: 3,
    name: "Druk Path Cultural Trek",
    description: "One of Bhutan's most iconic short treks connecting Paro to Thimphu. Perfect blend of adventure and culture with monastery visits and alpine scenery.",
    price: 2800,
    duration: 9,
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1510133744874-e9b47734579a?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Tiger's Nest Monastery",
      "Jili Dzong ruins",
      "Sacred alpine lakes",
      "Rhododendron forests", 
      "Traditional villages"
    ],
    difficulty: "Moderate",
    groupSize: "2-10 people",
    featured: true
  },
  {
    id: 4,
    name: "Whispers of the Monpas",
    description: "Rare cultural immersion with Bhutan's indigenous Monpa tribe in remote Trongsa. Experience age-old traditions and authentic village life.",
    price: 3900,
    duration: 10,
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Monpa village homestays",
      "Traditional healing ceremonies",
      "Ancient practices",
      "Remote valley exploration",
      "Cultural documentation"
    ],
    difficulty: "Easy",
    groupSize: "2-6 people",
    featured: false
  },
  {
    id: 5,
    name: "Festival Celebration Tour",
    description: "Time your visit with Bhutan's most vibrant festivals including Paro Tsechu, Thimphu Tshechu, or Punakha Tshechu. Experience masked dances and ceremonies.",
    price: 3500,
    duration: 8,
    category: "Festival",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Sacred mask dances",
      "Festival photography",
      "Traditional costumes",
      "Religious ceremonies",
      "Local celebrations"
    ],
    difficulty: "Easy",
    groupSize: "4-15 people",
    featured: false
  },
  {
    id: 6,
    name: "Wellness & Healing Retreat",
    description: "Summer wellness retreat combining forest walks, traditional healing, and cultural immersion in serene highland locations for rejuvenation.",
    price: 2400,
    duration: 6,
    category: "Wellness",
    imageUrl: "https://images.unsplash.com/photo-1510133744874-e9b47734579a?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Hot stone bath therapy",
      "Forest meditation walks",
      "Traditional medicine",
      "Organic farm experiences",
      "Highland yoga sessions"
    ],
    difficulty: "Easy", 
    groupSize: "2-8 people",
    featured: false
  }
];

export const FESTIVAL_CALENDAR = [
  {
    name: "Paro Tsechu",
    dates: "March 15-19, 2025",
    location: "Paro Dzong",
    description: "One of Bhutan's most spectacular festivals featuring sacred mask dances and the unfurling of the giant thangka.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Thimphu Tshechu", 
    dates: "September 10-12, 2025",
    location: "Thimphu Dzong",
    description: "The capital's grandest festival with religious mask dances, traditional music, and colorful ceremonies.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Punakha Drubchen",
    dates: "February 28 - March 2, 2025", 
    location: "Punakha Dzong",
    description: "Historic reenactment festival commemorating Bhutan's victory over Tibetan invaders.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  }
];

export const LUXURY_ACCOMMODATIONS = [
  {
    name: "Amankora Paro",
    category: "Ultra-Luxury Lodge",
    location: "Paro Valley",
    rooms: "24 suites",
    features: [
      "Traditional farmhouse setting",
      "Panoramic valley views",
      "Spa with signature treatments",
      "Private terraces and gardens"
    ],
    priceRange: "$1,200-2,500/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Six Senses Thimphu",
    category: "Luxury Eco-Resort", 
    location: "Thimphu Valley",
    rooms: "20 suites",
    features: [
      "Sustainable forest setting",
      "Wellness spa programs",
      "Organic farm dining",
      "Meditation pavilions"
    ],
    priceRange: "$800-1,500/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "COMO Uma Punakha",
    category: "Boutique Luxury",
    location: "Punakha Valley", 
    rooms: "11 luxury rooms",
    features: [
      "Riverfront location",
      "Contemporary Bhutanese design",
      "Adventure concierge",
      "Private villa options"
    ],
    priceRange: "$600-1,200/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  }
];

export const EXPERT_GUIDES = [
  {
    name: "Karma Gyeltshen",
    title: "Senior Cultural Guide",
    experience: "15+ years",
    specialties: ["Cultural Tours", "Festival Experiences", "Monastery Visits"],
    languages: ["English", "Dzongkha", "Hindi", "Nepali"],
    certification: "Department of Tourism Certified",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Born in Thimphu, Karma brings deep cultural insight and warm hospitality to every journey. His storytelling abilities and monastery connections create truly authentic experiences."
  },
  {
    name: "Tenzin Norbu", 
    title: "High-Altitude Trekking Specialist",
    experience: "12+ years",
    specialties: ["Mountain Treks", "Wildlife Tracking", "Photography Tours"],
    languages: ["English", "Dzongkha", "Sherpa"],
    certification: "Mountain Guide Association Certified",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", 
    bio: "Expert mountaineer who has guided over 200 successful treks to Jomolhari and other peaks. Passionate about wildlife conservation and mountain photography."
  },
  {
    name: "Pema Lhamo",
    title: "Wellness & Spiritual Guide",
    experience: "10+ years", 
    specialties: ["Meditation Retreats", "Traditional Healing", "Women's Tours"],
    languages: ["English", "Dzongkha", "Tibetan"],
    certification: "Traditional Medicine & Tourism Certified",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b15c?auto=format&fit=crop&w=400&q=80",
    bio: "Former Buddhist nun turned guide, Pema specializes in spiritual journeys and traditional healing practices. Creates transformative experiences for female travelers."
  }
];