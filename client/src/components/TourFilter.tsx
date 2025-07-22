import { useState } from "react";
import { Filter, Calendar, DollarSign, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TOUR_CATEGORIES } from "@/lib/constants";
import type { Tour } from "@shared/schema";

interface TourFilterProps {
  tours: Tour[];
  onFilteredTours: (tours: Tour[]) => void;
}

export default function TourFilter({ tours, onFilteredTours }: TourFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    duration: "",
    priceRange: "",
    groupSize: "",
    difficulty: "",
    season: "",
  });

  const applyFilters = () => {
    let filtered = [...tours];

    if (filters.category) {
      filtered = filtered.filter(tour => tour.category === filters.category);
    }

    if (filters.duration) {
      const [min, max] = filters.duration.split("-").map(Number);
      filtered = filtered.filter(tour => {
        const duration = tour.duration;
        if (max) {
          return duration >= min && duration <= max;
        }
        return duration >= min;
      });
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      filtered = filtered.filter(tour => {
        const price = tour.price;
        if (max) {
          return price >= min && price <= max;
        }
        return price >= min;
      });
    }

    if (filters.groupSize) {
      const maxSize = parseInt(filters.groupSize);
      filtered = filtered.filter(tour => tour.maxGroupSize <= maxSize);
    }

    if (filters.difficulty) {
      filtered = filtered.filter(tour => tour.difficulty === filters.difficulty);
    }

    onFilteredTours(filtered);
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      duration: "",
      priceRange: "",
      groupSize: "",
      difficulty: "",
      season: "",
    });
    onFilteredTours(tours);
  };

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Auto-apply filters when changed
    setTimeout(() => {
      let filtered = [...tours];

      if (newFilters.category) {
        filtered = filtered.filter(tour => tour.category === newFilters.category);
      }

      if (newFilters.duration) {
        const [min, max] = newFilters.duration.split("-").map(Number);
        filtered = filtered.filter(tour => {
          const duration = tour.duration;
          if (max) {
            return duration >= min && duration <= max;
          }
          return duration >= min;
        });
      }

      if (newFilters.priceRange) {
        const [min, max] = newFilters.priceRange.split("-").map(Number);
        filtered = filtered.filter(tour => {
          const price = tour.price;
          if (max) {
            return price >= min && price <= max;
          }
          return price >= min;
        });
      }

      if (newFilters.groupSize) {
        const maxSize = parseInt(newFilters.groupSize);
        filtered = filtered.filter(tour => tour.maxGroupSize <= maxSize);
      }

      if (newFilters.difficulty) {
        filtered = filtered.filter(tour => tour.difficulty === newFilters.difficulty);
      }

      onFilteredTours(filtered);
    }, 100);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <div className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filter Tours</span>
            </div>
            <span className="text-sm text-gray-500">
              {Object.values(filters).filter(Boolean).length} active filters
            </span>
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                <MapPin className="w-4 h-4 inline mr-1" />
                Category
              </Label>
              <Select value={filters.category} onValueChange={(value) => updateFilter("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {TOUR_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Duration Filter */}
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium text-gray-700">
                <Calendar className="w-4 h-4 inline mr-1" />
                Duration (Days)
              </Label>
              <Select value={filters.duration} onValueChange={(value) => updateFilter("duration", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Duration</SelectItem>
                  <SelectItem value="1-3">1-3 Days</SelectItem>
                  <SelectItem value="4-7">4-7 Days</SelectItem>
                  <SelectItem value="8-14">8-14 Days</SelectItem>
                  <SelectItem value="15">15+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-2">
              <Label htmlFor="priceRange" className="text-sm font-medium text-gray-700">
                <DollarSign className="w-4 h-4 inline mr-1" />
                Price Range (USD)
              </Label>
              <Select value={filters.priceRange} onValueChange={(value) => updateFilter("priceRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Price</SelectItem>
                  <SelectItem value="0-2000">Under $2,000</SelectItem>
                  <SelectItem value="2000-4000">$2,000 - $4,000</SelectItem>
                  <SelectItem value="4000-6000">$4,000 - $6,000</SelectItem>
                  <SelectItem value="6000">$6,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Group Size Filter */}
            <div className="space-y-2">
              <Label htmlFor="groupSize" className="text-sm font-medium text-gray-700">
                <Users className="w-4 h-4 inline mr-1" />
                Max Group Size
              </Label>
              <Select value={filters.groupSize} onValueChange={(value) => updateFilter("groupSize", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Size</SelectItem>
                  <SelectItem value="4">Small (1-4 people)</SelectItem>
                  <SelectItem value="8">Medium (5-8 people)</SelectItem>
                  <SelectItem value="12">Large (9-12 people)</SelectItem>
                  <SelectItem value="20">Extra Large (13+ people)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-2">
              <Label htmlFor="difficulty" className="text-sm font-medium text-gray-700">
                Difficulty Level
              </Label>
              <Select value={filters.difficulty} onValueChange={(value) => updateFilter("difficulty", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Level</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Challenging">Challenging</SelectItem>
                  <SelectItem value="Difficult">Difficult</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Season Filter */}
            <div className="space-y-2">
              <Label htmlFor="season" className="text-sm font-medium text-gray-700">
                Best Season
              </Label>
              <Select value={filters.season} onValueChange={(value) => updateFilter("season", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Season</SelectItem>
                  <SelectItem value="Spring">Spring (Mar-May)</SelectItem>
                  <SelectItem value="Summer">Summer (Jun-Aug)</SelectItem>
                  <SelectItem value="Autumn">Autumn (Sep-Nov)</SelectItem>
                  <SelectItem value="Winter">Winter (Dec-Feb)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex space-x-4 pt-4 border-t">
            <Button onClick={applyFilters} className="flex-1">
              Apply Filters
            </Button>
            <Button onClick={clearFilters} variant="outline" className="flex-1">
              Clear All
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}