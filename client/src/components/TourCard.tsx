import { useState } from "react";
import { Star, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Tour } from "@shared/schema";
import TourDetailsModal from "./TourDetailsModal";

interface TourCardProps {
  tour: Tour;
  onBookNow: (tour: Tour) => void;
}

export default function TourCard({ tour, onBookNow }: TourCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cultural': return 'bg-blue-500';
      case 'adventure': return 'bg-orange-500';
      case 'spiritual': return 'bg-purple-500';
      case 'photography': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative">
        <img
          src={tour.imageUrl}
          alt={tour.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 ${getCategoryColor(tour.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {getCategoryLabel(tour.category)}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors cursor-pointer">
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
        </div>
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {tour.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {tour.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {tour.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(parseFloat(tour.rating))
                    ? "fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm">({tour.reviewCount} reviews)</span>
        </div>
        
        {tour.highlights && tour.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tour.highlights.slice(0, 3).map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-gray-900">${tour.price}</span>
            <span className="text-gray-600 text-sm ml-1">per person</span>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={() => setShowDetails(true)}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Details
            </Button>
            <Button
              onClick={() => onBookNow(tour)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Tour Details Modal */}
      <TourDetailsModal
        tour={tour}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        onBookNow={onBookNow}
      />
    </div>
  );
}
