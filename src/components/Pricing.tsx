import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Website Design Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Essential",
            price: "$1,000",
            color: "bg-teal-100/20 backdrop-blur-sm border-teal-300/40",
            hoverColor: "hover:shadow-lg hover:shadow-teal-300/20 hover:border-teal-300/60",
            badge: "🚀",
            badgeColor: "bg-teal-400/20 text-teal-600",
            description:
              "Perfect for entrepreneurs and small businesses who need a professional, high-impact online presence to start attracting clients fast.",
            features: [
              "1-page responsive website (landing style)",
              "Custom design aligned with your brand",
              "Key sections: About, Services/Menu, Contact",
              "Contact form + Google Maps",
              "WhatsApp or phone call integration",
              "Basic SEO optimization",
              "Optimized for fast loading speed",
              "1 round of revisions included",
              "Delivery in 5–7 business days",
            ],
            highlight:
              "Perfect for getting online quickly with professional impact and fast results.",
            isPopular: false,
          },
          {
            name: "Professional",
            price: "$1,400",
            color: "bg-teal-500/20 backdrop-blur-sm border-teal-400/50",
            hoverColor: "hover:shadow-xl hover:shadow-teal-400/30 hover:border-teal-400/80 hover:scale-105 transition-all duration-300",
            badge: "⭐",
            badgeColor: "bg-teal-500/20 text-teal-200",
            description:
              "Designed for growing businesses that need a feature-rich website to convert more visitors into customers.",
            features: [
              "Up to 5 custom pages (Home, Services/Products, About, Contact, Gallery/Testimonials)",
              "Fully responsive & mobile-friendly",
              "Dynamic content (menus, filters, galleries)",
              "Booking form or calendar integration (if needed)",
              "Social media, WhatsApp, and contact integrations",
              "Advanced SEO setup",
              "Google Analytics + Meta Pixel tracking",
              "Performance optimization (speed + security)",
              "Basic on-page SEO copywriting support",
              "2 rounds of revisions",
              "Delivery in 7–10 business days",
            ],
            highlight:
              "The smart choice for businesses ready to scale and convert visitors into loyal customers.",
            isPopular: true,
          },
          {
            name: "Premium Branding",
            price: "$1,900+",
            color: "bg-gray-900/70 backdrop-blur-sm border-teal-600/70",
            hoverColor: "hover:shadow-lg hover:shadow-teal-600/20 hover:border-teal-600/90",
            badge: "💎",
            badgeColor: "bg-teal-700/20 text-teal-100",
            description:
              "The ultimate package for businesses ready to launch a complete online presence with professional branding, marketing assets, and a premium website experience.",
            features: [
              "All features from the Professional Package",
              "Custom logo design + brand color palette & typography",
              "Social media content templates (Instagram/Facebook)",
              "Promo landing page for special campaigns (optional)",
              "Multi-language support (if needed)",
              "30 days of post-launch support (minor fixes & guidance)",
              "Optional brand strategy session (1 hour)",
              "Up to 3 rounds of revisions",
              "Hosting and domain setup support",
              "Delivery in 10–14 business days",
            ],
            highlight:
              "The complete solution for businesses that demand excellence and want to dominate their market.",
            isPopular: false,
          },
        ].map((plan, i) => (
          <Card 
            key={i} 
            className={`${plan.color} ${plan.hoverColor} text-white border-2 relative transition-all duration-300 ${
              plan.isPopular ? 'ring-2 ring-teal-400/50' : ''
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Most Popular
                </span>
              </div>
            )}
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className={`${plan.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                  {plan.badge}
                </div>
                <h3 className="text-2xl font-bold text-teal-200 ml-2">
                  {plan.name}
                </h3>
              </div>
              <p className="text-3xl font-semibold">{plan.price}</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {plan.description}
              </p>
              <ul className="text-sm space-y-2">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-gray-300 flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-black/40 p-3 rounded-lg">
                <p className="text-sm text-teal-300 italic">{plan.highlight}</p>
              </div>
              <Button className="bg-teal-400 text-black w-full hover:bg-teal-300 transition-colors duration-200">
                Choose {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
