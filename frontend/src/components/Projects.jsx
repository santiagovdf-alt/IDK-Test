import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const Projects = ({ onRequestProposal }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2B35] mb-4">
            See What's Possible — Before It's Built
          </h2>
          <p className="text-xl text-[#2E404F] max-w-4xl mx-auto">
            Every project we design blends visual storytelling with business impact. Whether you're selling properties, planning a renovation, or visualizing a dream home — our 3D designs make your ideas real.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mockData.projects.map((project) => (
            <Card
              key={project.id}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B35]/80 via-[#1F2B35]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-white text-[#1F2B35] hover:bg-white">
                  {project.category}
                </Badge>
              </div>

              {/* Project Details */}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1F2B35] mb-3 group-hover:text-[#2E404F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#2E404F] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="h-5 w-5 text-[#2E404F] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1F2B35] font-medium">
                      {project.results.metric1}
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="h-5 w-5 text-[#2E404F] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1F2B35] font-medium">
                      {project.results.metric2}
                    </span>
                  </div>
                </div>

                {/* Start Your Project Link */}
                <button 
                  onClick={onRequestProposal}
                  className="flex items-center space-x-2 text-[#2E404F] font-medium hover:text-[#1F2B35] transition-colors group/btn"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;