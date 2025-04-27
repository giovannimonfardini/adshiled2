"use client";

import React from 'react';

export default function FreightUseCasesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Tag superior */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800/80 text-gray-300 text-sm font-medium px-4 py-1 rounded-full">
            Use Cases
          </div>
        </div>
        
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-100 leading-tight">
            How Freight Brokerages<br />
            Thrive with TrackFlo
          </h2>
        </div>
        
        {/* Cards de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800/50 p-5 rounded-lg mb-6 flex items-center justify-center w-16 h-16 border border-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M7 6v12" />
                <path d="M7 12h10" />
                <path d="M17 6v6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">For Manager</h3>
            <p className="text-gray-400 max-w-xs">
              Measure and optimize your tracking operation.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800/50 p-5 rounded-lg mb-6 flex items-center justify-center w-16 h-16 border border-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">For Track & Trace Teams</h3>
            <p className="text-gray-400 max-w-xs">
              Prioritize tasks with intuitive dashboards.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800/50 p-5 rounded-lg mb-6 flex items-center justify-center w-16 h-16 border border-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-3">For Customers</h3>
            <p className="text-gray-400 max-w-xs">
              Access real-time freight updates and documents seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
