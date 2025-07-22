import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertInquiry } from "@shared/schema";

export function useInquiry() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createInquiry = useMutation({
    mutationFn: async (inquiryData: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", inquiryData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  return {
    createInquiry,
  };
}
