import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6 py-20
     space-y-6 w-full min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-8">
        Our Web Projects
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mb-10">
        Explore some of the modern, fast, and SEO-ready websites we've crafted
        for our clients. Each project blends code and creativity to help
        businesses grow online.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Project 1 */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-teal-500">
          <img
            src="../images/projects/lasierra.png"
            alt="Restaurant Website"
            className="rounded-lg mb-4 w-full h-40 object-cover object-bottom hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-teal-300 mb-2">
            La Sierra Annapolis - Restaurant
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Modern, mobile-friendly site for a Mexican restaurant in the U.S.,
            featuring digital menu and Google Maps.
          </p>
          <a
            href="https://lasierraannapolismd.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-teal-400 text-black w-full hover:bg-teal-300">
              Visit Site
            </Button>
          </a>
        </div>
        {/* Project 2 */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-teal-500">
          <img
            src="../images/projects/sebastiandev.png"
            alt="Fitness Studio Website"
            className="rounded-lg mb-4 w-full h-40 object-cover object-top hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-teal-300 mb-2">
            Sebas Garcia - 3D Dev Portfolio
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Interactive personal site with 3D object, dark/light mode and smooth
            UX to showcase developer skills.
          </p>
          <a
            href="https://sebastiangflorez.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-teal-400 text-black w-full hover:bg-teal-300">
              Visit Site
            </Button>
          </a>
        </div>
        {/* Project 3 */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-teal-500">
          <img
            src="../images/projects/pitaya.png"
            alt="Consulting Agency Website"
            className="rounded-lg mb-4 w-full h-40 object-bottom object-center hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-xl font-semibold text-teal-300 mb-2">
            Pitaya - Mexican Restaurant
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Vibrant website for a local Mexican restaurant with online menu,
            easy reservations, and Google Maps integration.
          </p>
          <a
            href="https://www.pitayamexicanrestaurant.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-teal-400 text-black w-full hover:bg-teal-300">
              Visit Site
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
