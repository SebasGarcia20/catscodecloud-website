import { BriefcaseBusiness, Handshake, Sun } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 space-y-10 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Hello! We're CatsCodeCloud.
      </h2>
      <p className="text-md md:text-lg text-gray-300">
        We craft modern, fast and SEO-ready websites for local businesses in
        USA. Our team blends code and creativity, helping you grow online with
        style.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
        <div className="flex flex-col items-center">
          <Sun
            className="text-teal-400"
            fill="currentColor"
            size={48}
            strokeWidth={2.5}
          />
          <p className="text-teal-400 font-semibold mt-4">Innovation</p>
        </div>
        <div className="flex flex-col items-center">
          <BriefcaseBusiness
            className="text-teal-400"
            size={48}
            strokeWidth={2.5}
          />
          <p className="text-teal-400 font-semibold mt-4">Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <Handshake
            className="text-teal-400"
            size={48}
            strokeWidth={2.5}
          />
          <p className="text-teal-400 font-semibold mt-4">Ongoing Support</p>
        </div>
      </div>
    </section>
  );
}
