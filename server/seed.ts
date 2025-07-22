import { db } from "./db";
import { tours, testimonials, blogPosts } from "@shared/schema";

async function seed() {
  console.log("🌱 Seeding database...");

  try {
    // Clear existing data
    await db.delete(blogPosts);
    await db.delete(testimonials);
    await db.delete(tours);

    // Seed tours
    const toursData = [
      {
        name: "Cultural Immersion Experience",
        description: "Dive deep into Bhutanese culture with monastery visits, traditional ceremonies, and local family homestays. Experience authentic Bhutanese life while learning about Buddhism and ancient traditions.",
        duration: 7,
        price: 2500,
        category: "Cultural",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: "4.9",
        reviewCount: 127,
        highlights: [
          "Tiger's Nest Monastery hike",
          "Traditional cooking class",
          "Local family homestay",
          "Buddhist monastery meditation",
          "Thimphu weekend market visit"
        ],
        isActive: true,
        maxGroupSize: 8,
        difficulty: "Easy",
        bestSeason: "Spring",
        includes: [
          "Accommodation in traditional hotels",
          "All meals and local cuisine",
          "Licensed tour guide",
          "Transportation within Bhutan",
          "Monastery entrance fees"
        ],
        excludes: [
          "International flights",
          "Travel insurance",
          "Personal expenses",
          "Tips and gratuities"
        ]
      },
      {
        name: "Himalayan Trekking Adventure",
        description: "Challenge yourself with breathtaking treks through pristine Himalayan landscapes, ancient forests, and remote villages. Perfect for adventure seekers and nature lovers.",
        duration: 14,
        price: 4200,
        category: "Adventure",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: "4.8",
        reviewCount: 89,
        highlights: [
          "Snowman Trek to base camps",
          "High altitude camping",
          "Wildlife spotting",
          "Mountain photography",
          "Cultural village visits"
        ],
        isActive: true,
        maxGroupSize: 6,
        difficulty: "Challenging",
        bestSeason: "Autumn",
        includes: [
          "Professional trekking guide",
          "Camping equipment",
          "All meals during trek",
          "Porter services",
          "Emergency medical kit"
        ],
        excludes: [
          "Personal trekking gear",
          "International flights",
          "Travel insurance",
          "Emergency evacuation"
        ]
      },
      {
        name: "Spiritual Journey & Meditation",
        description: "Find inner peace through guided meditation retreats, spiritual teachings, and sacred site visits. Perfect for those seeking mindfulness and spiritual growth.",
        duration: 10,
        price: 3200,
        category: "Spiritual",
        imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        rating: "4.9",
        reviewCount: 156,
        highlights: [
          "Silent meditation retreats",
          "Buddhist philosophy classes",
          "Sacred temple ceremonies",
          "Mindfulness workshops",
          "Spiritual counseling"
        ],
        isActive: true,
        maxGroupSize: 10,
        difficulty: "Easy",
        bestSeason: "Spring",
        includes: [
          "Meditation retreat accommodation",
          "Vegetarian meals",
          "Spiritual guide",
          "Meditation materials",
          "Certificate of completion"
        ],
        excludes: [
          "International flights",
          "Personal meditation items",
          "Travel insurance",
          "Donations to monasteries"
        ]
      }
    ];

    await db.insert(tours).values(toursData);

    // Seed testimonials
    const testimonialsData = [
      {
        name: "Sarah Mitchell",
        country: "Australia",
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "Bhutan Mind Break gave me the most transformative experience of my life. The cultural immersion was authentic and deeply moving.",
        rating: 5,
        tripName: "Cultural Immersion Experience",
        duration: "7 days",
        isActive: true
      },
      {
        name: "James Chen",
        country: "Singapore",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "The Himalayan trek was challenging but absolutely worth it. The guides were professional and the views were breathtaking.",
        rating: 5,
        tripName: "Himalayan Trekking Adventure",
        duration: "14 days",
        isActive: true
      },
      {
        name: "Maria Rodriguez",
        country: "Spain",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        text: "The spiritual journey helped me find inner peace I didn't know I was looking for. Bhutan is truly magical.",
        rating: 5,
        tripName: "Spiritual Journey & Meditation",
        duration: "10 days",
        isActive: true
      }
    ];

    await db.insert(testimonials).values(testimonialsData);

    // Seed blog posts
    const blogData = [
      {
        title: "Understanding Bhutan's Gross National Happiness",
        content: "Discover how Bhutan measures success not by GDP but by the happiness and well-being of its people...",
        excerpt: "Learn about Bhutan's unique approach to measuring national success through the four pillars of Gross National Happiness.",
        imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Culture",
        readTime: "8 min read",
        author: "Tenzin Norbu",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        isPublished: true,
        publishedAt: new Date()
      },
      {
        title: "Best Time to Visit Bhutan: A Seasonal Guide",
        content: "Planning your trip to Bhutan? Here's everything you need to know about the best times to visit...",
        excerpt: "From spring rhododendrons to autumn festivals, discover the perfect season for your Bhutan adventure.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Travel Tips",
        readTime: "6 min read",
        author: "Pema Lhamo",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        isPublished: true,
        publishedAt: new Date()
      },
      {
        title: "Tiger's Nest Monastery: A Complete Guide",
        content: "Everything you need to know about visiting Bhutan's most iconic monastery perched on a cliff...",
        excerpt: "Your comprehensive guide to visiting Paro Taktsang, including hiking tips, history, and what to expect.",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        category: "Attractions",
        readTime: "10 min read",
        author: "Karma Wangchuk",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        isPublished: true,
        publishedAt: new Date()
      }
    ];

    await db.insert(blogPosts).values(blogData);

    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run seed if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seed().then(() => {
    process.exit(0);
  });
}

export { seed };