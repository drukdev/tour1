import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Shield, Users, Clock, Award, CheckCircle, Phone, Globe, MapPin, Heart } from "lucide-react";

export function WhyChooseUsSection() {
  const advantages = [
    {
      icon: Heart,
      title: "Family-Run Independent Agency",
      description: "Experience the personalized touch of a family-operated travel agency. Our passion for travel and attention to detail ensure your journey is crafted with care and expertise.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Users,
      title: "Expert Local Guides",
      description: "Born and raised Bhutanese guides with government certification, deep cultural knowledge, and genuine passion for sharing the beauty of our Himalayan kingdom.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Shield,
      title: "Safety & 24/7 Support", 
      description: "Round-the-clock active helpline ensures you're never alone during your journey. Our team is always available to assist with emergencies and provide peace of mind.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Star,
      title: "Luxury Accommodations",
      description: "Handpicked selection of premium resorts, boutique hotels, and luxury lodges. Each accommodation ensures exceptional quality and comfort throughout your stay.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MapPin,
      title: "Best Transport Service",
      description: "Reliable, comfortable vehicles with experienced drivers. Explore bustling streets or tranquil landscapes in air-conditioned comfort with our professional drivers.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Globe,
      title: "Competitive Pricing",
      description: "Top-notch services at incredibly competitive prices, ensuring you get the best value for your money. Transparent pricing with no hidden costs or surprises.",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">Bhutan Mind Break</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our executives are friendlier, easier to approach, and better communicators 
            who put you at ease so you can convey your vacation requirements to us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${advantage.color}`}>
                  <advantage.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Best of Bhutan?
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Join over 21,000 happy travelers from 120+ countries who trusted us with their Bhutan journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookingProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Dreams",
      description: "Share your travel preferences, group size, dates, and special interests with our expert consultants."
    },
    {
      number: "02", 
      title: "Custom Itinerary Design",
      description: "We craft a personalized itinerary based on your needs, including accommodations, activities, and guide assignments."
    },
    {
      number: "03",
      title: "Confirm & Secure",
      description: "Review your detailed itinerary, make any adjustments, and secure your booking with flexible payment options."
    },
    {
      number: "04",
      title: "Experience Bhutan",
      description: "Arrive to warm hospitality and expert guidance as you embark on your transformative Bhutan journey."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple <span className="gradient-text">Booking Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From dream to reality in just four easy steps. Our streamlined process 
            ensures your Bhutan adventure is perfectly planned and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-blue-600 to-green-600 opacity-30"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Badge className="bg-green-600 text-white text-lg px-4 py-2">
            <CheckCircle className="w-4 h-4 mr-2" />
            Free Consultation & Quote
          </Badge>
        </div>
      </div>
    </section>
  );
}