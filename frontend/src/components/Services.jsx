import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Layers, Home, Video, Check, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  1: Layers,
  2: Home,
  3: Video
};

const Services = ({ onRequestProposal }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D3D6D9]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2B35] mb-4">
            Complete Visualization & Design Solutions
          </h2>
          <p className="text-xl text-[#2E404F] max-w-4xl mx-auto">
            From 3D visualization to online consultation, we help you plan, present, and sell your project faster — with clarity and confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {mockData.services.map((service) => {
            const Icon = iconMap[service.id];
            return (
              <Card
                key={service.id}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#2E404F] to-[#1F2B35] flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#1F2B35]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-[#2E404F] leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-[#1F2B35] mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-[#2E404F] mt-0.5 flex-shrink-0" />
                          <span className="text-[#1F2B35] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[#D3D6D9]">
                    <p className="text-sm text-[#2E404F] mb-4">
                      <span className="font-semibold">Ideal For:</span> {service.idealFor}
                    </p>
                    <Button
                      onClick={onRequestProposal}
                      className="w-full bg-[#2E404F] hover:bg-[#1F2B35] text-white transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;