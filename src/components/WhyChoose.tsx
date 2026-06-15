import {
  UserCheck,
  Lightbulb,
  Heart,
  Laptop,
  Trophy,
  TrendingUp,
} from "lucide-react";

const points = [
  {
    icon: UserCheck,
    title: "Personalized Attention",
    description:
      "Every child learns at their own pace. We give individual focus to ensure no child is left behind.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Lightbulb,
    title: "Activity-Based Learning",
    description:
      "Hands-on, engaging methods that make learning fun and help concepts stick for life.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Heart,
    title: "Confidence & Communication",
    description:
      "We nurture not just academics but the whole child — building self-esteem and expression.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Laptop,
    title: "Online & Home Tuition",
    description:
      "Flexible learning options — attend from home or get tuition at your doorstep across Noida.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Trophy,
    title: "5+ Years of Experience",
    description:
      "Proven track record with 50+ students trained and multiple Abacus levels completed.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Parents consistently report improved grades, faster mental maths and greater confidence.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            Our Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Why Choose Orion Classes?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We go beyond academics — helping children develop skills that last a
            lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${point.bg} mb-5`}
                >
                  <Icon className={`w-6 h-6 ${point.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
