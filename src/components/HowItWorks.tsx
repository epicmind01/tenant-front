import React from 'react';
import { FileText, Gavel, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <FileText className="w-12 h-12" />,
      title: "Hospitals Create RFQs",
      description: "Healthcare facilities post their procurement requirements with detailed specifications and requirements.",
      color: "blue"
    },
    {
      id: 2,
      icon: <Gavel className="w-12 h-12" />,
      title: "Vendors Bid Through Auctions",
      description: "Qualified vendors submit competitive bids in real-time transparent auction environment.",
      color: "emerald"
    },
    {
      id: 3,
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Hospitals Select Best Offers",
      description: "Review all proposals, compare pricing and features, and award contracts to preferred vendors.",
      color: "purple"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process that connects hospitals with the right vendors at the best prices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-${step.color}-100 text-${step.color}-600`}>
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-${step.color}-600 text-white text-sm font-bold mb-4`}>
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;