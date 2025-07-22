import { Heart, Users, Award, Mountain } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Born from a deep love for the Last Shangri-La, we share Bhutan's authentic magic 
            with the world through transformative journeys.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
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
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began in 2008 when our founder, a former monk turned cultural ambassador, 
                realized that most visitors were only seeing the surface of Bhutan's incredible depth. 
                We created Bhutan Mind Break to offer something different—journeys that touch the soul 
                and reveal the true essence of the Land of the Thunder Dragon.
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
              <div className="flex flex-wrap gap-3">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Sustainable Tourism
                </div>
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cultural Preservation
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Community Impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by Bhutan's philosophy of Gross National Happiness 
              and our commitment to sustainable, transformative travel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Experiences</h3>
              <p className="text-gray-600">
                We go beyond tourist attractions to reveal the real Bhutan through genuine cultural exchanges.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Impact</h3>
              <p className="text-gray-600">
                Every journey contributes positively to local communities and environmental conservation.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Our team of local guides shares intimate knowledge passed down through generations.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Growth</h3>
              <p className="text-gray-600">
                We design journeys that inspire transformation and lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full mb-4">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Meet Our Team</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Bhutanese Family</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Local experts who don't just show you Bhutan—they help you feel it, understand it, 
                and fall in love with it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Local Expert
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                    <p className="text-blue-600 text-center font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-center text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We measure our success not just in profits, but in the positive impact we create 
              for travelers, communities, and the environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Travelers Transformed</div>
              <div className="text-sm text-gray-500 mt-1">From 45+ countries</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$250K+</div>
              <div className="text-gray-600 font-medium">Community Investment</div>
              <div className="text-sm text-gray-500 mt-1">Supporting local families</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15</div>
              <div className="text-gray-600 font-medium">Villages Supported</div>
              <div className="text-sm text-gray-500 mt-1">Across all 20 districts</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Return Rate</div>
              <div className="text-sm text-gray-500 mt-1">Travelers recommending us</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
