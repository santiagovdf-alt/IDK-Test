import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1F2B35] to-[#2E404F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">IDK Interiors</h3>
            <p className="text-[#D3D6D9] leading-relaxed mb-6">
              {mockData.contact.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#D3D6D9]" />
                <a href={`mailto:${mockData.contact.email}`} className="text-[#D3D6D9] hover:text-white transition-colors">
                  {mockData.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#D3D6D9]" />
                <a href={`tel:${mockData.contact.phone}`} className="text-[#D3D6D9] hover:text-white transition-colors">
                  {mockData.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#D3D6D9]" />
                <span className="text-[#D3D6D9]">{mockData.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-[#D3D6D9] hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#D3D6D9] hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-[#D3D6D9] hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact-form" className="text-[#D3D6D9] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D3D6D9] hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href={mockData.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href={mockData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-[#D3D6D9]">
            © {currentYear} IDK Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;