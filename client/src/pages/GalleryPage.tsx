import { useState } from "react";
import { Camera, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/lib/constants";

const categories = [
  { value: "all", label: "All Photos" },
  { value: "landmarks", label: "Landmarks" },
  { value: "culture", label: "Culture" },
  { value: "nature", label: "Nature" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = GALLERY_IMAGES.filter(image => 
    activeFilter === "all" || image.category === activeFilter
  );

  // Extended gallery with more images
  const extendedGallery = [
    ...GALLERY_IMAGES,
    {
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop",
      alt: "Pristine mountain lake with perfect reflections",
      title: "Sacred Waters",
      description: "Crystal clear lakes in the high Himalayas",
      category: "nature"
    },
    {
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      alt: "Traditional Bhutanese architecture",
      title: "Ancient Architecture",
      description: "Timeless designs passed through generations",
      category: "landmarks"
    },
    {
      src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop",
      alt: "Meditation session in mountain monastery",
      title: "Inner Peace",
      description: "Finding tranquility in sacred spaces",
      category: "culture"
    },
    {
      src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
      alt: "Colorful prayer wheels spinning in the wind",
      title: "Prayer Wheels",
      description: "Ancient traditions alive today",
      category: "culture"
    },
  ];

  const displayImages = extendedGallery.filter(image => 
    activeFilter === "all" || image.category === activeFilter
  );

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
            <Camera className="w-5 h-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Photo Gallery</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Glimpses of
            <span className="gradient-text"> Paradise</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the breathtaking beauty of Bhutan through the lens of our travelers 
            and expert photographers. Each image tells a story of wonder and discovery.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm text-gray-500 mr-4">
            <Filter className="w-4 h-4 mr-2" />
            Filter by:
          </div>
          {categories.map((category) => (
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

        {/* Photo Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing {displayImages.length} photos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl bg-white">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-gray-200">{image.description}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photography Tips Section */}
        <section className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photography Tips for Bhutan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capture the magic of the Last Shangri-La with these expert tips from our photography guides.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Golden Hour Magic</h3>
              <p className="text-gray-600 text-sm">
                The soft light during sunrise and sunset creates ethereal shots of monasteries and mountains.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">📷</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Respect & Permission</h3>
              <p className="text-gray-600 text-sm">
                Always ask permission before photographing people and be mindful of sacred spaces.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-lg">🏔️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Altitude Preparation</h3>
              <p className="text-gray-600 text-sm">
                Protect your equipment from altitude changes and carry extra batteries in cold conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Memories?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join our photography tours and capture the essence of Bhutan with expert guidance.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
              Book Photography Tour
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
