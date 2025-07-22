import GuideRegistrationForm from "@/components/GuideRegistrationForm";

export default function GuideRegistrationPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Join Our
            <span className="gradient-text"> Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become part of Bhutan's premier tourism team. We're looking for experienced 
            guides and drivers to help create unforgettable journeys.
          </p>
        </div>

        <GuideRegistrationForm />
      </div>
    </div>
  );
}