import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertBooking } from "@shared/schema";

export function useBooking() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createBooking = useMutation({
    mutationFn: async (bookingData: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", bookingData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your adventure.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  return {
    createBooking,
  };
}
