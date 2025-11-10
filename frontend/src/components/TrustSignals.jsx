import React from 'react';
import { Building2, Globe, Zap, Star } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  'building': Building2,
  'globe': Globe,
  'zap': Zap,
  'star': Star
};

const TrustSignals = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {mockData.trustSignals.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-[#D3D6D9]/20 to-transparent hover:from-[#D3D6D9]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="h-8 w-8 text-[#2E404F]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#1F2B35] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-[#2E404F] font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Logos Section */}
        <div className="border-t border-[#D3D6D9] pt-12">
          <p className="text-center text-[#2E404F] font-medium mb-8 text-lg">
            Trusted By
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {mockData.trustSignals.clientLogos.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-6 rounded-lg bg-[#D3D6D9]/20 hover:bg-[#D3D6D9]/40 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-[#1F2B35] font-semibold text-sm text-center group-hover:text-[#2E404F] transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;