import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <main className="text-white min-h-screen font-sans relative">
      <InteractiveBackground />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}
