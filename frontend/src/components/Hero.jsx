import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle, Gift } from 'lucide-react';
import { mockData } from '../mock';
import BeforeAfterSlider from './BeforeAfterSlider';

const Hero = ({ onRequestProposal, onWhatsApp }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F2B35] via-[#2E404F] to-[#1F2B35]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D3D6D9] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
              <span className="text-[#D3D6D9] text-sm font-medium">Premium 3D Interior Design & Visualization</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {mockData.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#D3D6D9] leading-relaxed">
              {mockData.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                onClick={onRequestProposal}
                size="lg"
                className="bg-white text-[#1F2B35] hover:bg-[#D3D6D9] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                {mockData.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onWhatsApp}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1F2B35] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {mockData.hero.ctaSecondary}
              </Button>
            </div>

            {/* Offer Banner */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mt-6">
              <div className="flex items-start space-x-3">
                <Gift className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                <p className="text-white text-sm leading-relaxed">
                  {mockData.hero.offer}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Before & After Slider */}
          <div className="space-y-4">
            <div className="h-[500px]">
              <BeforeAfterSlider
                beforeImage="https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/tqkzd8ui_20250701_120826-high-7k3evp.webp"
                afterImage="https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/afcrq611_26-standard.webp"
              />
            </div>

            {/* Caption */}
            <div className="text-center">
              <p className="text-[#D3D6D9] text-sm font-medium">
                {mockData.hero.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;