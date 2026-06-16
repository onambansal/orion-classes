import { Quote } from "lucide-react";
import { siteData } from "@/data/siteData";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    "bg-purple-600",
    "bg-orange-500",
    "bg-green-600",
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div
      className={`w-10 h-10 rounded-full ${colors[colorIndex]} text-white flex items-center justify-center font-bold text-sm shrink-0`}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-14 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, #d8b4fe 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Overlay to soften the dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/90 to-white/95 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            Parent Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            What Parents Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real feedback from parents whose children have benefited from our
            learning and development programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 flex flex-col"
            >
              <Quote className="w-9 h-9 text-purple-200 mb-4" />

              <StarRating count={testimonial.stars} />

              <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                <Avatar name={testimonial.author} />
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Join 150+ happy families at Orion Classes!
          </p>
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20enrol%20my%20child%20at%20Orion%20Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition text-lg"
          >
            Enrol Your Child Today →
          </a>
        </div>

      </div>
    </section>
  );
}
