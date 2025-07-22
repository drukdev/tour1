import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Plane, 
  Shield, 
  UserCog,
  ExternalLink,
  Mountain,
  Camera,
  Users
} from "lucide-react";
import AdminPanel from "./AdminPanel";

export default function QuickLinks() {
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const quickLinks = [
    {
      icon: MapPin,
      title: "Popular Destinations",
      links: [
        { name: "Tiger's Nest Monastery", href: "/destinations/tigers-nest" },
        { name: "Thimphu Capital", href: "/destinations/thimphu" },
        { name: "Punakha Dzong", href: "/destinations/punakha" },
        { name: "Paro Valley", href: "/destinations/paro" }
      ]
    },
    {
      icon: Mountain,
      title: "Tour Categories",
      links: [
        { name: "Cultural Tours", href: "/tours?category=cultural" },
        { name: "Adventure Trekking", href: "/tours?category=adventure" },
        { name: "Spiritual Journeys", href: "/tours?category=spiritual" },
        { name: "Photography Tours", href: "/tours?category=photography" }
      ]
    },
    {
      icon: Camera,
      title: "Travel Information",
      links: [
        { name: "Visa Requirements", href: "/visa-info" },
        { name: "Best Time to Visit", href: "/travel-guide" },
        { name: "Bhutan Culture", href: "/culture" },
        { name: "Travel Tips", href: "/travel-tips" }
      ]
    },
    {
      icon: Users,
      title: "Services",
      links: [
        { name: "Guide Registration", href: "/guide-registration" },
        { name: "Custom Tour Request", href: "/custom-tour" },
        { name: "Group Bookings", href: "/group-bookings" },
        { name: "Travel Insurance", href: "/insurance" }
      ]
    },
    {
      icon: UserCog,
      title: "Admin Access",
      links: [
        { name: "Admin Panel", href: "#", action: "admin" as const },
        { name: "Tour Management", href: "#", action: "admin" as const },
        { name: "Guide Management", href: "#", action: "admin" as const },
        { name: "Booking Reports", href: "#", action: "admin" as const }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, label: "Emergency", value: "+975-2-323251" },
    { icon: Mail, label: "Support", value: "info@bhutanmindbreak.com" },
    { icon: Clock, label: "Office Hours", value: "9 AM - 6 PM BST" },
    { icon: Plane, label: "Airport Code", value: "PBH (Paro)" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick <span className="gradient-text">Links & Information</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to plan your perfect Bhutan adventure, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {quickLinks.map((section, index) => (
            <Card key={index} className="brand-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <section.icon className="w-5 h-5 text-blue-600" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {"action" in link && link.action === "admin" ? (
                        <button
                          onClick={() => setShowAdminPanel(true)}
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-1 group w-full text-left"
                        >
                          {link.name}
                          <UserCog className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : (
                        <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-1 group">
                          {link.name}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <info.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium text-gray-900">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Shield className="w-5 h-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Police:</strong> 113</li>
                <li><strong>Fire Department:</strong> 110</li>
                <li><strong>Medical Emergency:</strong> 112</li>
                <li><strong>Tourist Helpline:</strong> +975-2-323251</li>
                <li><strong>Paro Airport:</strong> +975-8-271316</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <UserCog className="w-5 h-5" />
                Management Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-700 mb-4">
                Administrative access for tour operators and staff members.
              </p>
              <Button 
                onClick={() => setShowAdminPanel(true)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <UserCog className="w-4 h-4 mr-2" />
                Admin Login
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Media & External Links */}
        <Card>
          <CardHeader>
            <CardTitle>Stay Connected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="https://www.facebook.com/bhutantourism"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/bhutan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://www.youtube.com/bhutantourism"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                YouTube
              </a>
              <a
                href="https://bhutan.travel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Official Portal
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Panel Modal */}
      <AdminPanel 
        isOpen={showAdminPanel}
        onClose={() => setShowAdminPanel(false)}
      />
    </section>
  );
}