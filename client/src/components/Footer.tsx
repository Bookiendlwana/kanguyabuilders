import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-navy-primary font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Kanguya Builders</h3>
                <p className="text-sm text-navy-light">Professional Construction</p>
              </div>
            </div>
            <p className="text-navy-light mb-4 leading-relaxed">
              With over 14 years of experience, we are Cape Town's trusted construction partner, 
              delivering quality craftsmanship and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-light hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-navy-light hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-navy-light hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-navy-light">
              <li><a href="#services" className="hover:text-white transition-colors">New Construction</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Home Renovations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance & Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Painting & Finishing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpentry & Joinery</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Electrical & Plumbing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-navy-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get Quote</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-navy-light">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>+27 21 123 4567</p>
                  <p>+27 82 456 7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>info@kanguyabuilders.co.za</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>123 Construction Avenue</p>
                  <p>Woodstock, Cape Town, 7925</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-primary mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-navy-light text-sm">
              © {currentYear} Kanguya Builders. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-navy-light hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-navy-light hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-navy-light hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;