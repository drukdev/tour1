import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { insertInquirySchema } from "@shared/schema";
import { useInquiry } from "@/hooks/use-inquiry";
import { z } from "zod";

interface ContactFormProps {
  formType: "inquiry" | "booking";
}

const contactFormSchema = insertInquirySchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm({ formType }: ContactFormProps) {
  const { createInquiry } = useInquiry();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await createInquiry.mutateAsync(data);
      reset();
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {formType === "inquiry" ? "Send Us a Message" : "Plan Your Adventure"}
      </h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className="mt-1"
              placeholder="Your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className="mt-1"
              placeholder="Your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            {...register("phone")}
            className="mt-1"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {formType === "booking" && (
          <>
            <div>
              <Label htmlFor="tourInterest">Tour Interest</Label>
              <Select onValueChange={(value) => setValue("tourInterest", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a tour type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Cultural Immersion">Cultural Immersion</SelectItem>
                  <SelectItem value="Himalayan Trek">Himalayan Trek</SelectItem>
                  <SelectItem value="Spiritual Journey">Spiritual Journey</SelectItem>
                  <SelectItem value="Photography Tour">Photography Tour</SelectItem>
                  <SelectItem value="Wellness & Happiness">Wellness & Happiness</SelectItem>
                  <SelectItem value="Custom Experience">Custom Experience</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="preferredDates">Preferred Dates</Label>
                <Input
                  id="preferredDates"
                  {...register("preferredDates")}
                  className="mt-1"
                  placeholder="e.g., March 2024"
                />
              </div>
              <div>
                <Label htmlFor="groupSize">Group Size</Label>
                <Select onValueChange={(value) => setValue("groupSize", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select group size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 person">1 person</SelectItem>
                    <SelectItem value="2 people">2 people</SelectItem>
                    <SelectItem value="3-5 people">3-5 people</SelectItem>
                    <SelectItem value="6-10 people">6-10 people</SelectItem>
                    <SelectItem value="10+ people">10+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}
        
        <div>
          <Label htmlFor="message">
            {formType === "inquiry" ? "Your Message *" : "Tell us about your dream adventure *"}
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            className="mt-1"
            rows={4}
            placeholder={
              formType === "inquiry"
                ? "How can we help you today?"
                : "What draws you to Bhutan? Any specific interests or requirements?"
            }
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary"
        >
          {isSubmitting 
            ? "Sending..." 
            : formType === "inquiry" 
              ? "Send Message" 
              : "Start Planning My Journey"
          }
        </Button>
        
        <p className="text-sm text-gray-500 text-center">
          We'll respond within 24 hours. For urgent matters, please call us directly.
        </p>
      </form>
    </div>
  );
}
