import React, { useState, useEffect } from 'react';
import { Building2, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Hospitals Manage RFQs Digitally",
      description: "Create, manage, and track all your procurement requests in one centralized platform",
      icon: <Building2 className="w-24 h-24 text-blue-600" />,
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      title: "Vendors Bid in Real-Time Auctions",
      description: "Fair, transparent bidding process that ensures competitive pricing for healthcare supplies",
      icon: <Users className="w-24 h-24 text-emerald-600" />,
      bgColor: "from-emerald-50 to-emerald-100"
    },
    {
      title: "Hospitals Award Contracts Efficiently",
      description: "Review bids, compare offers, and make informed decisions with comprehensive analytics",
      icon: <Award className="w-24 h-24 text-purple-600" />,
      bgColor: "from-purple-50 to-purple-100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Streamline Hospital{' '}
              <span className="text-blue-600">Procurement</span>{' '}
              with Bidezy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Manage RFQs, run auctions, and connect hospitals with trusted vendors – 
              all in one secure, easy-to-use platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Hospital Login
              </button>
              <button className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Vendor Login
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                Request a Demo
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} transition-all duration-500 transform ${
                    index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="mb-6 transform transition-all duration-300 hover:scale-110">
                      {slide.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed max-w-sm">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;