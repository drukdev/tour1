import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertInquirySchema, insertGuideSchema, insertItinerarySchema, insertItineraryDaySchema, insertCustomTourRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Tours
  app.get("/api/tours", async (req, res) => {
    try {
      const { category } = req.query;
      let tours;
      
      if (category && typeof category === 'string') {
        tours = await storage.getToursByCategory(category);
      } else {
        tours = await storage.getAllTours();
      }
      
      res.json(tours);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tours" });
    }
  });

  app.get("/api/tours/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const tour = await storage.getTour(id);
      
      if (!tour) {
        return res.status(404).json({ message: "Tour not found" });
      }
      
      res.json(tour);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tour" });
    }
  });

  // Bookings
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid booking data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ message: "Status is required" });
      }
      
      const booking = await storage.updateBookingStatus(id, status);
      
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: "Failed to update booking status" });
    }
  });

  // Inquiries
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiryData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(inquiryData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid inquiry data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create inquiry" });
      }
    }
  });

  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  // Testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getActiveTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Blog Posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      
      if (!post || !post.isPublished) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Guide Registration and Management
  app.post("/api/guides/register", async (req, res) => {
    try {
      const guideData = insertGuideSchema.parse(req.body);
      const guide = await storage.createGuide(guideData);
      res.status(201).json({ 
        message: "Registration successful! We will call and inform you if we require your services.",
        guide 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid registration data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Registration failed" });
      }
    }
  });

  app.get("/api/guides", async (req, res) => {
    try {
      const { type } = req.query;
      let guides;
      
      if (type && typeof type === 'string') {
        guides = await storage.getAvailableGuides(type);
      } else {
        guides = await storage.getAllGuides();
      }
      
      res.json(guides);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch guides" });
    }
  });

  app.patch("/api/guides/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || !["assigned", "not_assigned", "blacklisted"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      
      const guide = await storage.updateGuideStatus(id, status);
      
      if (!guide) {
        return res.status(404).json({ message: "Guide not found" });
      }
      
      res.json(guide);
    } catch (error) {
      res.status(500).json({ message: "Failed to update guide status" });
    }
  });

  // Itinerary Management
  app.post("/api/itineraries", async (req, res) => {
    try {
      const itineraryData = insertItinerarySchema.parse(req.body);
      const itinerary = await storage.createItinerary(itineraryData);
      
      // Update guide and driver status to assigned if specified
      if (itineraryData.guideId) {
        await storage.updateGuideStatus(itineraryData.guideId, "assigned");
      }
      if (itineraryData.driverId) {
        await storage.updateGuideStatus(itineraryData.driverId, "assigned");
      }
      
      res.status(201).json(itinerary);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid itinerary data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create itinerary" });
      }
    }
  });

  app.get("/api/itineraries", async (req, res) => {
    try {
      const itineraries = await storage.getAllItineraries();
      res.json(itineraries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch itineraries" });
    }
  });

  app.get("/api/itineraries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const itinerary = await storage.getItinerary(id);
      
      if (!itinerary) {
        return res.status(404).json({ message: "Itinerary not found" });
      }
      
      const days = await storage.getItineraryDays(id);
      res.json({ ...itinerary, days });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch itinerary" });
    }
  });

  app.put("/api/itineraries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      const itinerary = await storage.updateItinerary(id, updates);
      
      if (!itinerary) {
        return res.status(404).json({ message: "Itinerary not found" });
      }
      
      res.json(itinerary);
    } catch (error) {
      res.status(500).json({ message: "Failed to update itinerary" });
    }
  });

  app.delete("/api/itineraries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteItinerary(id);
      
      if (!success) {
        return res.status(404).json({ message: "Itinerary not found" });
      }
      
      res.json({ message: "Itinerary deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete itinerary" });
    }
  });

  // Itinerary Days Management
  app.post("/api/itineraries/:id/days", async (req, res) => {
    try {
      const itineraryId = parseInt(req.params.id);
      const dayData = { ...req.body, itineraryId };
      const parsedData = insertItineraryDaySchema.parse(dayData);
      
      const day = await storage.createItineraryDay(parsedData);
      res.status(201).json(day);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid day data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create itinerary day" });
      }
    }
  });

  app.put("/api/itinerary-days/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      const day = await storage.updateItineraryDay(id, updates);
      
      if (!day) {
        return res.status(404).json({ message: "Itinerary day not found" });
      }
      
      res.json(day);
    } catch (error) {
      res.status(500).json({ message: "Failed to update itinerary day" });
    }
  });

  app.delete("/api/itinerary-days/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteItineraryDay(id);
      
      if (!success) {
        return res.status(404).json({ message: "Itinerary day not found" });
      }
      
      res.json({ message: "Itinerary day deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete itinerary day" });
    }
  });

  // Custom Tour Requests
  app.post("/api/custom-tours", async (req, res) => {
    try {
      const requestData = insertCustomTourRequestSchema.parse(req.body);
      const request = await storage.createCustomTourRequest(requestData);
      res.status(201).json(request);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid custom tour request", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create custom tour request" });
      }
    }
  });

  app.get("/api/custom-tours", async (req, res) => {
    try {
      const requests = await storage.getAllCustomTourRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch custom tour requests" });
    }
  });

  app.get("/api/custom-tours/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.getCustomTourRequest(id);
      
      if (!request) {
        return res.status(404).json({ message: "Custom tour request not found" });
      }
      
      res.json(request);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch custom tour request" });
    }
  });

  app.put("/api/custom-tours/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      const request = await storage.updateCustomTourRequest(id, updates);
      
      if (!request) {
        return res.status(404).json({ message: "Custom tour request not found" });
      }
      
      res.json(request);
    } catch (error) {
      res.status(500).json({ message: "Failed to update custom tour request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
