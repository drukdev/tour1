import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, Calendar, Search, Filter, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@shared/schema";

const categories = [
  { value: "all", label: "All Articles" },
  { value: "Culture", label: "Culture" },
  { value: "Adventure", label: "Adventure" },
  { value: "Food", label: "Food" },
  { value: "Travel Tips", label: "Travel Tips" },
  { value: "Photography", label: "Photography" },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Travel Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Journey
            <span className="gradient-text"> Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover insider tips, cultural insights, and travel wisdom from our local experts 
            and fellow adventurers who have experienced the magic of Bhutan.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm text-gray-500 mr-4">
              <Filter className="w-4 h-4 mr-2" />
              Categories:
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
        </div>

        {/* Article Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-8">
            {/* Featured Article Skeleton */}
            <div className="bg-white rounded-3xl shadow-xl animate-pulse">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="h-96 bg-gray-300 rounded-l-3xl"></div>
                <div className="p-8 space-y-4">
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            
            {/* Regular Articles Skeleton */}
            <div className="grid lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl animate-pulse">
                  <div className="h-64 bg-gray-300 rounded-t-3xl"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-6 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="space-y-12">
            {/* Featured Article */}
            {featuredPost && activeFilter === "all" && !searchQuery && (
              <article className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      className="w-full h-96 object-cover"
                    />
                    <Badge className="absolute top-6 left-6" variant="secondary">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Badge variant="outline" className="mr-3">
                        {featuredPost.category}
                      </Badge>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                          <div className="text-sm text-gray-500">Travel Expert</div>
                        </div>
                      </div>
                      <Button className="btn-primary">
                        Read Full Article
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Regular Articles Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {(activeFilter === "all" && !searchQuery ? regularPosts : filteredPosts).map((post) => (
                <article key={post.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
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
                      <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 mb-2">No articles found</h3>
            <p className="text-gray-400">
              Try adjusting your search criteria or browse all articles.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Inspired</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest travel insights, cultural discoveries, and exclusive content 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-2 rounded-full font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </section>

        {/* Writing Guidelines */}
        <section className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have you experienced the magic of Bhutan? We'd love to feature your story 
              and insights on our blog.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Stories</h3>
              <p className="text-gray-600 text-sm">
                Share genuine experiences and personal transformations from your Bhutan journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Helpful Insights</h3>
              <p className="text-gray-600 text-sm">
                Provide practical tips and cultural observations that help future travelers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Guest Contributors</h3>
              <p className="text-gray-600 text-sm">
                Join our community of travel writers and share your unique perspective.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="btn-primary">
              Submit Your Story
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
