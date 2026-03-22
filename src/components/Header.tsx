import React from 'react';
import { Building2, Users, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Bidezy</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Benefits
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Solutions
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Request Demo</span>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              Vendor Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Hospital Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;