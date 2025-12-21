'use client'

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/#home', id: 'home', isRoute: false },
    { name: 'About', href: '/#about', id: 'about', isRoute: false },
    { name: 'Services', href: '/#services', id: 'services', isRoute: false },
    { name: 'Testimonials', href: '/#testimonials', id: 'testimonials', isRoute: false },
    { name: 'Projects', href: '/#projects', id: 'projects', isRoute: false },
    { name: 'Pricing', href: '/#pricing', id: 'pricing', isRoute: false },
    { name: 'Blog', href: '/blog', id: 'blog', isRoute: true },
    { name: 'Contact', href: '/#contact', id: 'contact', isRoute: false },
  ];

  useEffect(() => {
    // Show nav on blog pages
    if (pathname?.startsWith('/blog')) {
      setIsVisible(true);
      setActiveSection('blog');
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById('home') || document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100);
      }

      // Update active section based on scroll position
      const sections = navItems
        .filter(item => !item.isRoute)
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id)
        }))
        .filter(section => section.element);

      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, pathname]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      // For routes, just close mobile menu
      setIsMobileMenuOpen(false);
      return;
    }
    
    // For hash links, scroll to section
    const sectionId = item.id;
    if (pathname !== '/') {
      // If not on homepage, navigate first
      window.location.href = item.href;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible 
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-teal-500/20 translate-y-0' 
            : 'bg-transparent -translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/Logo/asset 4.png"
                alt="CatsCodeCloud Logo"
                width={100}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 mr-2"
              />
              <div className="text-xl md:text-2xl font-bold text-teal-400">
                CatsCodeCloud
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname?.startsWith('/blog') 
                  ? item.id === 'blog' 
                  : activeSection === item.id;
                
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`transition-all duration-200 text-sm font-medium ${
                        isActive
                          ? 'text-teal-400 border-b-2 border-teal-400'
                          : 'text-gray-300 hover:text-teal-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`transition-all duration-200 text-sm font-medium ${
                      isActive
                        ? 'text-teal-400 border-b-2 border-teal-400'
                        : 'text-gray-300 hover:text-teal-400'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Only visible when nav is visible */}
      {isVisible && (
        <div 
          className={`fixed top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-teal-500/20 transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname?.startsWith('/blog')
                  ? item.id === 'blog'
                  : activeSection === item.id;
                
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`transition-all duration-200 text-left py-2 border-b border-gray-700 last:border-b-0 ${
                        isActive
                          ? 'text-teal-400 border-l-4 border-teal-400 pl-4'
                          : 'text-gray-300 hover:text-teal-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                }
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`transition-all duration-200 text-left py-2 border-b border-gray-700 last:border-b-0 ${
                      isActive
                        ? 'text-teal-400 border-l-4 border-teal-400 pl-4'
                        : 'text-gray-300 hover:text-teal-400'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 