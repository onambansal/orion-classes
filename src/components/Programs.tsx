import {
  Calculator,
  Divide,
  Brain,
  Star,
  Puzzle,
  Palette,
} from "lucide-react";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Divide,
  Brain,
  Star,
  Puzzle,
  Palette,
};

const colorMap = [
  { icon: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100", badge: "bg-purple-100 text-purple-700", hoverBorder: "hover:border-purple-400", hoverShadow: "hover:shadow-purple-100" },
  { icon: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100", badge: "bg-orange-100 text-orange-700", hoverBorder: "hover:border-orange-400", hoverShadow: "hover:shadow-orange-100" },
  { icon: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100", badge: "bg-purple-100 text-purple-700", hoverBorder: "hover:border-purple-400", hoverShadow: "hover:shadow-purple-100" },
  { icon: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100", badge: "bg-orange-100 text-orange-700", hoverBorder: "hover:border-orange-400", hoverShadow: "hover:shadow-orange-100" },
  { icon: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100", badge: "bg-purple-100 text-purple-700", hoverBorder: "hover:border-purple-400", hoverShadow: "hover:shadow-purple-100" },
  { icon: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100", badge: "bg-orange-100 text-orange-700", hoverBorder: "hover:border-orange-400", hoverShadow: "hover:shadow-orange-100" },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-14 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Programs Designed for Holistic Growth
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Each program is carefully designed to improve concentration,
            confidence, creativity, logical thinking and overall development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.programs.map((program, index) => {
            const Icon = iconMap[program.icon] ?? Calculator;
            const colors = colorMap[index % colorMap.length];

            return (
              <div
                key={program.title}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-2 ${colors.border} ${colors.hoverBorder} flex flex-col`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colors.bg}`}>
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                    {program.ageGroup}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  {program.description}
                </p>

                <a
                  href={`https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'm%20interested%20in%20the%20${encodeURIComponent(program.title)}%20program.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-purple-700 font-semibold text-sm hover:text-orange-500 transition"
                >
                  Enquire Now →
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20know%20more%20about%20all%20your%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-10 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition text-lg"
          >
            🎉 Book a Free Trial Class
          </a>
          <p className="mt-3 text-sm text-gray-500">
          </p>
        </div>

      </div>
    </section>
  );
}
