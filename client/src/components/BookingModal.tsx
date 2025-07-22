import { useState } from "react";
import { X } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@shared/schema";
import type { Tour } from "@shared/schema";
import { z } from "zod";
import { useBooking } from "@/hooks/use-booking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour | null;
}

const bookingFormSchema = insertBookingSchema.extend({
  tourId: z.number(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  travelDate: z.string().min(1, "Travel date is required"),
  groupSize: z.number().min(1, "Group size must be at least 1"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingModal({ isOpen, onClose, tour }: BookingModalProps) {
  const { createBooking } = useBooking();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tourId: tour?.id || 0,
      groupSize: 1,
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      await createBooking.mutateAsync(data);
      reset();
      onClose();
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  if (!tour) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">
            Book Your Adventure
          </DialogTitle>
          <DialogDescription>
            Complete the form below to book your transformative journey to Bhutan. We'll contact you within 24 hours to confirm details and arrange payment.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">{tour.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">{tour.duration}</span>
            <span className="text-2xl font-bold text-gray-900">${tour.price}</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input type="hidden" {...register("tourId")} value={tour.id} />
          
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
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="travelDate">Travel Date *</Label>
              <Input
                id="travelDate"
                type="date"
                {...register("travelDate")}
                className="mt-1"
              />
              {errors.travelDate && (
                <p className="text-red-500 text-sm mt-1">{errors.travelDate.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="groupSize">Number of Travelers *</Label>
              <Select onValueChange={(value) => setValue("groupSize", parseInt(value))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select group size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 person</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4 people</SelectItem>
                  <SelectItem value="5">5+ people</SelectItem>
                </SelectContent>
              </Select>
              {errors.groupSize && (
                <p className="text-red-500 text-sm mt-1">{errors.groupSize.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              {...register("specialRequests")}
              className="mt-1"
              rows={3}
              placeholder="Any dietary restrictions, accessibility needs, or special interests?"
            />
          </div>
          
          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-primary"
            >
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
