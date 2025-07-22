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
            name: "Starter",
            price: "$350",
            color: "bg-green-900/20 backdrop-blur-sm border-green-400/40",
            badge: "🚀",
            badgeColor: "bg-teal-500/20 text-teal-300",
            description:
              "Perfect for small businesses or personal brands needing a simple and professional online presence.",
            features: [
              "1-page responsive website (landing style)",
              "Custom design aligned with your brand",
              "Key sections: About, Services/Menu, Contact",
              "Contact form + Google Maps",
              "WhatsApp or phone call integration",
              "Basic SEO optimization",
              "Delivery in 5 business days",
            ],
            highlight:
              "Great for getting online quickly with style and clarity.",
          },
          {
            name: "Professional",
            price: "$650",
            color: "bg-teal-600/20 backdrop-blur-sm border-gray-500/50",
            badge: "⭐",
            badgeColor: "bg-teal-600/20 text-teal-200",
            description:
              "Ideal for businesses looking to expand their digital presence and attract more customers.",
            features: [
              "Up to 5 custom pages (Home, Services/Products, About, Contact, Gallery/Testimonials)",
              "Fully responsive & mobile-friendly",
              "Dynamic content (menus, filters, galleries)",
              "Booking form or calendar integration (if needed)",
              "Social media, WhatsApp, and contact integrations",
              "Advanced SEO setup",
              "Google Analytics + Meta Pixel tracking",
              "1 round of revisions",
              "Delivery in 7–10 business days",
            ],
            highlight:
              "Recommended for growing businesses wanting more flexibility and features.",
          },
          {
            name: "Premium Branding",
            price: "$950+",
            color: "bg-gray-900/70 backdrop-blur-sm border-teal-600/70",
            badge: "💎",
            badgeColor: "bg-teal-700/20 text-teal-100",
            description:
              "A complete package for those who want to build a powerful and consistent online brand.",
            features: [
              "All features from the Professional Package",
              "Custom logo design + brand color palette & typography",
              "Social media content templates (Instagram/Facebook)",
              "Promo landing page for special campaigns (optional)",
              "Multi-language support (if needed)",
              "2 rounds of revisions",
              "Hosting and domain setup support",
              "Delivery in 10–14 business days",
            ],
            highlight:
              "Best for businesses that want a full-service launch with professional branding.",
          },
        ].map((plan, i) => (
          <Card key={i} className={`${plan.color} text-white border-2`}>
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
              <Button className="bg-teal-400 text-black w-full hover:bg-teal-300">
                Choose {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
