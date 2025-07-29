'use client'

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your web development services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-0 space-y-8 w-full h-screen">
      <div className="space-y-6 max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/Logo/Asset 1.png"
            alt="CatsCodeCloud Logo"
            width={200}
            height={90}
            className="w-32 md:w-48 h-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-teal-400 leading-tight">
          CatsCodeCloud
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          We help local businesses build a killer web presence that converts.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Modern, fast, and SEO-ready websites that turn visitors into customers. 
          From restaurants to portfolios, we craft digital experiences that grow your business.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button 
          className="bg-teal-400 text-black px-8 py-3 rounded-xl shadow-lg hover:bg-teal-300 transition-all duration-300 text-lg font-semibold"
        >
          Get Started
        </Button>
        <Button 
          onClick={handleWhatsAppClick}
          variant="outline"
          className="border-teal-400 text-teal-400 px-8 py-3 rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300 text-lg font-semibold flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </Button>
      </div>

      {/* Trust indicators */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <span className="text-teal-400">✓</span>
          <span>Fast & Responsive</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-teal-400">✓</span>
          <span>SEO Optimized</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-teal-400">✓</span>
          <span>Mobile-First</span>
        </div>
      </div>
    </section>
  );
}
