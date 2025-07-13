import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="px-6 py-20 max-w-xl mx-auto text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">Ready to take your business to the cloud?</h2>
      <p className="text-gray-300">Let's build something amazing—together.</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-teal-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-teal-500"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-teal-500"
        ></textarea>
        <Button className="bg-teal-400 text-black w-full py-2 rounded-xl hover:bg-teal-300">
          Send Message
        </Button>
      </form>
    </section>
  );
}
