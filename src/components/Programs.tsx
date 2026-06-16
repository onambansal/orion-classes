"use client";
import {
  Calculator,
  Divide,
  Brain,
  Star,
  Puzzle,
  Palette,
  ChevronDown,
} from "lucide-react";
import { siteData } from "@/data/siteData";
import { useState } from "react";

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

// Benefits per program
const programBenefits: Record<string, string[]> = {
  "Abacus Training": [
    "Faster mental calculation",
    "Improved concentration & focus",
    "Enhanced memory & visualization",
    "Level-based progression system",
  ],
  "Vedic Mathematics": [
    "Ancient fast-calculation techniques",
    "Builds lasting maths confidence",
    "Reduces fear of numbers",
    "Fun & engaging methods",
  ],
  "Maths Wizard": [
    "Strengthens memory & focus",
    "Improves logical thinking",
    "Observation skill development",
    "Brain-training activities",
  ],
  "Rubik's Cube": [
    "Problem-solving abilities",
    "Spatial intelligence",
    "Patience & perseverance",
    "Algorithmic thinking",
  ],
  "Holiday Workshops": [
    "Creative learning activities",
    "Keeps young minds engaged",
    "Fun during school breaks",
    "Multiple skill development",
  ],
};

// Index of the "Most Popular" program (0 = first = Abacus)
const MOST_POPULAR_INDEX = 0;

export default function Programs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
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
            const isMostPopular = index === MOST_POPULAR_INDEX;
            const isExpanded = expandedIndex === index;
            const benefits = programBenefits[program.title] ?? [];

            return (
              <div
                key={program.title}
                style={{ animationDelay: `${index * 80}ms` }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border-2 ${
                  isMostPopular ? "border-purple-500" : colors.border
                } ${colors.hoverBorder} flex flex-col`}
              >
                {isMostPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
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

                {/* Expandable benefits */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      What your child will learn:
                    </p>
                    <ul className="space-y-1.5">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-green-500 font-bold shrink-0">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={`https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'm%20interested%20in%20the%20${encodeURIComponent(program.title)}%20program.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-700 font-semibold text-sm hover:text-orange-500 transition"
                  >
                    Enquire Now →
                  </a>
                  <button
                    onClick={() => toggleExpand(index)}
                    className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                      isExpanded ? "text-purple-600" : "text-gray-400 hover:text-purple-500"
                    }`}
                    aria-label={isExpanded ? "Show less" : "Show benefits"}
                  >
                    {isExpanded ? "Less" : "Benefits"}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
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
            🎉 Book a Trial Class
          </a>
          <p className="mt-3 text-sm text-gray-500">
          </p>
        </div>

      </div>
    </section>
  );
}
