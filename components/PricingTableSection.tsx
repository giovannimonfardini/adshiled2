"use client";

import React from "react";
import { Check, X, Rocket } from "lucide-react";

export default function PricingTableSection() {
  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Botão superior */}
        <div className="flex justify-center mb-10">
          <button className="bg-indigo-900/60 hover:bg-indigo-800/80 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2 border border-indigo-700/50 transition-all duration-300">
            <Rocket size={16} />
            <span>Plan for everyone</span>
          </button>
        </div>

        {/* Cabeçalho */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-white leading-tight">
            We've got a plan
            <span className="block text-violet-400">that's perfect for you</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Simple and transparent pricing structure that grows with you
          </p>
        </div>

        {/* Tabela de preços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Plano Starter */}
          <div className="rounded-2xl border border-indigo-900/50 bg-gradient-to-b from-gray-900 to-black p-8 flex flex-col relative">
            <h3 className="text-2xl font-bold text-white mb-1">Starter</h3>
            <p className="text-gray-400 mb-6">Great for startups & small teams</p>
            
            <div className="mb-6 flex items-end">
              <span className="text-3xl font-bold text-white">$</span>
              <span className="text-6xl font-bold text-white leading-none">99</span>
              <span className="text-gray-400 ml-1">/ month</span>
            </div>
            
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors mb-8">
              Get Started
            </button>
            
            <div className="space-y-4 mt-auto">
              <p className="text-gray-300 font-medium mb-3">What's included?</p>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">1 Job Post</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">30 Day Validity</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Email Support</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <X className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-600 line-through">Company Profile Page</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <X className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-600 line-through">Auto import jobs</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <X className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-600 line-through">Job Posting API</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <X className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-600 line-through">24x7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Plano Pro - DESTAQUE */}
          <div className="rounded-2xl relative border-2 border-indigo-500/70 bg-gradient-to-b from-indigo-900/30 to-black p-8 flex flex-col">
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1">Pro</h3>
            <p className="text-gray-400 mb-6">Great for startups & small teams</p>
            
            <div className="mb-6 flex items-end">
              <span className="text-3xl font-bold text-white">$</span>
              <span className="text-6xl font-bold text-white leading-none">299</span>
              <span className="text-gray-400 ml-1">/ month</span>
            </div>
            
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors mb-8">
              Get Started
            </button>
            
            <div className="space-y-4 mt-auto">
              <p className="text-gray-300 font-medium mb-3">What's included?</p>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">5 Job Posts</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">30 Day Validity</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Email Support</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Company Profile Page</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <X className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-600 line-through">Auto import jobs</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <X className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-600 line-through">Job Posting API</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <X className="text-gray-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-600 line-through">24x7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Plano Enterprise */}
          <div className="rounded-2xl border border-indigo-900/50 bg-gradient-to-b from-gray-900 to-black p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-1">Enterprise</h3>
            <p className="text-gray-400 mb-6">Great for large companies</p>
            
            <div className="mb-6 flex items-end">
              <span className="text-3xl font-bold text-white">$</span>
              <span className="text-6xl font-bold text-white leading-none">999</span>
              <span className="text-gray-400 ml-1">/ month</span>
            </div>
            
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors mb-8">
              Contact Us
            </button>
            
            <div className="space-y-4 mt-auto">
              <p className="text-gray-300 font-medium mb-3">What's included?</p>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Unlimited Job Posts</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">30 Day Validity</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Email Support</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Company Profile Page</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Auto import jobs</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Job Posting API</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">24x7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
