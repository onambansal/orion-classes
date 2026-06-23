"use client";
import Link from "next/link";
import { Brain, ChevronRight, CheckCircle } from "lucide-react";

const highlights = [
  "Takes only 5 minutes",
  "Instant results for parents",
  "Identifies learning gaps",
  "100% free — no sign-up needed",
];

export default function AssessmentBanner() {
  return (
    <section className="py-14 bg-gradient-to-br from-purple-700 via-purple-800 to-orange-600 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-300 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Icon + Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-5 border border-white/20">
              <Brain size={16} className="text-yellow-300" />
              Free Maths Assessment for Kids
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Is Your Child Ready for{" "}
              <span className="text-yellow-300">the Next Level?</span>
            </h2>

            <p className="text-purple-100 text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Take our free 5-minute Maths Assessment to discover where your
              child stands — and how Orion Classes can help them soar.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 max-w-lg mx-auto lg:mx-0">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-purple-100 text-sm">
                  <CheckCircle size={16} className="text-yellow-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/assessment"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition text-lg group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <Brain size={20} className="relative z-10 text-purple-600" />
                <span className="relative z-10">Start Free Assessment</span>
                <ChevronRight size={18} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              <a
                href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20know%20more%20about%20the%20Maths%20Assessment%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold transition text-lg"
              >
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="shrink-0 w-full max-w-sm lg:max-w-xs">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain size={24} className="text-purple-800" />
                </div>
                <div>
                  <p className="font-bold text-lg leading-none">Maths Assessment</p>
                  <p className="text-purple-200 text-sm">by Orion Classes</p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {[
                  { label: "Mental Calculation Speed", pct: 72 },
                  { label: "Concentration & Focus", pct: 58 },
                  { label: "Problem-Solving Ability", pct: 65 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-purple-200">{item.label}</span>
                      <span className="text-yellow-300 font-semibold">{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-2xl p-3 text-center">
                <p className="text-yellow-200 text-xs font-medium">
                  🎯 Sample result — take the test to see your child&apos;s score!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
