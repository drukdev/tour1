import { pgTable, text, serial, integer, boolean, timestamp, decimal, varchar, date } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const tours = pgTable("tours", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  duration: integer("duration").notNull(), // Duration in days
  price: integer("price").notNull(), // Price in USD
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }).notNull().default("5.0"),
  reviewCount: integer("review_count").notNull().default(0),
  highlights: text("highlights").array().notNull().default([]),
  isActive: boolean("is_active").notNull().default(true),
  maxGroupSize: integer("max_group_size").notNull().default(12),
  difficulty: text("difficulty").notNull().default("Moderate"),
  bestSeason: text("best_season").notNull().default("Spring"),
  includes: text("includes").array().notNull().default([]),
  excludes: text("excludes").array().notNull().default([]),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  tourId: integer("tour_id").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  travelDate: text("travel_date").notNull(),
  groupSize: integer("group_size").notNull(),
  specialRequests: text("special_requests"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  tourInterest: text("tour_interest"),
  preferredDates: text("preferred_dates"),
  groupSize: text("group_size"),
  message: text("message"),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  country: text("country").notNull(),
  imageUrl: text("image_url").notNull(),
  text: text("text").notNull(),
  rating: integer("rating").notNull(),
  tripName: text("trip_name").notNull(),
  duration: text("duration").notNull(),
  isActive: boolean("is_active").notNull().default(true),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  author: text("author").notNull(),
  authorImage: text("author_image").notNull(),
  readTime: text("read_time").notNull(),
  publishedAt: timestamp("published_at").notNull().defaultNow(),
  isPublished: boolean("is_published").notNull().default(true),
});

// Schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTourSchema = createInsertSchema(tours).omit({
  id: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  status: true,
  createdAt: true,
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  status: true,
  createdAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  publishedAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Tour = typeof tours.$inferSelect;
export type InsertTour = z.infer<typeof insertTourSchema>;

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;

// Guide and Driver Management Tables
export const guides = pgTable("guides", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  licenseImageUrl: text("license_image_url").notNull(),
  registrationType: text("registration_type").notNull(), // 'guide' or 'driver'
  status: text("status").notNull().default("not_assigned"), // 'assigned', 'not_assigned', 'blacklisted'
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const itineraries = pgTable("itineraries", {
  id: serial("id").primaryKey(),
  tourId: integer("tour_id").notNull(),
  name: text("name").notNull(),
  description: text("description"),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  guideId: integer("guide_id"),
  driverId: integer("driver_id"),
  maxParticipants: integer("max_participants").notNull().default(12),
  currentParticipants: integer("current_participants").notNull().default(0),
  status: text("status").notNull().default("active"), // 'active', 'completed', 'cancelled'
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const itineraryDays = pgTable("itinerary_days", {
  id: serial("id").primaryKey(),
  itineraryId: integer("itinerary_id").notNull(),
  dayNumber: integer("day_number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  activities: text("activities").array().notNull().default([]),
  accommodation: text("accommodation"),
  meals: text("meals").array().notNull().default([]),
  transportation: text("transportation"),
  notes: text("notes"),
});

export const customTourRequests = pgTable("custom_tour_requests", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  duration: integer("duration").notNull(), // days
  groupSize: integer("group_size").notNull(),
  budget: integer("budget"), // USD
  interests: text("interests").array().notNull().default([]),
  preferredDates: text("preferred_dates"),
  specialRequirements: text("special_requirements"),
  destinations: text("destinations").array().notNull().default([]),
  accommodationType: text("accommodation_type"), // 'luxury', 'standard', 'budget'
  transportPreference: text("transport_preference"), // 'private', 'shared', 'mixed'
  status: text("status").notNull().default("pending"), // 'pending', 'approved', 'rejected', 'in_progress', 'completed'
  adminNotes: text("admin_notes"),
  estimatedPrice: integer("estimated_price"),
  assignedItineraryId: integer("assigned_itinerary_id"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Relations
export const tourRelations = relations(tours, ({ many }) => ({
  bookings: many(bookings),
  itineraries: many(itineraries),
}));

export const bookingRelations = relations(bookings, ({ one }) => ({
  tour: one(tours, { fields: [bookings.tourId], references: [tours.id] }),
}));

export const guideRelations = relations(guides, ({ many }) => ({
  assignedItineraries: many(itineraries),
}));

export const itineraryRelations = relations(itineraries, ({ one, many }) => ({
  tour: one(tours, { fields: [itineraries.tourId], references: [tours.id] }),
  guide: one(guides, { fields: [itineraries.guideId], references: [guides.id] }),
  driver: one(guides, { fields: [itineraries.driverId], references: [guides.id] }),
  days: many(itineraryDays),
}));

export const itineraryDayRelations = relations(itineraryDays, ({ one }) => ({
  itinerary: one(itineraries, { fields: [itineraryDays.itineraryId], references: [itineraries.id] }),
}));

export const customTourRequestRelations = relations(customTourRequests, ({ one }) => ({
  assignedItinerary: one(itineraries, { fields: [customTourRequests.assignedItineraryId], references: [itineraries.id] }),
}));

// New Schemas
export const insertGuideSchema = createInsertSchema(guides).omit({
  id: true,
  status: true,
  createdAt: true,
});

export const insertItinerarySchema = createInsertSchema(itineraries).omit({
  id: true,
  currentParticipants: true,
  status: true,
  createdAt: true,
});

export const insertItineraryDaySchema = createInsertSchema(itineraryDays).omit({
  id: true,
});

export const insertCustomTourRequestSchema = createInsertSchema(customTourRequests).omit({
  id: true,
  status: true,
  adminNotes: true,
  estimatedPrice: true,
  assignedItineraryId: true,
  createdAt: true,
});

// New Types
export type Guide = typeof guides.$inferSelect;
export type InsertGuide = z.infer<typeof insertGuideSchema>;

export type Itinerary = typeof itineraries.$inferSelect;
export type InsertItinerary = z.infer<typeof insertItinerarySchema>;

export type ItineraryDay = typeof itineraryDays.$inferSelect;
export type InsertItineraryDay = z.infer<typeof insertItineraryDaySchema>;

export type CustomTourRequest = typeof customTourRequests.$inferSelect;
export type InsertCustomTourRequest = z.infer<typeof insertCustomTourRequestSchema>;
