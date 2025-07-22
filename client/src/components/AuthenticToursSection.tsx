import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, Users, Mountain, Calendar, MapPin, Star, 
  Camera, Binoculars, TreePine, Heart, Award, CheckCircle 
} from "lucide-react";
import { AUTHENTIC_TOURS, BHUTAN_DESTINATIONS, BHUTAN_CULTURE_INFO } from "@/data/authenticTours";

export function AuthenticToursSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Tours', count: AUTHENTIC_TOURS.length },
    { id: 'Cultural', label: 'Cultural', count: AUTHENTIC_TOURS.filter(t => t.category === 'Cultural').length },
    { id: 'Trekking', label: 'Trekking', count: AUTHENTIC_TOURS.filter(t => t.category === 'Trekking').length },
    { id: 'Festival', label: 'Festival', count: AUTHENTIC_TOURS.filter(t => t.category === 'Festival').length },
    { id: 'Wildlife', label: 'Wildlife', count: AUTHENTIC_TOURS.filter(t => t.category === 'Wildlife').length },
    { id: 'Adventure', label: 'Adventure', count: AUTHENTIC_TOURS.filter(t => t.category === 'Adventure').length },
    { id: 'Spiritual', label: 'Spiritual', count: AUTHENTIC_TOURS.filter(t => t.category === 'Spiritual').length }
  ];

  const filteredTours = selectedCategory === 'all' 
    ? AUTHENTIC_TOURS 
    : AUTHENTIC_TOURS.filter(tour => tour.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
      Cultural: Camera,
      Trekking: Mountain,
      Festival: Calendar,
      Wildlife: Binoculars,
      Adventure: TreePine,
      Spiritual: Heart
    };
    return icons[category] || Star;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-blue-600 text-white text-sm px-4 py-2 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Authentic Bhutan Experiences
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Discover <span className="gradient-text">Real Bhutan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Curated experiences from Bhutan's most trusted operators. Each tour is crafted 
            by local experts who understand the heart and soul of the Last Shangri-La.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id 
                    ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" 
                    : "hover:bg-blue-50"
                }`}
              >
{React.createElement(Icon, { className: "w-4 h-4" })}
                {category.label}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => {
            const Icon = getCategoryIcon(tour.category);
            return (
              <Card key={tour.id} className="premium-card group overflow-hidden">
                <div className="relative">
                  <img
                    src={tour.imageUrl}
                    alt={tour.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r from-blue-600 to-green-600 text-white`}>
                      {React.createElement(Icon, { className: "w-3 h-3 mr-1" })}
                      {tour.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/70 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {tour.duration} days
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tour.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">${tour.price}</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {tour.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{tour.groupSize}</span>
                      <div className="mx-3 w-1 h-1 bg-gray-300 rounded-full"></div>
                      <Mountain className="w-4 h-4 mr-2 text-green-500" />
                      <span>{tour.difficulty}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{tour.bestSeason}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Tour Highlights:</h4>
                    <ul className="space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                      {tour.highlights.length > 3 && (
                        <li className="text-sm text-blue-600 font-medium">
                          +{tour.highlights.length - 3} more highlights
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                    >
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-shrink-0">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Can't Find Your Perfect Adventure?
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Our Bhutan experts can create a custom itinerary tailored to your interests, 
              group size, and travel dates. Every journey is unique, just like you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Create Custom Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                Speak to Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BhutanDestinationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Explore <span className="gradient-text">Bhutan's Wonders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sacred monasteries perched on cliff faces to pristine valleys 
            where time stands still, discover the destinations that make Bhutan magical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BHUTAN_DESTINATIONS.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-white/90 text-sm flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {destination.altitude} altitude
                  </p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Must-See Attractions:</h4>
                  <ul className="space-y-1">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 mr-2 text-yellow-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1 text-green-500" />
                    <span>{destination.bestTime}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Learn More
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

export function BhutanCultureSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Understanding <span className="gradient-text">Bhutan's Soul</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Bhutan unique - a kingdom where happiness is measured, 
            tradition thrives, and spirituality guides daily life.
          </p>
        </div>

        <Tabs defaultValue="gnh" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="gnh">Gross National Happiness</TabsTrigger>
            <TabsTrigger value="buddhism">Buddhism</TabsTrigger>
            <TabsTrigger value="arts">Arts & Crafts</TabsTrigger>
            <TabsTrigger value="festivals">Festivals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gnh" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {BHUTAN_CULTURE_INFO.grossNationalHappiness.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {BHUTAN_CULTURE_INFO.grossNationalHappiness.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BHUTAN_CULTURE_INFO.grossNationalHappiness.principles.map((principle, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{principle}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="buddhism" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {BHUTAN_CULTURE_INFO.buddhism.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {BHUTAN_CULTURE_INFO.buddhism.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BHUTAN_CULTURE_INFO.buddhism.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-orange-50 rounded-lg">
                    <Heart className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="arts" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {BHUTAN_CULTURE_INFO.textiles.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {BHUTAN_CULTURE_INFO.textiles.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BHUTAN_CULTURE_INFO.textiles.crafts.map((craft, index) => (
                  <div key={index} className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <Star className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{craft}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="festivals" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {BHUTAN_CULTURE_INFO.festivals.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {BHUTAN_CULTURE_INFO.festivals.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {BHUTAN_CULTURE_INFO.festivals.major_festivals.map((festival, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{festival}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}