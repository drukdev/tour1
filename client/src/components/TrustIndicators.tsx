import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Users, Clock, Award, CheckCircle } from "lucide-react";

export function TrustIndicatorsSection() {
  const stats = [
    { label: "Happy Travelers", value: "21,000+", icon: Users },
    { label: "Years Experience", value: "35+", icon: Clock },
    { label: "5-Star Reviews", value: "10,000+", icon: Star },
    { label: "Countries Served", value: "120+", icon: Award }
  ];

  const certifications = [
    {
      name: "Tourism Council of Bhutan",
      description: "Officially licensed tour operator",
      badge: "TCB Certified"
    },
    {
      name: "Department of Tourism",
      description: "Government certified guides",
      badge: "DoT Verified"
    },
    {
      name: "TripAdvisor Certificate",
      description: "Excellence in customer service",
      badge: "Excellence Award"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certified & Trusted
            </h3>
            <p className="text-gray-600">
              Officially recognized by Bhutan's government and international travel organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <Badge className="bg-green-600 text-white mb-3">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert.badge}
                  </Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Family-Owned Excellence</h4>
              <p className="text-gray-600 text-sm">
                Personalized service from a family-operated agency with deep local connections and three decades of experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Local Guides</h4>
              <p className="text-gray-600 text-sm">
                Born and raised Bhutanese guides with government certification and passion for sharing authentic cultural experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Safety & Support</h4>
              <p className="text-gray-600 text-sm">
                24/7 emergency support, comprehensive insurance coverage, and safety protocols exceeding international standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "California, USA",
      rating: 5,
      date: "January 2025",
      text: "Our experience with Bhutan Mind Break was truly exceptional! Their personalized service and attention to detail made our trip to Bhutan unforgettable. The comprehensive information and transparent quotes made decision-making effortless.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b15c?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Peter Deeks",
      location: "Queensland, Australia", 
      rating: 5,
      date: "December 2024",
      text: "The journey was exceptionally well organized and offered a rare chance to engage with a geography, culture, and religion so different from our own. The flexibility and attention to our interests made the experience unforgettable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Mary Ann Polard",
      location: "Masovian, Poland",
      rating: 5,
      date: "November 2024",
      text: "Our guide welcomed us with warmth, intelligence, and insight. From breathtaking drives and countryside hikes to temple treks and vibrant festivals, Bhutan's beauty and cultural richness truly moved us.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Travelers <span className="gradient-text">Say About Us</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Badge className="bg-green-600 text-white">
              4.9/5 Average Rating
            </Badge>
          </div>
          <p className="text-xl text-gray-600">
            Over 10,000 five-star reviews from travelers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.location}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* External Review Links */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">View more reviews on:</p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="https://www.trustpilot.com/favicon.ico" 
                alt="Trustpilot"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-700">Trustpilot</span>
              <Badge className="bg-green-600 text-white text-xs">4.9/5</Badge>
            </div>
            <div className="flex items-center gap-2">
              <img 
                src="https://www.tripadvisor.com/favicon.ico" 
                alt="TripAdvisor"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-700">TripAdvisor</span>
              <Badge className="bg-green-600 text-white text-xs">Certificate of Excellence</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}