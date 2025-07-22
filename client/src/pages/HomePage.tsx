import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import BookingModal from "@/components/BookingModal";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, Star, Camera, Heart, Users, Award, BookOpen, Calendar } from "lucide-react";
import { TOUR_CATEGORIES, TEAM_MEMBERS, GALLERY_IMAGES } from "@/lib/constants";
import { FeaturedToursSection, FestivalCalendarSection, LuxuryAccommodationsSection, ExpertGuidesSection } from "@/components/PremiumFeaturesSection";
import { TrustIndicatorsSection, ReviewsSection } from "@/components/TrustIndicators";
import { AuthenticToursSection, BhutanDestinationsSection, BhutanCultureSection } from "@/components/AuthenticToursSection";
import { BhutanVisaSection, BhutanLifestyleSection, HotStoneBathSection, BhutanRaftingSection } from "@/components/BhutanInfoHub";
import QuickLinks from "@/components/QuickLinks";
import type { Tour, Testimonial, BlogPost } from "@shared/schema";

export default function HomePage() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: tours = [] } = useQuery<Tour[]>({
    queryKey: ["/api/tours"],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const filteredTours = tours.filter(tour => 
    activeFilter === "all" || tour.category === activeFilter
  );

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Tour Packages Section */}
      <section id="tours" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
              <Map className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Tour Packages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transformative
              <span className="gradient-text"> Journeys</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully crafted experiences that blend adventure, culture, and spiritual discovery 
              in the heart of the Himalayas.
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
          
          {/* Tour Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.slice(0, 6).map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop"
                alt="Ancient Bhutanese monastery nestled in mountain valley"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="font-semibold text-gray-800">15+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Born from a Deep Love for the
                <span className="gradient-text"> Last Shangri-La</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bhutan Mind Break was founded by passionate locals who wanted to share the authentic 
                magic of our kingdom with the world. We believe that travel should transform both 
                the visitor and the visited.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
              <Camera className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Photo Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Glimpses of
              <span className="gradient-text"> Paradise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the breathtaking beauty of Bhutan through the lens of our travelers 
              and expert photographers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.slice(0, 6).map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold">{image.title}</h4>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">What Travelers Say</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stories from the
              <span className="gradient-text"> Heart</span>
            </h2>
          </div>
          
          {/* Featured Testimonial */}
          {testimonials.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 shadow-2xl mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 italic leading-relaxed font-light">
                  "{testimonials[0].text}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[0].imageUrl}
                    alt={testimonials[0].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">{testimonials[0].name}</div>
                    <div className="text-gray-500">{testimonials[0].country} • {testimonials[0].tripName}</div>
                    <div className="text-sm text-blue-600">{testimonials[0].duration}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.slice(1, 4).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.tripName}</span>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <QuickLinks />

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
              <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Travel Blog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Journey
              <span className="gradient-text"> Insights</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button variant="link" className="text-blue-600 hover:text-blue-700">
                      Read More →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Tours from Competitor Analysis */}
      <AuthenticToursSection />
      <BhutanDestinationsSection />
      <BhutanCultureSection />
      <BhutanVisaSection />
      <BhutanLifestyleSection />
      <HotStoneBathSection />
      <BhutanRaftingSection />
      <TrustIndicatorsSection />
      <FestivalCalendarSection />
      <LuxuryAccommodationsSection />
      <ExpertGuidesSection />
      <ReviewsSection />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tour={selectedTour}
      />
    </div>
  );
}
