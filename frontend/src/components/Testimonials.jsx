import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';
import { mockData } from '../mock';

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#D3D6D9]/20 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2B35] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#2E404F] max-w-3xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-20 w-20 text-[#2E404F]" />
              </div>

              <CardContent className="p-6 relative z-10">
                {/* Quote */}
                <p className="text-[#1F2B35] leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-[#D3D6D9] pt-4">
                  <p className="font-bold text-[#1F2B35] mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#2E404F]">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-[#2E404F] font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;