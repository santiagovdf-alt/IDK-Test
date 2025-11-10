import React from 'react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2B35] mb-4">
            Our Process
          </h2>
          <p className="text-xl text-[#2E404F] max-w-3xl mx-auto">
            A proven 3-step approach to deliver exceptional results
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#2E404F] via-[#1F2B35] to-[#2E404F] opacity-20"></div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {mockData.process.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2E404F] to-[#1F2B35] flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-3xl font-bold text-white">{step.step}</span>
                  </div>
                </div>

                {/* Step Content */}
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-[#1F2B35] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#2E404F] leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < mockData.process.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 text-[#2E404F] opacity-30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;