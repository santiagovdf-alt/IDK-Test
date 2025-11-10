import React from 'react';
import { mockData } from '../mock';
import ImageGallery from './ImageGallery';

const galleryImages = [
  "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/21ouma6q_19-high.webp",
  "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/4hfxk51r_enscape_2025-05-22-18-03-52-high-lrbie6.webp",
  "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/b3j8iauc_enscape_2025-05-13-20-40-05_loving-space-6-high-72f5nu.webp",
  "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/thcgpapq_1-high-9dj7gn.webp",
  "https://customer-assets.emergentagent.com/job_design-that-sells/artifacts/9mwluihm_22-high.webp"
];

const Results = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2B35] mb-6">
              {mockData.results.headline}
            </h2>
            <p className="text-lg md:text-xl text-[#2E404F] leading-relaxed mb-8">
              {mockData.results.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {mockData.results.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2E404F]/5 to-[#1F2B35]/5 hover:from-[#2E404F]/10 hover:to-[#1F2B35]/10 transition-all duration-300 hover:scale-105 border border-[#D3D6D9]/30"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#1F2B35] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#2E404F] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div>
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;