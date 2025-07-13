import {
  BarChart3,
  LayoutTemplate,
  TrendingUp,
  Globe,
  Wrench,
  Code,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "Web Development", icon: Code },
  { title: "Template Sales", icon: LayoutTemplate },
  { title: "SEO Optimization", icon: TrendingUp },
  { title: "Hosting & Domain Setup", icon: Globe },
  { title: "Maintenance & Support", icon: Wrench },
  { title: "Data Analytics (Google)", icon: BarChart3 },
];

export default function Services() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(({ title, icon: Icon }, i) => (
          <ServiceCard key={i} title={title} icon={Icon} />
        ))}
      </div>
    </section>
  );
}
