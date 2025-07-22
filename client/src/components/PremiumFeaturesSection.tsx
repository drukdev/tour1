import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PREMIUM_TOURS, FESTIVAL_CALENDAR, LUXURY_ACCOMMODATIONS, EXPERT_GUIDES } from "@/data/premiumTours";
import { Star, Calendar, MapPin, Users, Clock, Award } from "lucide-react";

export function FeaturedToursSection() {
  const featuredTours = PREMIUM_TOURS.filter(tour => tour.featured);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Premium Tours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handcrafted experiences that showcase the very best of Bhutan's culture, 
            landscapes, and spiritual heritage with unparalleled luxury and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img 
                  src={tour.imageUrl} 
                  alt={tour.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {tour.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {tour.difficulty}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{tour.name}</CardTitle>
                <p className="text-gray-600">{tour.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration} days
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tour.groupSize}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Tour Highlights:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        ${tour.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 ml-1">per person</span>
                    </div>
                    <Button className="btn-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Premium Tours
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FestivalCalendarSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Festival Calendar</span> 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Bhutan's most vibrant celebrations with sacred mask dances, 
            colorful ceremonies, and spiritual traditions dating back centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FESTIVAL_CALENDAR.map((festival, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={festival.image} 
                  alt={festival.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600 text-white">
                    <Calendar className="w-3 h-3 mr-1" />
                    {festival.dates}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{festival.name}</CardTitle>
                <p className="text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {festival.location}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{festival.description}</p>
                <Button variant="outline" className="w-full mt-4">
                  Plan Festival Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LuxuryAccommodationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Luxury <span className="gradient-text">Accommodations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in Bhutan's finest luxury hotels and lodges, where traditional 
            architecture meets world-class amenities and breathtaking locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LUXURY_ACCOMMODATIONS.map((hotel, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">
                    {hotel.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{hotel.name}</CardTitle>
                <p className="text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {hotel.location} • {hotel.rooms}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    {hotel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Star className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {hotel.priceRange}
                      </span>
                      <Button variant="outline" size="sm">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExpertGuidesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="gradient-text">Expert Guides</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified guides are born and raised in Bhutan, bringing authentic 
            cultural insight, warm hospitality, and deep knowledge of our kingdom's traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERT_GUIDES.map((guide, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src={guide.image} 
                    alt={guide.name}
                    className="w-full h-full object-cover rounded-full border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2">
                    <Badge className="bg-green-600 text-white text-xs p-1">
                      <Award className="w-3 h-3" />
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">{guide.name}</CardTitle>
                <p className="text-blue-600 font-medium">{guide.title}</p>
                <p className="text-sm text-gray-500">{guide.experience} Experience</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {guide.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Languages:</strong> {guide.languages.join(', ')}</p>
                    <p><strong>Certification:</strong> {guide.certification}</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic">{guide.bio}</p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Request This Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}