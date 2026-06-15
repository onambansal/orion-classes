import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ⭐ 5+ Years Experience &nbsp;|&nbsp; Ages 4–15
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Building Smart,
            <span className="text-purple-700"> Confident </span>
            &amp; Creative
            <span className="text-orange-500"> Young Minds</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Helping children improve concentration, memory, confidence, mental
            mathematics, problem-solving and overall personality development
            through structured and engaging learning programs.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20FREE%20trial%20class%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition text-white px-8 py-4 rounded-2xl font-bold shadow-lg text-lg"
            >
              🎉 Book FREE Trial Class
            </a>

            <a
              href="tel:+918800093436"
              className="bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-700 px-8 py-4 rounded-2xl font-semibold shadow-md transition text-lg"
            >
              📞 Call Now
            </a>
          </div>

          <p className="text-sm text-orange-600 font-medium mb-8">
            ⚡ Limited seats available — Enrol your child today!
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">50+ Young Minds Trained</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Online Classes Available</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Home Tuition Across Noida</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">Abacus Level Progression</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-5 py-2.5 rounded-2xl shadow-xl font-semibold text-sm z-10">
            🏆 50+ Students
          </div>

          <div className="absolute -bottom-4 -right-4 bg-purple-700 text-white px-5 py-2.5 rounded-2xl shadow-xl font-semibold text-sm z-10">
            ⭐ 5+ Years Experience
          </div>

          <Image
            src="/images/hero.jpg"
            alt="Orion Classes — Abacus and Vedic Maths for Kids"
            width={700}
            height={600}
            className="rounded-[32px] shadow-2xl w-full object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
