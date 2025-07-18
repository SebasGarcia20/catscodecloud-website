import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Basic",
            price: "$300",
            features: ["1-page website", "Basic SEO", "Email support"],
            bg: "bg-gray-900",
          },
          {
            name: "Standard",
            price: "$499",
            features: [
              "5-page website",
              "SEO + Google setup",
              "Hosting & Domain",
              "Priority support",
            ],
            bg: "bg-gray-800",
          },
          {
            name: "Premium",
            price: "Custom Quote",
            features: [
              "Full system setup",
              "Advanced SEO & Analytics",
              "E-commerce / API",
              "Dedicated support",
            ],
            bg: "bg-gray-900",
          },
        ].map((plan, i) => (
          <Card
            key={i}
            className={`${plan.bg} text-white border border-teal-500`}
          >
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-teal-400">{plan.name}</h3>
              <p className="text-3xl font-semibold">{plan.price}</p>
              <ul className="text-sm space-y-2">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-gray-300">
                    • {feature}
                  </li>
                ))}
              </ul>
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
