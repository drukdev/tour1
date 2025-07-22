import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const activeTestimonials = testimonials.filter(t => t.isActive);

  useEffect(() => {
    if (!isAutoPlaying || activeTestimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeTestimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeTestimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="bg-gray-300 rounded-3xl h-64"></div>
        </div>
      </div>
    );
  }

  if (activeTestimonials.length === 0) {
    return null;
  }

  const currentTestimonial = activeTestimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-50" />
            
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>
            
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentTestimonial.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {currentTestimonial.name}
              </h4>
              <p className="text-gray-600 mb-2">{currentTestimonial.country}</p>
              <p className="text-sm text-gray-500 italic">
                {currentTestimonial.tripName}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        onClick={goToPrevious}
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-12 h-12 p-0"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        onClick={goToNext}
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-12 h-12 p-0"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {activeTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}