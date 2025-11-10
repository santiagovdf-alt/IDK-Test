import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Eye, Clock, Globe2, Users } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  1: Eye,
  2: Clock,
  3: Globe2,
  4: Users
};

const WhyIDK = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1F2B35] to-[#2E404F] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D3D6D9] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Design That's Beautiful, Profitable, and Personal
          </h2>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockData.whyIDK.map((item) => {
            const Icon = iconMap[item.id];
            return (
              <Card
                key={item.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#D3D6D9] text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIDK;