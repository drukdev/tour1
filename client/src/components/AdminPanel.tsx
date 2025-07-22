import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  Shield, 
  Users, 
  MapPin, 
  Calendar,
  Star,
  CheckCircle,
  X,
  UserCog
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  imageUrl: string;
  rating: string;
  reviewCount: number;
  highlights?: string[];
}

interface Guide {
  id: number;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  specialties: string[];
  experience: number;
  status: 'active' | 'inactive' | 'pending';
  licenseDocument?: string;
}

interface CustomTourRequest {
  id: number;
  name: string;
  email: string;
  duration: string;
  groupSize: number;
  interests: string[];
  budget: string;
  travelDate: string;
  specialRequests?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const [adminPassword, setAdminPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);
  const queryClient = useQueryClient();

  const handleAdminLogin = () => {
    // Simple admin authentication - in production, use proper auth
    if (adminPassword === "bhutan2025admin") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid admin password");
    }
  };

  // Fetch data
  const { data: tours = [] } = useQuery({
    queryKey: ["/api/tours"],
    enabled: isAuthenticated,
  });

  const { data: guides = [] } = useQuery({
    queryKey: ["/api/guides"],
    enabled: isAuthenticated,
  });

  const { data: customRequests = [] } = useQuery({
    queryKey: ["/api/custom-tours"],
    enabled: isAuthenticated,
  });

  // Mutations
  const updateTourMutation = useMutation({
    mutationFn: async (tour: Tour) => {
      const response = await fetch(`/api/tours/${tour.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tour),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tours"] });
      setEditingTour(null);
    },
  });

  const updateGuideStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const response = await fetch(`/api/guides/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/guides"] });
    },
  });

  const updateRequestStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const response = await fetch(`/api/custom-tours/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/custom-tours"] });
    },
  });

  if (!isOpen) return null;

  if (!isAuthenticated) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Admin Login
            </DialogTitle>
            <DialogDescription>
              Enter the admin password to access the management panel.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="adminPassword">Admin Password</Label>
              <Input
                id="adminPassword"
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password"
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleAdminLogin}>
                Login
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserCog className="w-5 h-5 text-blue-600" />
            Admin Management Panel
          </DialogTitle>
          <DialogDescription>
            Manage tours, guides, and custom tour requests
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="tours" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tours">Tour Management</TabsTrigger>
            <TabsTrigger value="guides">Guide Management</TabsTrigger>
            <TabsTrigger value="requests">Custom Requests</TabsTrigger>
          </TabsList>

          <div className="max-h-[70vh] overflow-y-auto mt-4">
            <TabsContent value="tours" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Tour Packages</h3>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Tour
                </Button>
              </div>
              
              <div className="grid gap-4">
                {(tours as Tour[]).map((tour: Tour) => (
                  <Card key={tour.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{tour.name}</h4>
                            <Badge>{tour.category}</Badge>
                            <span className="text-sm text-gray-500">{tour.duration}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{tour.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              {tour.rating} ({tour.reviewCount} reviews)
                            </span>
                            <span className="font-semibold text-green-600">${tour.price}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => setEditingTour(tour)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Registered Guides</h3>
                <div className="flex gap-2">
                  <Badge variant="secondary">Total: {guides.length}</Badge>
                  <Badge variant="outline">Pending: {(guides as Guide[]).filter((g: Guide) => g.status === 'pending').length}</Badge>
                </div>
              </div>

              <div className="grid gap-4">
                {(guides as Guide[]).map((guide: Guide) => (
                  <Card key={guide.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{guide.name}</h4>
                            <Badge 
                              variant={guide.status === 'active' ? 'default' : guide.status === 'pending' ? 'secondary' : 'destructive'}
                            >
                              {guide.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Email: {guide.email}</p>
                            <p>Phone: {guide.phone}</p>
                            <p>License: {guide.licenseNumber}</p>
                            <p>Experience: {guide.experience} years</p>
                            <div className="flex gap-1 flex-wrap mt-2">
                              {guide.specialties.map((specialty, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {guide.status === 'pending' && (
                            <>
                              <Button 
                                size="sm" 
                                onClick={() => updateGuideStatusMutation.mutate({ id: guide.id, status: 'active' })}
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => updateGuideStatusMutation.mutate({ id: guide.id, status: 'rejected' })}
                              >
                                <X className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                          <Button variant="outline" size="sm" onClick={() => setEditingGuide(guide)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="requests" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Custom Tour Requests</h3>
                <div className="flex gap-2">
                  <Badge variant="secondary">Total: {customRequests.length}</Badge>
                  <Badge variant="outline">Pending: {(customRequests as CustomTourRequest[]).filter((r: CustomTourRequest) => r.status === 'pending').length}</Badge>
                </div>
              </div>

              <div className="grid gap-4">
                {(customRequests as CustomTourRequest[]).map((request: CustomTourRequest) => (
                  <Card key={request.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{request.name}</h4>
                            <Badge 
                              variant={request.status === 'approved' ? 'default' : request.status === 'pending' ? 'secondary' : 'destructive'}
                            >
                              {request.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <p>Email: {request.email}</p>
                            <p>Duration: {request.duration}</p>
                            <p>Group Size: {request.groupSize} people</p>
                            <p>Budget: {request.budget}</p>
                            <p>Travel Date: {request.travelDate}</p>
                            <div className="flex gap-1 flex-wrap mt-2">
                              {request.interests.map((interest, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                            {request.specialRequests && (
                              <p className="mt-2 p-2 bg-gray-50 rounded text-sm">
                                <strong>Special Requests:</strong> {request.specialRequests}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {request.status === 'pending' && (
                            <>
                              <Button 
                                size="sm"
                                onClick={() => updateRequestStatusMutation.mutate({ id: request.id, status: 'approved' })}
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => updateRequestStatusMutation.mutate({ id: request.id, status: 'rejected' })}
                              >
                                <X className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={() => {
            setIsAuthenticated(false);
            setAdminPassword("");
            onClose();
          }}>
            Logout
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}