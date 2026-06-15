import { Award, Users, BookOpen, Brain } from "lucide-react";
import { siteData } from "@/data/siteData";

const icons = [
  Award,
  Users,
  BookOpen,
  Brain,
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {siteData.stats.map((stat, index) => {
            const Icon = icons[index];

            return (
              <div
                key={stat.label}
                className="group bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-purple-100 to-orange-100 p-4 rounded-2xl">
                    <Icon className="w-8 h-8 text-purple-700" />
                  </div>
                </div>

                <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
                  {stat.value}
                </h3>

                <p className="text-gray-600 text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}