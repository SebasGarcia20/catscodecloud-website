import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-teal-400">CatsCodeCloud</h1>
      <p className="text-lg md:text-xl text-white max-w-xl">
        Building websites that stand out. Development, templates, SEO, and more
        for your business.
      </p>
      <Button className="bg-teal-400 text-black px-6 py-2 rounded-xl shadow-md hover:bg-teal-300">
        Get Started
      </Button>
    </section>
  );
}
