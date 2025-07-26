'use client'
import {
  BarChart3,
  LayoutTemplate,
  TrendingUp,
  Globe,
  Wrench,
  Code,
  ArrowRight,
  Package,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const services = [
  {
    title: "Web Development",
    icon: Code,
    description: "Custom websites built with modern technologies for optimal performance.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Template Sales",
    icon: LayoutTemplate,
    description: "Ready-to-use website templates for quick online presence.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "SEO Optimization",
    icon: TrendingUp,
    description: "Boost your search rankings and drive more organic traffic.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Hosting & Domain Setup",
    icon: Globe,
    description: "Complete hosting solutions with domain management included.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Maintenance & Support",
    icon: Wrench,
    description: "Ongoing website maintenance and technical support services.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    description: "Google Analytics setup and performance tracking insights.",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
  },
];

export default function Services() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="services" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Comprehensive web solutions to help your business grow online. 
          Choose the service that fits your needs or explore our complete packages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, i) => (
          <Card
            key={i}
            className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 group cursor-pointer"
          >
            <CardContent className="p-6 text-center">
              <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {service.description}
              </p>
              <Button 
                variant="ghost" 
                className="text-teal-400 hover:text-teal-300 p-0 h-auto group-hover:translate-x-1 transition-transform duration-300"
              >
                <span className="text-sm">Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-teal-500/20 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Choose from our carefully crafted packages designed to meet different business needs and budgets. 
          Each package includes multiple services for a complete web solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToPricing}
            className="bg-teal-400 text-black px-6 py-3 rounded-xl hover:bg-teal-300 transition-all duration-300 flex items-center gap-2"
          >
            <Package className="w-5 h-5" />
            View Packages
          </Button>
          <Button 
            variant="outline"
            className="border-teal-400 text-teal-400 px-6 py-3 rounded-xl hover:bg-teal-400 hover:text-black transition-all duration-300"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
