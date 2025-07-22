import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import TourCard from "@/components/TourCard";
import BookingModal from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Map, Search } from "lucide-react";
import { TOUR_CATEGORIES } from "@/lib/constants";
import type { Tour } from "@shared/schema";

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: tours = [], isLoading } = useQuery<Tour[]>({
    queryKey: ["/api/tours"],
  });

  const filteredTours = tours.filter(tour => {
    const matchesFilter = activeFilter === "all" || tour.category === activeFilter;
    const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
            <Map className="w-5 h-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Tour Packages</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Discover
            <span className="gradient-text"> Bhutan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of transformative journeys through 
            the Last Shangri-La, each designed to create unforgettable memories.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search tours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {TOUR_CATEGORIES.map((category) => (
              <Button
                key={category.value}
                variant={activeFilter === category.value ? "default" : "outline"}
                onClick={() => setActiveFilter(category.value)}
                className={activeFilter === category.value ? "btn-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tour Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredTours.length} of {tours.length} tours
          </p>
        </div>

        {/* Tours Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl animate-pulse">
                <div className="h-64 bg-gray-300 rounded-t-3xl"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredTours.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No tours found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* Why Choose Us Section */}
        <section className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Tours?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every journey with us is more than just a tour—it's a transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">15+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600 text-sm">Deep local knowledge and expertise</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">100%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Guides</h3>
              <p className="text-gray-600 text-sm">Authentic insights from Bhutanese experts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-xl">500+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Happy Travelers</h3>
              <p className="text-gray-600 text-sm">Transformed lives and lasting memories</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">24/7</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">We're with you every step of the way</p>
            </div>
          </div>
        </section>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tour={selectedTour}
      />
    </div>
  );
}
