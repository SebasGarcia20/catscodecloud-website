import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="text-white min-h-screen font-sans relative">
      <InteractiveBackground />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Pricing />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
