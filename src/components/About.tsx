import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Founder Photo */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Decorative background blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-orange-100 rounded-[40px] rotate-3 scale-105" />
              <Image
                src="/images/Sonam.jpg"
                alt="Sonam Bansal — Founder, Orion Classes"
                width={480}
                height={560}
                className="relative rounded-[32px] shadow-2xl object-cover w-full"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-purple-700 text-white px-5 py-3 rounded-2xl shadow-xl font-semibold text-sm">
                🎓 Certified Educator
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
              About Orion Classes
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-2">
              Meet{" "}
              <span className="text-purple-700">{siteData.founder}</span>
            </h2>

            <p className="text-orange-500 font-medium mb-6">
              Founder &amp; Lead Educator, Orion Classes
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {siteData.founderBio}
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Orion Classes focuses on helping children improve concentration,
              memory, confidence, mental mathematics, logical thinking and
              overall personality development through engaging, activity-based
              learning methods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Personalized attention for every child",
                "Activity-based learning approach",
                "Focus on confidence and communication",
                "Online and Home Tuition Available",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 bg-purple-50 p-4 rounded-2xl"
                >
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20know%20more%20about%20Orion%20Classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Connect with Sonam →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
