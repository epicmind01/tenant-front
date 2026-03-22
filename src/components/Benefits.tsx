import React from 'react';
import { DollarSign, Clock, Users, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Save Costs with Transparent Auctions",
      description: "Competitive bidding ensures you get the best prices while maintaining quality standards for medical supplies."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Speed Up Procurement",
      description: "Streamline your procurement process from weeks to days with automated workflows and real-time communication."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Access Trusted Vendor Network",
      description: "Connect with pre-verified healthcare suppliers who meet industry standards and compliance requirements."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Easy-to-Use",
      description: "HIPAA-compliant platform with enterprise-grade security and intuitive interface for all users."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Bidezy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your healthcare procurement with our comprehensive platform designed specifically for hospitals and medical facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Hospitals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">2,000+</div>
            <div className="text-gray-600">Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">$50M+</div>
            <div className="text-gray-600">Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;