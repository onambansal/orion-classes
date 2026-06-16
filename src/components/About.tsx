import {
  UserCheck,
  Lightbulb,
  Heart,
  Laptop,
  Trophy,
  TrendingUp,
} from "lucide-react";

const whyPoints = [
  {
    icon: UserCheck,
    title: "Personalized Attention",
    description: "Every child learns at their own pace with individual focus.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Lightbulb,
    title: "Activity-Based Learning",
    description: "Hands-on methods that make learning fun and concepts stick.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Heart,
    title: "Confidence & Communication",
    description: "I nurture the whole child — building self-esteem and expression.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Laptop,
    title: "Online & Offline Tuition",
    description: "Flexible options — Online and Offline classes to suit your needs",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Trophy,
    title: "10+ Years of Experience",
    description: "Proven track record with 150+ students and multiple Abacus levels.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Parents report improved grades, faster maths and greater confidence.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            About Orion Classes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Meet the Educator Behind the Magic
          </h2>
        </div>

        {/* Founder Bio — full width, no image */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            🎓 Certified Educator &nbsp;|&nbsp; Founder, Orion Classes
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Hi, I&apos;m <span className="text-purple-700">Sonam Bansal</span>
          </h3>
          <p className="text-orange-500 font-medium mb-6">
            Founder &amp; Lead Educator, Orion Classes
          </p>
          <blockquote className="border-l-4 border-purple-500 pl-4 sm:pl-6 text-left mb-5">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              With over 10 years of dedicated teaching experience, I have helped 150+ children
              across world to unlock their true potential. As a certified Abacus and Vedic Maths
              educator, I bring warmth, patience and a structured approach to every session —
              making learning genuinely enjoyable for every child.
            </p>
          </blockquote>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Orion Classes, my focus is on helping children improve concentration,
            memory, confidence, mental mathematics, logical thinking and overall
            personality development through engaging, activity-based learning methods.
          </p>
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20know%20more%20about%20Orion%20Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Connect with Me →
          </a>
        </div>

        {/* Why Choose — merged */}
        <div className="border-t border-gray-100 pt-10">
          <div className="text-center mb-8">
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
              Our Difference
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Why Choose Orion Classes?
            </h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              I go beyond academics — helping children develop skills that last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className="bg-gray-50 rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-gray-100 animate-fade-in-up"
                >
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${point.bg} mb-4`}
                  >
                    <Icon className={`w-5 h-5 ${point.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {point.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
