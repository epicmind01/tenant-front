import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Started with Bidezy Today
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join hundreds of hospitals and thousands of vendors who are already transforming healthcare procurement
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
            <span>Hospital Login</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
            <span>Vendor Login</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Book a Demo</span>
          </button>
        </div>

        <div className="mt-12 text-blue-100 text-sm">
          <p>No setup fees • 30-day free trial • 24/7 support</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;