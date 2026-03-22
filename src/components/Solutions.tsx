import React from 'react';
import { Building2, Users, BarChart3, FileCheck, Zap, Globe } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Solutions for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a hospital looking to streamline procurement or a vendor seeking new opportunities, we have you covered
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Hospitals */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Hospitals</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FileCheck className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Centralized RFQ Management</h4>
                  <p className="text-gray-700">Manage all procurement requests in one place with automated workflows and approval processes.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Real-time Bid Monitoring</h4>
                  <p className="text-gray-700">Track all vendor bids in real-time with instant notifications and detailed analytics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <BarChart3 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Compliance-Ready Reports</h4>
                  <p className="text-gray-700">Generate comprehensive reports for audits and compliance with healthcare regulations.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started as Hospital
            </button>
          </div>

          {/* For Vendors */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Vendors</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Easy RFQ Discovery</h4>
                  <p className="text-gray-700">Find relevant procurement opportunities from hospitals across the country in your specialty.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Transparent Competition</h4>
                  <p className="text-gray-700">Fair bidding environment where all vendors compete on equal terms with clear evaluation criteria.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FileCheck className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fair Bidding Process</h4>
                  <p className="text-gray-700">Automated bidding system ensures transparency and prevents unfair advantages.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Get Started as Vendor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;