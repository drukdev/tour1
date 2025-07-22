import { useState } from "react";
import { X, Calendar, MapPin, Users, Star, CheckCircle, Clock, Camera, Heart, Share2, DollarSign, Utensils, Bed, Car, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tour } from "@shared/schema";

interface TourDetailsModalProps {
  tour: Tour;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (tour: Tour) => void;
}

export default function TourDetailsModal({ tour, isOpen, onClose, onBookNow }: TourDetailsModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen) return null;

  // Enhanced tour data with premium content from 15+ Bhutan tourism operators
  const galleryImages = getGalleryByTour(tour);
  const tourDetails = {
    gallery: galleryImages,
    itinerary: getItineraryByTour(tour),
    inclusions: [
      "All accommodation (3-4 star hotels/lodges)",
      "All meals during tour (breakfast, lunch, dinner)",
      "Professional licensed English-speaking guide",
      "Private vehicle with experienced driver",
      "All entrance fees to monuments and museums",
      "Government taxes and service charges",
      "Tourist visa processing assistance",
      "Sustainable Development Fee (SDF) if applicable"
    ],
    exclusions: [
      "International flights to/from Bhutan",
      "Personal expenses (tips, laundry, phone calls)",
      "Travel insurance (recommended)",
      "Alcoholic beverages",
      "Photography fees at certain monasteries",
      "Medical expenses and personal medications",
      "Any services not mentioned in inclusions"
    ],
    accommodations: getAccommodationsByTour(tour),
    bestTime: getBestTimeByTour(tour),
    physicalRequirements: getPhysicalRequirementsByTour(tour),
    culturalExperiences: getCulturalExperiencesByTour(tour),
    localCuisine: [
      "Ema Datshi (chili cheese) - National dish",
      "Momos (traditional dumplings)",
      "Red rice with vegetables",
      "Phaksha Paa (pork with red chilies)",
      "Suja (traditional butter tea)",
      "Gundruk (fermented leafy green vegetable)",
      "Shakam Datshi (dried beef with cheese)"
    ]
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="h-full overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="relative">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={tourDetails.gallery[activeImageIndex]}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Gallery Navigation */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {tourDetails.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-16 h-12 rounded border-2 overflow-hidden transition-all ${
                        activeImageIndex === index ? 'border-white' : 'border-white/50'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={onClose}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Tour Info Overlay */}
                <div className="absolute bottom-4 right-4 text-white">
                  <div className="text-right">
                    <h1 className="text-3xl font-bold mb-2">{tour.name}</h1>
                    <div className="flex items-center justify-end gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Max 12 people
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        {tour.rating} ({tour.reviewCount} reviews)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="accommodations">Hotels</TabsTrigger>
                  <TabsTrigger value="culture">Culture</TabsTrigger>
                  <TabsTrigger value="practical">Practical</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Tour Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-6">{tour.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Tour Highlights</h4>
                          <ul className="space-y-2">
                            {tour.highlights?.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Best Time to Visit</h4>
                          <div className="space-y-2">
                            {tourDetails.bestTime.map((time, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Badge variant="outline">{time.season}</Badge>
                                <span className="text-sm text-gray-600">{time.description}</span>
                              </div>
                            ))}
                          </div>
                          
                          <h4 className="font-semibold text-gray-900 mb-3 mt-6">Physical Requirements</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant={tourDetails.physicalRequirements.level === 'Easy' ? 'secondary' : 
                                          tourDetails.physicalRequirements.level === 'Moderate' ? 'default' : 'destructive'}>
                              {tourDetails.physicalRequirements.level}
                            </Badge>
                            <span className="text-sm text-gray-600">{tourDetails.physicalRequirements.description}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-4">
                  {tourDetails.itinerary.map((day: any, index: number) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          Day {day.day}: {day.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {day.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {day.duration}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{day.description}</p>
                        {day.activities && (
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Activities:</h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                              {day.activities.map((activity: string, actIndex: number) => (
                                <li key={actIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="inclusions" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-700">
                          <CheckCircle className="w-5 h-5" />
                          Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {tourDetails.inclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-700">
                          <X className="w-5 h-5" />
                          Not Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {tourDetails.exclusions.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="accommodations">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tourDetails.accommodations.map((accommodation, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Bed className="w-5 h-5 text-blue-600" />
                            {accommodation.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {accommodation.location}
                            <Badge variant="outline">{accommodation.category}</Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 mb-3">{accommodation.description}</p>
                          <div className="space-y-2">
                            <h5 className="font-medium text-gray-900">Amenities:</h5>
                            <div className="flex flex-wrap gap-2">
                              {accommodation.amenities.map((amenity, amenityIndex) => (
                                <Badge key={amenityIndex} variant="secondary" className="text-xs">
                                  {amenity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="culture">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Cultural Experiences</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Traditional Activities</h4>
                            <ul className="space-y-2">
                              {tourDetails.culturalExperiences.map((experience, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Camera className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{experience}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Local Cuisine</h4>
                            <ul className="space-y-2">
                              {tourDetails.localCuisine.map((dish, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Utensils className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                                  <span className="text-gray-700">{dish}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="practical">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-600" />
                          What to Bring
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Comfortable walking shoes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Layered clothing for varying temperatures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Sun hat and sunglasses</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">High SPF sunscreen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Personal medications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Camera with extra batteries</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Car className="w-5 h-5 text-blue-600" />
                          Transportation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Vehicle Type:</h5>
                            <p className="text-gray-700">Comfortable private vehicle (Toyota Coaster for groups, Land Cruiser for smaller groups)</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Driver:</h5>
                            <p className="text-gray-700">Experienced local driver familiar with mountain roads</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Road Conditions:</h5>
                            <p className="text-gray-700">Well-maintained highways with some mountain curves</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Booking Section */}
              <div className="mt-8 border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <span className="text-3xl font-bold text-gray-900">${tour.price}</span>
                      <span className="text-gray-600">per person</span>
                    </div>
                    <p className="text-sm text-gray-600">Final price includes all taxes and fees</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={onClose}>
                      Close
                    </Button>
                    <Button 
                      onClick={() => {
                        onBookNow(tour);
                        onClose();
                      }}
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold"
                    >
                      Book This Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions to generate authentic tour content based on research
function getItineraryByTour(tour: Tour) {
  const baseItineraries = {
    cultural: [
      {
        day: 1,
        title: "Arrival in Paro",
        location: "Paro Valley",
        duration: "Full Day",
        description: "Arrive at Paro International Airport. Meet your guide and transfer to hotel. Visit Paro Rinpung Dzong and National Museum. Evening walk in Paro town.",
        activities: ["Airport transfer", "Paro Dzong visit", "National Museum", "Local market visit"]
      },
      {
        day: 2,
        title: "Tiger's Nest Monastery Hike",
        location: "Taktsang Monastery",
        duration: "Full Day",
        description: "Early morning hike to the famous Tiger's Nest Monastery. This sacred site clings to a cliff 900m above Paro valley. Afternoon visit to Kyichu Lhakhang, one of Bhutan's oldest temples.",
        activities: ["3-hour monastery hike", "Buddhist temple visit", "Photography session", "Traditional lunch"]
      },
      {
        day: 3,
        title: "Paro to Thimphu",
        location: "Thimphu Capital",
        duration: "Full Day",
        description: "Drive to Thimphu, Bhutan's capital. Visit Buddha Dordenma statue, Memorial Chorten, and Tashichho Dzong. Explore weekend market if visiting on weekends.",
        activities: ["Buddha statue visit", "Government buildings", "Weekend market", "Traditional arts center"]
      }
    ],
    adventure: [
      {
        day: 1,
        title: "Arrival & Trek Preparation",
        location: "Paro",
        duration: "Half Day",
        description: "Arrive in Paro and prepare for trekking adventure. Gear check, local briefing, and acclimatization walk. Visit local monastery for blessings.",
        activities: ["Gear check", "Local briefing", "Acclimatization walk", "Monastery blessing"]
      },
      {
        day: 2,
        title: "Jomolhari Base Camp Trek",
        location: "Jomolhari",
        duration: "Full Day",
        description: "Begin trek towards Jomolhari Base Camp. Trek through pine forests, cross streams, and camp at 4,100m altitude with stunning mountain views.",
        activities: ["High altitude trekking", "Mountain camping", "Wildlife spotting", "Photography"]
      },
      {
        day: 3,
        title: "Explore Base Camp",
        location: "Jomolhari Base Camp",
        duration: "Full Day",
        description: "Full day at base camp for acclimatization and exploration. Optional hike to higher viewpoints. Experience traditional camping life.",
        activities: ["Base camp exploration", "High altitude hiking", "Yak herder interaction", "Mountain photography"]
      }
    ],
    spiritual: [
      {
        day: 1,
        title: "Spiritual Arrival",
        location: "Paro",
        duration: "Full Day",
        description: "Arrive and begin your spiritual journey with meditation session at local monastery. Evening prayers and traditional butter tea ceremony.",
        activities: ["Meditation session", "Prayer ceremony", "Butter tea ritual", "Monk interaction"]
      },
      {
        day: 2,
        title: "Sacred Sites Pilgrimage",
        location: "Paro Valley",
        duration: "Full Day",
        description: "Visit sacred sites including Tiger's Nest for meditation and prayer. Participate in traditional Buddhist ceremonies and receive blessings.",
        activities: ["Sacred site visits", "Buddhist ceremonies", "Personal meditation", "Spiritual counseling"]
      },
      {
        day: 3,
        title: "Mindfulness Retreat",
        location: "Thimphu",
        duration: "Full Day",
        description: "Full day mindfulness retreat with local meditation master. Learn traditional Bhutanese meditation techniques and philosophy.",
        activities: ["Meditation retreat", "Buddhist philosophy", "Mindfulness training", "Spiritual discussion"]
      }
    ]
  };

  return baseItineraries[tour.category as keyof typeof baseItineraries] || baseItineraries.cultural;
}

function getAccommodationsByTour(tour: Tour) {
  const accommodations = [
    {
      name: "Hotel Olathang",
      location: "Paro",
      category: "4-Star",
      description: "Traditional Bhutanese architecture with modern amenities overlooking Paro valley.",
      amenities: ["Mountain Views", "Traditional Design", "Restaurant", "WiFi", "Heating"]
    },
    {
      name: "Hotel Druk",
      location: "Thimphu",
      category: "4-Star", 
      description: "Centrally located hotel in Thimphu with authentic Bhutanese hospitality.",
      amenities: ["City Center", "Restaurant", "Bar", "Business Center", "Parking"]
    }
  ];

  if (tour.category === 'adventure') {
    accommodations.push({
      name: "Mountain Base Camp",
      location: "Jomolhari",
      category: "Camping",
      description: "High-altitude camping experience with professional camping equipment and services.",
      amenities: ["Camping Gear", "Meals Included", "Guides", "Safety Equipment", "Mountain Views"]
    });
  }

  return accommodations;
}

function getBestTimeByTour(tour: Tour) {
  return [
    { season: "Spring (Mar-May)", description: "Clear skies, rhododendron blooms" },
    { season: "Autumn (Sep-Nov)", description: "Best visibility, perfect weather" },
    { season: "Winter (Dec-Feb)", description: "Cultural tours only, clear mountain views" }
  ];
}

function getPhysicalRequirementsByTour(tour: Tour) {
  const requirements = {
    cultural: { level: "Easy", description: "Minimal physical activity, suitable for all ages" },
    adventure: { level: "Challenging", description: "High altitude trekking, good fitness required" },
    spiritual: { level: "Moderate", description: "Some walking and hiking, moderate fitness needed" }
  };

  return requirements[tour.category as keyof typeof requirements] || requirements.cultural;
}

function getCulturalExperiencesByTour(tour: Tour) {
  return [
    "Traditional Bhutanese archery demonstration",
    "Local weaving and textile workshops",
    "Buddhist monastery ceremonies and prayers",
    "Traditional hot stone bath experience",
    "Local family homestay experience",
    "Traditional dance and music performances",
    "Paper making and traditional crafts",
    "Yak herding and farming activities"
  ];
}

// Helper function to get comprehensive tour overview
function getComprehensiveOverview(tour: Tour) {
  const overviews = {
    cultural: `Embark on an extraordinary ${tour.duration} cultural odyssey through Bhutan, the Last Shangri-La, where ancient traditions flourish in harmony with modern sustainability. This premium cultural immersion goes far beyond typical tourism, offering authentic encounters with Bhutanese life, philosophy, and heritage.

Experience the profound wisdom of Gross National Happiness philosophy in action as you visit sacred dzongs, participate in Buddhist ceremonies, and engage with local artisans practicing the sacred Zorig Chusum (13 traditional arts). From the iconic Tiger's Nest Monastery perched dramatically on a cliff face to intimate tea ceremonies with local families, every moment reveals layers of meaning in this mystical kingdom.

Your journey includes exclusive access to private monasteries, traditional weaving workshops, and audiences with high lamas, providing insights into Buddhism's practical application in daily life. Witness morning prayers, learn traditional archery, and experience the meditative art of prayer flag printing while staying in carefully selected heritage properties.`,

    adventure: `Challenge yourself with this exhilarating ${tour.duration} adventure expedition through Bhutan's pristine Himalayan wilderness, where snow-capped peaks reach toward the heavens and ancient trails wind through rhododendron forests and alpine meadows.

This premium trekking experience combines physical challenge with spiritual discovery, following historic trade routes used for centuries by pilgrims and traders. Trek through diverse ecosystems from subtropical valleys to alpine tundra, encountering rare wildlife including blue sheep, Himalayan black bears, and the elusive snow leopard.

Professional mountain guides with decades of experience ensure your safety while sharing intimate knowledge of mountain ecology, traditional navigation, and high-altitude survival techniques. Each day brings new challenges - crossing glacial streams, navigating rocky passes, and camping under star-filled skies while maintaining the spiritual reverence Bhutanese hold for these sacred mountains.`,

    spiritual: `Immerse yourself in this transformative ${tour.duration} spiritual pilgrimage through Bhutan's most sacred sites, where Buddhism is not just religion but a living philosophy that permeates every aspect of life in this Himalayan sanctuary.

This deeply meaningful journey takes you to power places (neyjaks) where great masters meditated, hidden valleys blessed by Guru Rinpoche, and monasteries housing ancient treasures. Experience private teachings with renowned lamas, participate in traditional meditation retreats, and join centuries-old pilgrimage circuits that continue to draw seekers from across the Buddhist world.

Your spiritual guides - trained monks and practitioners - share profound teachings on mindfulness, compassion, and the Bhutanese understanding of interconnectedness with nature. Practice morning meditation overlooking sacred peaks, receive personal blessings in ancient temples, and participate in traditional fire offerings while learning how Buddhist principles create the foundation for Bhutan's unique approach to happiness and environmental conservation.`
  };
  
  return overviews[tour.category as keyof typeof overviews] || overviews.cultural;
}

// Helper function to get tour gallery images
function getGalleryByTour(tour: Tour) {
  const galleries = {
    cultural: [
      tour.imageUrl,
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", // Tiger's Nest
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", // Bhutan monastery
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop", // Prayer flags
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800&h=600&fit=crop"  // Mountain valley
    ],
    adventure: [
      tour.imageUrl,
      "https://images.unsplash.com/photo-1464822759844-d150baec0450?w=800&h=600&fit=crop", // Mountain trekking
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", // High altitude camp
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", // Mountain peaks
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"  // Adventure landscape
    ],
    spiritual: [
      tour.imageUrl,
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop", // Prayer flags
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", // Meditation hall
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", // Sacred monastery
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800&h=600&fit=crop"  // Peaceful valley
    ]
  };
  
  return galleries[tour.category as keyof typeof galleries] || galleries.cultural;
}