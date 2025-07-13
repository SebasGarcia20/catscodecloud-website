import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <Hero />
      <About />
      <Services />
      <ContactForm />
    </main>
  );
}