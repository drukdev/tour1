import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"inquiry" | "booking">("inquiry");

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
            <Mail className="w-5 h-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Start Your
            <span className="gradient-text"> Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discover the magic of Bhutan? Let our local experts craft the perfect 
            adventure just for you. We're here to answer your questions and bring your 
            dreams to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {/* Form Type Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => setActiveTab("inquiry")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === "inquiry"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === "booking"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Plan Your Trip
              </button>
            </div>

            <ContactForm formType={activeTab} />
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visit Our Office</h4>
                    <p className="text-gray-600">
                      {CONTACT_INFO.address.street}<br />
                      {CONTACT_INFO.address.city}<br />
                      {CONTACT_INFO.address.country}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <div className="text-gray-600">
                      {CONTACT_INFO.phones.map((phone, index) => (
                        <div key={index}>
                          <a href={`tel:${phone}`} className="hover:text-green-600 transition-colors">
                            {phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <div className="text-gray-600">
                      {CONTACT_INFO.emails.map((email, index) => (
                        <div key={index}>
                          <a href={`mailto:${email}`} className="hover:text-yellow-600 transition-colors">
                            {email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Follow Us</h4>
                    <div className="flex space-x-3 mt-2">
                      <a href={CONTACT_INFO.social.facebook} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href={CONTACT_INFO.social.instagram} className="text-gray-400 hover:text-pink-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.491-3.323-1.295C3.851 14.604 3.29 13.467 3.29 12.017s.561-2.588 1.836-3.677c.875-.804 2.026-1.295 3.323-1.295 1.297 0 2.448.491 3.323 1.295 1.275 1.089 1.836 2.226 1.836 3.677s-.561 2.587-1.836 3.676c-.875.804-2.026 1.295-3.323 1.295z"/>
                        </svg>
                      </a>
                      <a href={CONTACT_INFO.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href={CONTACT_INFO.social.youtube} className="text-gray-400 hover:text-red-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>Emergency Contact:</strong> Available 24/7 for travelers currently in Bhutan
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-90">Local Team</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm opacity-90">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about traveling to Bhutan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do I need a visa to visit Bhutan?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, all visitors except Indian, Bangladeshi, and Maldivian nationals need a visa. 
                  We handle all visa arrangements as part of our service.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What is the Sustainable Development Fee?</h4>
                <p className="text-gray-600 text-sm">
                  Bhutan charges a Sustainable Development Fee of $100 per person per night. 
                  This supports conservation and sustainable tourism initiatives.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">When is the best time to visit?</h4>
                <p className="text-gray-600 text-sm">
                  Spring (March-May) and autumn (September-November) offer the best weather. 
                  We can help you choose the perfect time based on your interests.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How far in advance should I book?</h4>
                <p className="text-gray-600 text-sm">
                  We recommend booking 2-3 months in advance, especially for peak seasons. 
                  However, we can often arrange trips with shorter notice.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What's included in your tour packages?</h4>
                <p className="text-gray-600 text-sm">
                  All tours include accommodation, meals, transportation, guides, permits, 
                  and entrance fees. International flights are typically separate.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can you arrange custom itineraries?</h4>
                <p className="text-gray-600 text-sm">
                  Absolutely! We specialize in creating personalized experiences based on 
                  your interests, timeline, and budget. Every traveler is unique.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="btn-primary">
              Contact Our Experts
            </Button>
          </div>
        </section>

        {/* Emergency Contact Banner */}
        <section className="mt-16">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Emergency Support for Current Travelers
              </h3>
              <p className="text-red-700 mb-4">
                If you're currently in Bhutan and need immediate assistance, call our 24/7 emergency line:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+97517112436" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Emergency: +975 17 112 436
                </a>
                <span className="text-red-600 text-sm">Available 24/7</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
