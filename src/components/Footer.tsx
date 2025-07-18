'use client'

import { Mail, Phone, MapPin, Github, Linkedin, X } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-teal-500/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-teal-400">CatsCodeCloud</h3>
            <p className="text-gray-300 text-sm">
              Crafting modern, fast, and SEO-ready websites for businesses that want to stand out online.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/CatsCodeCloud" target="_blank" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
             {/*  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <X size={20} />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>Template Sales</li>
              <li>SEO Optimization</li>
              <li>Hosting & Domain Setup</li>
              <li>Maintenance & Support</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-teal-400" />
                <span>catscodecloud@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-teal-400" />
                <span>United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Our Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 CatsCodeCloud. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Built with ❤️ for businesses that want to grow online
          </p>
        </div>
      </div>
    </footer>
  );
} 