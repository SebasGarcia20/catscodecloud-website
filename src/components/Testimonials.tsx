import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      business: "La Sierra Annapolis",
      role: "Restaurant Owner",
      content: "CatsCodeCloud transformed our restaurant's online presence. The website is beautiful, fast, and brings us new customers every day. The team was professional and delivered exactly what we needed.",
      rating: 5,
      image: "/images/testimonials/maria.jpg"
    },
    {
      name: "Sebastian Garcia",
      business: "Personal Portfolio",
      role: "3D Developer",
      content: "Working with CatsCodeCloud was amazing! They created a stunning 3D portfolio that perfectly showcases my work. The interactive elements and smooth animations exceeded my expectations.",
      rating: 5,
      image: "/images/testimonials/sebastian.jpg"
    },
    {
      name: "Carlos Mendez",
      business: "Pitaya Mexican Restaurant",
      role: "Business Owner",
      content: "Our new website has increased our online orders by 40%! The design is modern, the ordering system works perfectly, and the SEO has us ranking on Google. Highly recommended!",
      rating: 5,
      image: "/images/testimonials/carlos.jpg"
    }
  ];

  return (
    <section id="testimonials" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about their experience working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-gray-900/50 backdrop-blur-sm border border-teal-500/20 rounded-xl p-6 hover:border-teal-400/40 transition-all duration-300"
          >
            {/* Quote Icon */}
            <div className="flex justify-start mb-4">
              <Quote className="text-teal-400 w-8 h-8" />
            </div>

            {/* Rating */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>

            {/* Client Info */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-teal-400 font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-teal-400 text-sm">{testimonial.business}</p>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">5.0</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
} 