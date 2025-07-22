import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, DollarSign, Users, Shirt, Waves, Mountain, 
  Clock, MapPin, CheckCircle, AlertTriangle, Info, Star,
  Camera, TreePine, Heart, Compass, Sparkles, Shield
} from "lucide-react";
import { BHUTAN_VISA_INFO, BHUTAN_LIFESTYLE, HOT_STONE_BATH_INFO, BHUTAN_RAFTING_INFO } from "@/data/bhutanInfo";

export function BhutanVisaSection() {
  const { visaRequirements, sustainableDevelopmentFee } = BHUTAN_VISA_INFO;

  return (
    <section className="py-20 section-mountain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="brand-section-header mb-4">
            <FileText className="w-4 h-4" />
            Bhutan Travel Requirements
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 brand-heading">
            Essential <span className="gradient-text">Travel Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto brand-body">
            Everything you need to know about visas, fees, and entry requirements 
            for your transformative journey to the Last Shangri-La.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Visa Requirements */}
          <Card className="brand-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="status-visa-required">
                  <Shield className="w-5 h-5 mr-2" />
                  Visa Required
                </div>
              </CardTitle>
              <h3 className="text-2xl font-bold text-gray-900">{visaRequirements.title}</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="brand-body">{visaRequirements.overview}</p>
              
              {visaRequirements.requirements.map((req, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-900">{req.title}</h4>
                  <ul className="space-y-2">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">Visa Fee</span>
                </div>
                <p className="text-amber-800">
                  <span className="text-2xl font-bold">${visaRequirements.fees.visaFee}</span> {visaRequirements.fees.currency}
                  <span className="text-sm ml-2">({visaRequirements.fees.note})</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* SDF Information */}
          <Card className="brand-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="status-sdf-applicable">
                  <TreePine className="w-5 h-5 mr-2" />
                  SDF Required
                </div>
              </CardTitle>
              <h3 className="text-2xl font-bold text-gray-900">{sustainableDevelopmentFee.title}</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="brand-body">{sustainableDevelopmentFee.description}</p>
              
              {/* Special Bangladesh Alert */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">🇧🇩</div>
                  <h4 className="font-bold text-lg">Bangladeshi Nationals - Special Rate!</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Discounted SDF Rate:</p>
                    <p className="text-emerald-100">Only $15 USD per night (vs $100 for others)</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Limited Quota:</p>
                    <p className="text-emerald-100">First 15,000 tourists annually</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-200 mt-2">
                  ⚠️ After the 15,000 quota is reached, regular international rate of $100 USD/night applies
                </p>
              </div>
              
              <div className="space-y-4">
                {sustainableDevelopmentFee.rates.map((rate, index) => (
                  <div key={index} className={`border rounded-lg p-4 ${rate.category === 'Bangladeshi Nationals' ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{rate.category}</h4>
                      <Badge className={`text-white ${rate.category === 'Bangladeshi Nationals' ? 'bg-emerald-600' : 'bg-blue-600'}`}>
                        ${rate.rate} {rate.currency}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{rate.period}</p>
                    
                    {/* Special Bangladesh information */}
                    {rate.specialNote && (
                      <div className="bg-emerald-100 border border-emerald-300 rounded-md p-3 mb-3">
                        <p className="text-sm font-semibold text-emerald-800 mb-2">{rate.specialNote}</p>
                        {rate.quota && (
                          <div className="space-y-1">
                            <p className="text-xs text-emerald-700">• {rate.quota}</p>
                            <p className="text-xs text-emerald-700">• {rate.afterQuota}</p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <p className="text-sm text-green-700 font-medium">{rate.childDiscount}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-800 mb-2">Exemptions & Benefits</h5>
                <ul className="space-y-1">
                  {sustainableDevelopmentFee.exemptions.map((exemption, index) => (
                    <li key={index} className="flex items-start gap-2 text-green-700 text-sm">
                      <CheckCircle className="w-3 h-3 mt-1 flex-shrink-0" />
                      {exemption}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-green-600 mt-2 font-medium">{sustainableDevelopmentFee.validity}</p>
              </div>

              {/* Bangladesh Quick Summary */}
              {sustainableDevelopmentFee.bangladeshiSummary && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🇧🇩</span>
                    <h5 className="font-semibold text-emerald-800">{sustainableDevelopmentFee.bangladeshiSummary.title}</h5>
                  </div>
                  <ul className="space-y-2">
                    {sustainableDevelopmentFee.bangladeshiSummary.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-emerald-700 text-sm">
                        <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function BhutanLifestyleSection() {
  const { traditionalDress, dailyLife } = BHUTAN_LIFESTYLE;

  return (
    <section className="py-20 section-culture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="brand-section-header mb-4">
            <Shirt className="w-4 h-4" />
            Bhutanese Lifestyle
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 brand-heading">
            Living <span className="gradient-text-secondary">Traditions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto brand-body">
            {traditionalDress.description}
          </p>
        </div>

        <Tabs defaultValue="dress" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="dress">Traditional Dress</TabsTrigger>
            <TabsTrigger value="daily">Daily Life</TabsTrigger>
            <TabsTrigger value="culture">Cultural Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="dress" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Men's Gho */}
              <Card className="brand-card interactive-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    {traditionalDress.mensDress.name} - Men's National Dress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="brand-body">{traditionalDress.mensDress.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Traditional Features:</h4>
                    <ul className="space-y-2">
                      {traditionalDress.mensDress.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Modern Adaptations:</h4>
                    <ul className="space-y-2">
                      {traditionalDress.mensDress.modernAdaptations.map((adaptation, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700">{adaptation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Women's Kira */}
              <Card className="brand-card interactive-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-pink-600" />
                    {traditionalDress.womensDress.name} - Women's National Dress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="brand-body">{traditionalDress.womensDress.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Components:</h4>
                    <ul className="space-y-2">
                      {traditionalDress.womensDress.components.map((component, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Occasion Styles:</h4>
                    <ul className="space-y-2">
                      {traditionalDress.womensDress.occasions.map((occasion, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Camera className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-700">{occasion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="daily" className="space-y-6">
            <Card className="brand-card">
              <CardHeader>
                <CardTitle className="text-2xl">{dailyLife.title}</CardTitle>
                <p className="brand-body">{dailyLife.philosophy}</p>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Work Life
                  </h4>
                  <ul className="space-y-2">
                    {dailyLife.workLife.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-600" />
                    Spirituality
                  </h4>
                  <ul className="space-y-2">
                    {dailyLife.spirituality.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    Modern Blend
                  </h4>
                  <ul className="space-y-2">
                    {dailyLife.modernBlend.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="brand-card">
                <CardHeader>
                  <CardTitle>Mandatory Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {traditionalDress.culturalSignificance.mandatorySettings.map((setting, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <span className="text-gray-700">{setting}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="brand-card">
                <CardHeader>
                  <CardTitle>Status Symbols</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {traditionalDress.culturalSignificance.statusSymbols.map((symbol, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Shield className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{symbol}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="brand-card">
              <CardContent className="text-center py-8">
                <Info className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-900 mb-2">Economic Impact</p>
                <p className="brand-body">{traditionalDress.culturalSignificance.economicImpact}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export function HotStoneBathSection() {
  const bathInfo = HOT_STONE_BATH_INFO;

  return (
    <section className="py-20 section-wellness">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="brand-section-header mb-4">
            <Waves className="w-4 h-4" />
            Traditional Wellness
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 brand-heading">
            {bathInfo.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto brand-body">
            {bathInfo.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="brand-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mountain className="w-6 h-6 text-orange-600" />
                Traditional Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Setup & Preparation</h4>
                <ul className="space-y-2">
                  {bathInfo.traditionalProcess.setup.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">The Experience</h4>
                <ul className="space-y-2">
                  {bathInfo.traditionalProcess.experience.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 mt-1 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-red-600" />
                Health Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Physical Benefits</h4>
                <ul className="space-y-2">
                  {bathInfo.healthBenefits.physical.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-purple-700">Mental & Spiritual Benefits</h4>
                <ul className="space-y-2">
                  {bathInfo.healthBenefits.mentalSpiritual.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Heart className="w-4 h-4 mt-1 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="brand-card">
            <CardHeader>
              <CardTitle>Luxury Resort Experiences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bathInfo.experiences.luxury.map((experience, index) => (
                <div key={index} className="border-l-4 border-amber-400 pl-4 py-2">
                  <h5 className="font-semibold text-gray-900">{experience.name}</h5>
                  <p className="text-sm text-gray-600 mb-1">{experience.feature}</p>
                  <Badge className="text-xs">{experience.setting}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="brand-card">
            <CardHeader>
              <CardTitle>Traditional & Authentic Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bathInfo.experiences.traditional.map((experience, index) => (
                <div key={index} className="border-l-4 border-green-400 pl-4 py-2">
                  <h5 className="font-semibold text-gray-900">{experience.name}</h5>
                  <p className="text-sm text-gray-600 mb-1">{experience.feature}</p>
                  <Badge className="bg-green-600 text-white text-xs">{experience.price}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function BhutanRaftingSection() {
  const raftingInfo = BHUTAN_RAFTING_INFO;

  return (
    <section className="py-20 section-adventure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="brand-section-header mb-4">
            <Waves className="w-4 h-4" />
            Adventure Activities
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 brand-heading">
            White Water <span className="gradient-text">Rafting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto brand-body">
            {raftingInfo.overview}
          </p>
        </div>

        {/* Mo Chhu River Highlight */}
        <Card className="brand-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <div className="status-adventure-ready">
                <Compass className="w-6 h-6 mr-2" />
                Premier Destination
              </div>
            </CardTitle>
            <h3 className="text-2xl font-bold text-gray-900">{raftingInfo.moChhuRiver.name}</h3>
            <p className="text-lg text-gray-600">{raftingInfo.moChhuRiver.status}</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">River Details</h4>
                <div className="space-y-2">
                  {Object.entries(raftingInfo.moChhuRiver.details).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Pricing</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Group Rate:</strong> {raftingInfo.moChhuRiver.pricing.groupRate}</p>
                  <p><strong>Peak Season:</strong> {raftingInfo.moChhuRiver.pricing.peakSeason}</p>
                  <p><strong>Off Season:</strong> {raftingInfo.moChhuRiver.pricing.offSeason}</p>
                  <p className="text-green-700 font-medium">Included: {raftingInfo.moChhuRiver.pricing.included}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Experience Highlights</h4>
              <ul className="space-y-3">
                {raftingInfo.moChhuRiver.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Other Rivers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {raftingInfo.otherRivers.map((river, index) => (
            <Card key={index} className="brand-card text-center">
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-2">{river.name}</h4>
                <Badge className="mb-3 bg-purple-600 text-white">{river.difficulty}</Badge>
                <p className="text-sm text-gray-600 mb-2">{river.location}</p>
                <p className="text-sm font-medium text-purple-700">{river.bestFor}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Adventure Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(raftingInfo.adventureActivities).map(([category, activities], index) => (
            <Card key={index} className="brand-card">
              <CardHeader>
                <CardTitle className="capitalize flex items-center gap-2">
                  {category === 'mountain' && <Mountain className="w-5 h-5 text-green-600" />}
                  {category === 'cultural' && <Camera className="w-5 h-5 text-blue-600" />}
                  {category === 'nature' && <TreePine className="w-5 h-5 text-purple-600" />}
                  {category} Adventures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}