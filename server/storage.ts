import { 
  users, tours, bookings, inquiries, testimonials, blogPosts,
  guides, itineraries, itineraryDays, customTourRequests,
  type User, type InsertUser, type Tour, type InsertTour,
  type Booking, type InsertBooking, type Inquiry, type InsertInquiry,
  type Testimonial, type InsertTestimonial, type BlogPost, type InsertBlogPost,
  type Guide, type InsertGuide, type Itinerary, type InsertItinerary,
  type ItineraryDay, type InsertItineraryDay, type CustomTourRequest, type InsertCustomTourRequest
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Tours
  getAllTours(): Promise<Tour[]>;
  getToursByCategory(category: string): Promise<Tour[]>;
  getTour(id: number): Promise<Tour | undefined>;
  createTour(tour: InsertTour): Promise<Tour>;

  // Bookings
  getAllBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;

  // Inquiries
  getAllInquiries(): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Blog Posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Guides
  getAllGuides(): Promise<Guide[]>;
  getGuide(id: number): Promise<Guide | undefined>;
  createGuide(guide: InsertGuide): Promise<Guide>;
  updateGuideStatus(id: number, status: string): Promise<Guide | undefined>;
  getAvailableGuides(type: string): Promise<Guide[]>;

  // Itineraries
  getAllItineraries(): Promise<Itinerary[]>;
  getItinerary(id: number): Promise<Itinerary | undefined>;
  createItinerary(itinerary: InsertItinerary): Promise<Itinerary>;
  updateItinerary(id: number, updates: Partial<Itinerary>): Promise<Itinerary | undefined>;
  deleteItinerary(id: number): Promise<boolean>;

  // Itinerary Days
  getItineraryDays(itineraryId: number): Promise<ItineraryDay[]>;
  createItineraryDay(day: InsertItineraryDay): Promise<ItineraryDay>;
  updateItineraryDay(id: number, updates: Partial<ItineraryDay>): Promise<ItineraryDay | undefined>;
  deleteItineraryDay(id: number): Promise<boolean>;

  // Custom Tour Requests
  getAllCustomTourRequests(): Promise<CustomTourRequest[]>;
  getCustomTourRequest(id: number): Promise<CustomTourRequest | undefined>;
  createCustomTourRequest(request: InsertCustomTourRequest): Promise<CustomTourRequest>;
  updateCustomTourRequest(id: number, updates: Partial<CustomTourRequest>): Promise<CustomTourRequest | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private tours: Map<number, Tour>;
  private bookings: Map<number, Booking>;
  private inquiries: Map<number, Inquiry>;
  private testimonials: Map<number, Testimonial>;
  private blogPosts: Map<number, BlogPost>;
  private guides: Map<number, Guide>;
  private itineraries: Map<number, Itinerary>;
  private itineraryDays: Map<number, ItineraryDay>;
  private customTourRequests: Map<number, CustomTourRequest>;
  private currentUserId: number;
  private currentTourId: number;
  private currentBookingId: number;
  private currentInquiryId: number;
  private currentTestimonialId: number;
  private currentBlogPostId: number;
  private currentGuideId: number;
  private currentItineraryId: number;
  private currentItineraryDayId: number;
  private currentCustomTourRequestId: number;

  constructor() {
    this.users = new Map();
    this.tours = new Map();
    this.bookings = new Map();
    this.inquiries = new Map();
    this.testimonials = new Map();
    this.blogPosts = new Map();
    this.guides = new Map();
    this.itineraries = new Map();
    this.itineraryDays = new Map();
    this.customTourRequests = new Map();
    this.currentUserId = 1;
    this.currentTourId = 1;
    this.currentBookingId = 1;
    this.currentInquiryId = 1;
    this.currentTestimonialId = 1;
    this.currentBlogPostId = 1;
    this.currentGuideId = 1;
    this.currentItineraryId = 1;
    this.currentItineraryDayId = 1;
    this.currentCustomTourRequestId = 1;

    this.initializeData();
  }

  private initializeData() {
    // Initialize tours
    const sampleTours: InsertTour[] = [
      {
        name: "Cultural Immersion Experience",
        description: "Deep dive into Bhutanese culture with monastery visits, traditional ceremonies, and authentic local experiences.",
        duration: 10,
        price: 2450,
        category: "cultural",
        imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
        rating: "4.9",
        reviewCount: 24,
        highlights: ["Monastery Visits", "Traditional Ceremonies", "Local Family Stay"],
        isActive: true,
      },
      {
        name: "Himalayan Trek Adventure",
        description: "Challenge yourself with breathtaking treks to Tiger's Nest and remote mountain villages.",
        duration: 14,
        price: 3200,
        category: "adventure",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        rating: "4.8",
        reviewCount: 18,
        highlights: ["Tiger's Nest Trek", "High Altitude Adventure", "Mountain Villages"],
        isActive: true,
      },
      {
        name: "Spiritual Awakening Journey",
        description: "Find inner peace through meditation retreats, mindfulness training, and spiritual teachings.",
        duration: 7,
        price: 1890,
        category: "spiritual",
        imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop",
        rating: "5.0",
        reviewCount: 31,
        highlights: ["Meditation Retreats", "Spiritual Teachings", "Mindfulness Training"],
        isActive: true,
      },
      {
        name: "Photography Expedition",
        description: "Capture Bhutan's beauty with professional guidance and access to the most photogenic locations.",
        duration: 12,
        price: 2800,
        category: "photography",
        imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
        rating: "4.7",
        reviewCount: 15,
        highlights: ["Professional Guidance", "Exclusive Locations", "Photo Workshops"],
        isActive: true,
      },
      {
        name: "Wellness & Happiness Tour",
        description: "Experience Bhutan's Gross National Happiness philosophy through wellness practices and cultural immersion.",
        duration: 8,
        price: 2150,
        category: "spiritual",
        imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop",
        rating: "4.9",
        reviewCount: 22,
        highlights: ["Happiness Philosophy", "Wellness Practices", "Cultural Immersion"],
        isActive: true,
      },
      {
        name: "Royal Heritage Tour",
        description: "Exclusive access to royal palaces, private audiences, and premium accommodations in luxury resorts.",
        duration: 9,
        price: 4500,
        category: "cultural",
        imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
        rating: "5.0",
        reviewCount: 12,
        highlights: ["Royal Palaces", "Private Audiences", "Luxury Accommodations"],
        isActive: true,
      },
    ];

    sampleTours.forEach(tour => this.createTour(tour));

    // Initialize testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Mitchell",
        country: "Australia",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        text: "Bhutan changed my perspective on life. The team at Bhutan Mind Break didn't just show us temples—they showed us a way of being. The meditation sessions with Karma were life-changing.",
        rating: 5,
        tripName: "Cultural Immersion Tour",
        duration: "10 days",
        isActive: true,
      },
      {
        name: "Marcus Weber",
        country: "Germany",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        text: "The Tiger's Nest trek was incredible, but what made it special was understanding its spiritual significance through our guide's eyes. Pema's knowledge of the terrain was exceptional.",
        rating: 5,
        tripName: "Himalayan Trek",
        duration: "14 days",
        isActive: true,
      },
      {
        name: "Yuki Tanaka",
        country: "Japan",
        imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
        text: "I've traveled to 50+ countries, but Bhutan's happiness philosophy and this team's genuine warmth was truly unique. Every day brought new insights into mindful living.",
        rating: 5,
        tripName: "Happiness & Wellness Journey",
        duration: "7 days",
        isActive: true,
      },
    ];

    sampleTestimonials.forEach(testimonial => this.createTestimonial(testimonial));

    // Initialize blog posts
    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "Understanding Bhutan's Gross National Happiness",
        excerpt: "Discover how Bhutan measures progress not just in economic terms, but through the holistic well-being of its people and environment.",
        content: "Full article content here...",
        imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
        category: "Culture",
        author: "Tenzin Norbu",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
        readTime: "5 min read",
        isPublished: true,
      },
      {
        title: "Essential Gear for Himalayan Trekking",
        excerpt: "A comprehensive guide to packing for high-altitude adventures in Bhutan, from base layers to emergency supplies.",
        content: "Full article content here...",
        imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
        category: "Adventure",
        author: "Pema Choden",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop",
        readTime: "8 min read",
        isPublished: true,
      },
      {
        title: "A Culinary Journey Through Bhutan",
        excerpt: "From fiery ema datshi to traditional butter tea, explore the unique flavors that define Bhutanese cuisine and culture.",
        content: "Full article content here...",
        imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&h=400&fit=crop",
        category: "Food",
        author: "Karma Wangchuk",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop",
        readTime: "6 min read",
        isPublished: true,
      },
    ];

    sampleBlogPosts.forEach(post => this.createBlogPost(post));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Tour methods
  async getAllTours(): Promise<Tour[]> {
    return Array.from(this.tours.values()).filter(tour => tour.isActive);
  }

  async getToursByCategory(category: string): Promise<Tour[]> {
    return Array.from(this.tours.values()).filter(tour => 
      tour.isActive && tour.category === category
    );
  }

  async getTour(id: number): Promise<Tour | undefined> {
    return this.tours.get(id);
  }

  async createTour(insertTour: InsertTour): Promise<Tour> {
    const id = this.currentTourId++;
    const tour: Tour = { 
      ...insertTour, 
      id, 
      isActive: insertTour.isActive ?? true,
      includes: insertTour.includes ?? [],
      excludes: insertTour.excludes ?? [],
      rating: insertTour.rating ?? "5.0",
      reviewCount: insertTour.reviewCount ?? 0,
      highlights: insertTour.highlights ?? [],
      maxGroupSize: insertTour.maxGroupSize ?? 12,
      difficulty: insertTour.difficulty ?? "Moderate",
      bestSeason: insertTour.bestSeason ?? "Spring"
    };
    this.tours.set(id, tour);
    return tour;
  }

  // Booking methods
  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = { 
      tourId: insertBooking.tourId,
      firstName: insertBooking.firstName,
      lastName: insertBooking.lastName,
      email: insertBooking.email,
      phone: insertBooking.phone ?? null,
      travelDate: insertBooking.travelDate,
      groupSize: insertBooking.groupSize,
      specialRequests: insertBooking.specialRequests ?? null,
      id, 
      status: "pending",
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (booking) {
      booking.status = status;
      this.bookings.set(id, booking);
      return booking;
    }
    return undefined;
  }

  // Inquiry methods
  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async getInquiry(id: number): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      status: "new",
      createdAt: new Date(),
      phone: insertInquiry.phone ?? null,
      tourInterest: insertInquiry.tourInterest ?? null,
      preferredDates: insertInquiry.preferredDates ?? null,
      groupSize: insertInquiry.groupSize ?? null,
      message: insertInquiry.message ?? null
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.isActive);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id, isActive: insertTestimonial.isActive ?? true };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Blog post methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(post => post.isPublished);
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const blogPost: BlogPost = { 
      ...insertBlogPost, 
      id, 
      publishedAt: new Date(),
      isPublished: insertBlogPost.isPublished ?? true
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  // Guide methods
  async getAllGuides(): Promise<Guide[]> {
    return Array.from(this.guides.values());
  }

  async getGuide(id: number): Promise<Guide | undefined> {
    return this.guides.get(id);
  }

  async createGuide(guide: InsertGuide): Promise<Guide> {
    const id = this.currentGuideId++;
    const newGuide: Guide = { ...guide, id, status: "not_assigned", createdAt: new Date() };
    this.guides.set(id, newGuide);
    return newGuide;
  }

  async updateGuideStatus(id: number, status: string): Promise<Guide | undefined> {
    const guide = this.guides.get(id);
    if (guide) {
      guide.status = status;
      return guide;
    }
    return undefined;
  }

  async getAvailableGuides(type: string): Promise<Guide[]> {
    return Array.from(this.guides.values()).filter(guide => guide.registrationType === type);
  }

  // Itinerary methods
  async getAllItineraries(): Promise<Itinerary[]> {
    return Array.from(this.itineraries.values());
  }

  async getItinerary(id: number): Promise<Itinerary | undefined> {
    return this.itineraries.get(id);
  }

  async createItinerary(itinerary: InsertItinerary): Promise<Itinerary> {
    const id = this.currentItineraryId++;
    const newItinerary: Itinerary = { 
      ...itinerary, 
      id, 
      description: itinerary.description ?? null,
      guideId: itinerary.guideId ?? null,
      driverId: itinerary.driverId ?? null,
      maxParticipants: itinerary.maxParticipants ?? 12,
      currentParticipants: 0, 
      status: "active", 
      createdAt: new Date() 
    };
    this.itineraries.set(id, newItinerary);
    return newItinerary;
  }

  async updateItinerary(id: number, updates: Partial<Itinerary>): Promise<Itinerary | undefined> {
    const itinerary = this.itineraries.get(id);
    if (itinerary) {
      Object.assign(itinerary, updates);
      return itinerary;
    }
    return undefined;
  }

  async deleteItinerary(id: number): Promise<boolean> {
    return this.itineraries.delete(id);
  }

  // Itinerary Days methods
  async getItineraryDays(itineraryId: number): Promise<ItineraryDay[]> {
    return Array.from(this.itineraryDays.values()).filter(day => day.itineraryId === itineraryId);
  }

  async createItineraryDay(day: InsertItineraryDay): Promise<ItineraryDay> {
    const id = this.currentItineraryDayId++;
    const newDay: ItineraryDay = { 
      ...day, 
      id,
      activities: day.activities ?? [],
      accommodation: day.accommodation ?? null,
      meals: day.meals ?? [],
      transportation: day.transportation ?? null,
      notes: day.notes ?? null
    };
    this.itineraryDays.set(id, newDay);
    return newDay;
  }

  async updateItineraryDay(id: number, updates: Partial<ItineraryDay>): Promise<ItineraryDay | undefined> {
    const day = this.itineraryDays.get(id);
    if (day) {
      Object.assign(day, updates);
      return day;
    }
    return undefined;
  }

  async deleteItineraryDay(id: number): Promise<boolean> {
    return this.itineraryDays.delete(id);
  }

  // Custom Tour Request methods
  async getAllCustomTourRequests(): Promise<CustomTourRequest[]> {
    return Array.from(this.customTourRequests.values());
  }

  async getCustomTourRequest(id: number): Promise<CustomTourRequest | undefined> {
    return this.customTourRequests.get(id);
  }

  async createCustomTourRequest(request: InsertCustomTourRequest): Promise<CustomTourRequest> {
    const id = this.currentCustomTourRequestId++;
    const newRequest: CustomTourRequest = { 
      ...request, 
      id, 
      phone: request.phone ?? null,
      budget: request.budget ?? null,
      interests: request.interests ?? [],
      preferredDates: request.preferredDates ?? null,
      specialRequirements: request.specialRequirements ?? null,
      destinations: request.destinations ?? [],
      accommodationType: request.accommodationType ?? null,
      transportPreference: request.transportPreference ?? null,
      status: "pending", 
      adminNotes: null,
      estimatedPrice: null,
      assignedItineraryId: null,
      createdAt: new Date() 
    };
    this.customTourRequests.set(id, newRequest);
    return newRequest;
  }

  async updateCustomTourRequest(id: number, updates: Partial<CustomTourRequest>): Promise<CustomTourRequest | undefined> {
    const request = this.customTourRequests.get(id);
    if (request) {
      Object.assign(request, updates);
      return request;
    }
    return undefined;
  }
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllTours(): Promise<Tour[]> {
    return await db.select().from(tours).where(eq(tours.isActive, true));
  }

  async getToursByCategory(category: string): Promise<Tour[]> {
    return await db.select().from(tours).where(eq(tours.category, category));
  }

  async getTour(id: number): Promise<Tour | undefined> {
    const [tour] = await db.select().from(tours).where(eq(tours.id, id));
    return tour || undefined;
  }

  async createTour(insertTour: InsertTour): Promise<Tour> {
    const [tour] = await db
      .insert(tours)
      .values(insertTour)
      .returning();
    return tour;
  }

  async getAllBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking || undefined;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db
      .insert(bookings)
      .values(insertBooking)
      .returning();
    return booking;
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const [booking] = await db
      .update(bookings)
      .set({ status })
      .where(eq(bookings.id, id))
      .returning();
    return booking || undefined;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries);
  }

  async getInquiry(id: number): Promise<Inquiry | undefined> {
    const [inquiry] = await db.select().from(inquiries).where(eq(inquiries.id, id));
    return inquiry || undefined;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).where(eq(testimonials.isActive, true));
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).where(eq(blogPosts.isPublished, true));
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post || undefined;
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db
      .insert(blogPosts)
      .values(insertBlogPost)
      .returning();
    return post;
  }

  // Guide Management
  async getAllGuides(): Promise<Guide[]> {
    return await db.select().from(guides).orderBy(desc(guides.createdAt));
  }

  async getGuide(id: number): Promise<Guide | undefined> {
    const [guide] = await db.select().from(guides).where(eq(guides.id, id));
    return guide || undefined;
  }

  async createGuide(guide: InsertGuide): Promise<Guide> {
    const [newGuide] = await db.insert(guides).values(guide).returning();
    return newGuide;
  }

  async updateGuideStatus(id: number, status: string): Promise<Guide | undefined> {
    const [guide] = await db.update(guides)
      .set({ status })
      .where(eq(guides.id, id))
      .returning();
    return guide || undefined;
  }

  async getAvailableGuides(type: string): Promise<Guide[]> {
    return await db.select().from(guides)
      .where(eq(guides.registrationType, type))
      .orderBy(desc(guides.createdAt));
  }

  // Itinerary Management
  async getAllItineraries(): Promise<Itinerary[]> {
    return await db.select().from(itineraries).orderBy(desc(itineraries.createdAt));
  }

  async getItinerary(id: number): Promise<Itinerary | undefined> {
    const [itinerary] = await db.select().from(itineraries).where(eq(itineraries.id, id));
    return itinerary || undefined;
  }

  async createItinerary(itinerary: InsertItinerary): Promise<Itinerary> {
    const [newItinerary] = await db.insert(itineraries).values(itinerary).returning();
    return newItinerary;
  }

  async updateItinerary(id: number, updates: Partial<Itinerary>): Promise<Itinerary | undefined> {
    const [itinerary] = await db.update(itineraries)
      .set(updates)
      .where(eq(itineraries.id, id))
      .returning();
    return itinerary || undefined;
  }

  async deleteItinerary(id: number): Promise<boolean> {
    const result = await db.delete(itineraries).where(eq(itineraries.id, id));
    return (result.rowCount ?? 0) > 0;
  }

  // Itinerary Days Management
  async getItineraryDays(itineraryId: number): Promise<ItineraryDay[]> {
    return await db.select().from(itineraryDays)
      .where(eq(itineraryDays.itineraryId, itineraryId))
      .orderBy(itineraryDays.dayNumber);
  }

  async createItineraryDay(day: InsertItineraryDay): Promise<ItineraryDay> {
    const [newDay] = await db.insert(itineraryDays).values(day).returning();
    return newDay;
  }

  async updateItineraryDay(id: number, updates: Partial<ItineraryDay>): Promise<ItineraryDay | undefined> {
    const [day] = await db.update(itineraryDays)
      .set(updates)
      .where(eq(itineraryDays.id, id))
      .returning();
    return day || undefined;
  }

  async deleteItineraryDay(id: number): Promise<boolean> {
    const result = await db.delete(itineraryDays).where(eq(itineraryDays.id, id));
    return (result.rowCount ?? 0) > 0;
  }

  // Custom Tour Requests Management
  async getAllCustomTourRequests(): Promise<CustomTourRequest[]> {
    return await db.select().from(customTourRequests).orderBy(desc(customTourRequests.createdAt));
  }

  async getCustomTourRequest(id: number): Promise<CustomTourRequest | undefined> {
    const [request] = await db.select().from(customTourRequests).where(eq(customTourRequests.id, id));
    return request || undefined;
  }

  async createCustomTourRequest(request: InsertCustomTourRequest): Promise<CustomTourRequest> {
    const [newRequest] = await db.insert(customTourRequests).values(request).returning();
    return newRequest;
  }

  async updateCustomTourRequest(id: number, updates: Partial<CustomTourRequest>): Promise<CustomTourRequest | undefined> {
    const [request] = await db.update(customTourRequests)
      .set(updates)
      .where(eq(customTourRequests.id, id))
      .returning();
    return request || undefined;
  }
}

// Use database storage when DATABASE_URL is available, otherwise use memory storage
export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
