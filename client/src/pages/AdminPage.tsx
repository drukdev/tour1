import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Users, MapPin, MessageSquare, UserCheck } from "lucide-react";

export default function AdminPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Data queries
  const { data: guides, isLoading: guidesLoading } = useQuery({
    queryKey: ["/api/guides"],
  });

  const { data: itineraries, isLoading: itinerariesLoading } = useQuery({
    queryKey: ["/api/itineraries"],
  });

  const { data: customTourRequests, isLoading: requestsLoading } = useQuery({
    queryKey: ["/api/custom-tours"],
  });

  // Guide status update
  const updateGuideStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) =>
      apiRequest(`/api/guides/${id}/status`, { method: "PATCH", body: { status } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/guides"] });
      toast({
        title: "Guide Status Updated",
        description: "The guide status has been updated successfully.",
      });
    },
  });

  // Custom tour request status update
  const updateTourRequestMutation = useMutation({
    mutationFn: ({ id, updates }: { id: number; updates: any }) =>
      apiRequest(`/api/custom-tours/${id}`, { method: "PUT", body: updates }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/custom-tours"] });
      toast({
        title: "Tour Request Updated",
        description: "The tour request has been updated successfully.",
      });
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "assigned":
        return "bg-green-100 text-green-800";
      case "not_assigned":
        return "bg-yellow-100 text-yellow-800";
      case "blacklisted":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-blue-100 text-blue-800";
      case "accepted":
        return "bg-green-100 text-green-800";
      case "declined":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage guides, itineraries, and custom tour requests</p>
        </div>

        <Tabs defaultValue="guides" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Guides & Drivers
            </TabsTrigger>
            <TabsTrigger value="itineraries" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Itineraries
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Custom Requests
            </TabsTrigger>
          </TabsList>

          {/* Guides Management */}
          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  Registered Guides & Drivers
                </CardTitle>
              </CardHeader>
              <CardContent>
                {guidesLoading ? (
                  <div className="text-center py-8">Loading guides...</div>
                ) : guides && guides.length > 0 ? (
                  <div className="space-y-4">
                    {guides.map((guide: any) => (
                      <div key={guide.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{guide.name}</h3>
                            <div className="text-sm text-gray-600 space-y-1 mt-2">
                              <p>Email: {guide.email}</p>
                              <p>Phone: {guide.phone}</p>
                              <p>Type: <Badge>{guide.registrationType}</Badge></p>
                              <p>Registered: {new Date(guide.createdAt).toLocaleDateString()}</p>
                              {guide.licenseImageUrl && (
                                <p>
                                  <a 
                                    href={guide.licenseImageUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                  >
                                    View License Document
                                  </a>
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge className={getStatusColor(guide.status)}>
                              {guide.status}
                            </Badge>
                            <div className="space-x-2">
                              {guide.status !== "assigned" && (
                                <Button
                                  size="sm"
                                  onClick={() => updateGuideStatusMutation.mutate({
                                    id: guide.id,
                                    status: "assigned"
                                  })}
                                  disabled={updateGuideStatusMutation.isPending}
                                >
                                  Assign
                                </Button>
                              )}
                              {guide.status !== "blacklisted" && (
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => updateGuideStatusMutation.mutate({
                                    id: guide.id,
                                    status: "blacklisted"
                                  })}
                                  disabled={updateGuideStatusMutation.isPending}
                                >
                                  Blacklist
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No guides registered yet.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Itineraries Management */}
          <TabsContent value="itineraries">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Tour Itineraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                {itinerariesLoading ? (
                  <div className="text-center py-8">Loading itineraries...</div>
                ) : itineraries && itineraries.length > 0 ? (
                  <div className="space-y-4">
                    {itineraries.map((itinerary: any) => (
                      <div key={itinerary.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{itinerary.title}</h3>
                            <p className="text-gray-600 mt-1">{itinerary.description}</p>
                            <div className="text-sm text-gray-600 space-y-1 mt-2">
                              <p>Duration: {itinerary.duration} days</p>
                              <p>Price: ${itinerary.price}</p>
                              <p>Group Size: {itinerary.maxGroupSize}</p>
                              <p>Created: {new Date(itinerary.createdAt).toLocaleDateString()}</p>
                              {itinerary.guideId && <p>Guide ID: {itinerary.guideId}</p>}
                              {itinerary.driverId && <p>Driver ID: {itinerary.driverId}</p>}
                            </div>
                          </div>
                          <div className="space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No itineraries created yet.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Custom Tour Requests */}
          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Custom Tour Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                {requestsLoading ? (
                  <div className="text-center py-8">Loading requests...</div>
                ) : customTourRequests && customTourRequests.length > 0 ? (
                  <div className="space-y-4">
                    {customTourRequests.map((request: any) => (
                      <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">
                              {request.firstName} {request.lastName}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                              <div className="text-sm text-gray-600 space-y-1">
                                <p>Email: {request.email}</p>
                                <p>Phone: {request.phone || 'Not provided'}</p>
                                <p>Duration: {request.duration} days</p>
                                <p>Group Size: {request.groupSize}</p>
                                <p>Budget: ${request.budget}</p>
                                <p>Accommodation: {request.accommodationType}</p>
                                <p>Transport: {request.transportPreference}</p>
                              </div>
                              <div className="text-sm text-gray-600 space-y-1">
                                <p>Preferred Dates: {request.preferredDates || 'Flexible'}</p>
                                <p>Destinations: {request.destinations.join(', ')}</p>
                                <p>Interests: {request.interests.join(', ')}</p>
                                <p>Submitted: {new Date(request.createdAt).toLocaleDateString()}</p>
                                {request.specialRequirements && (
                                  <p className="mt-2">
                                    <span className="font-medium">Special Requirements:</span><br />
                                    {request.specialRequirements}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="ml-4 flex flex-col items-end gap-2">
                            <Badge className={getStatusColor(request.status)}>
                              {request.status}
                            </Badge>
                            <div className="space-x-2">
                              {request.status === "pending" && (
                                <>
                                  <Button
                                    size="sm"
                                    onClick={() => updateTourRequestMutation.mutate({
                                      id: request.id,
                                      updates: { status: "accepted" }
                                    })}
                                    disabled={updateTourRequestMutation.isPending}
                                  >
                                    Accept
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateTourRequestMutation.mutate({
                                      id: request.id,
                                      updates: { status: "declined" }
                                    })}
                                    disabled={updateTourRequestMutation.isPending}
                                  >
                                    Decline
                                  </Button>
                                </>
                              )}
                              <Button size="sm" variant="outline">
                                Add Notes
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No custom tour requests yet.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}