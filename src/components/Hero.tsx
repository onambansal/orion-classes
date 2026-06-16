"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteData } from "@/data/siteData";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / (1200 / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const cyclingWords = ["Smart,", "Confident", "Creative"];
const cyclingColors = [
  "bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent",
  "bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent",
  "bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent",
];

function TypingCycler() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = cyclingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < word.length) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % cyclingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className={`${cyclingColors[wordIndex]} inline-block min-w-[2ch]`}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const statIcons = ["🏆", "👦", "📚", "🎯"];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-orange-50 overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300 opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-200 opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
            ⭐ 10+ Years Experience &nbsp;|&nbsp; Ages 4–15
          </div>

          {/* Mobile: heading + image side by side */}
          <div className="flex items-start gap-3 md:block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 flex-1">
              <span className="text-gray-900">Building </span>
              <TypingCycler />
              <br />
              <span className="text-gray-900">&amp; </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Young Minds</span>
            </h1>

            {/* Image — visible only on mobile (hidden on md+) */}
            <div className="relative w-32 shrink-0 md:hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-orange-200 rounded-2xl rotate-2 scale-105 opacity-40" />
              <Image
                src="/images/logo.png"
                alt="Orion Classes"
                width={200}
                height={200}
                className="relative rounded-2xl shadow-lg w-full object-cover"
                priority
              />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Helping children improve concentration, memory, confidence, mental
            mathematics, problem-solving and overall personality development
            through structured and engaging learning programs.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20FREE%20trial%20class%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition text-white px-8 py-4 rounded-2xl font-bold shadow-lg text-lg group text-center"
            >
              <span className="relative z-10">🎉 Book Trial Class</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </a>
            <a
              href="tel:+918800093436"
              className="bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-700 px-8 py-4 rounded-2xl font-semibold shadow-md transition text-lg text-center"
            >
              📞 Call Now
            </a>
          </div>

          <p className="text-sm text-orange-600 font-medium mb-8">
            ⚡ Limited seats available — Enrol your child today!
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              "150+ Young Minds Trained",
              "Online Classes Available",
              "Offline Classes Across Noida",
              "Abacus Level Progression",
            ].map((badge) => (
              <div
                key={badge}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2"
              >
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image — hidden on mobile (shown only on md+) */}
        <div className="relative hidden md:block">
          <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-5 py-2.5 rounded-2xl shadow-xl font-semibold text-sm z-10">
            🏆 150+ Students
          </div>
          <div className="absolute -bottom-4 -right-4 bg-purple-700 text-white px-5 py-2.5 rounded-2xl shadow-xl font-semibold text-sm z-10">
            ⭐ 10+ Years Experience
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-orange-200 rounded-[36px] rotate-2 scale-105 opacity-40" />
          <Image
            src="/images/logo.png"
            alt="Orion Classes — Abacus and Vedic Maths for Kids"
            width={700}
            height={600}
            className="relative rounded-[32px] shadow-2xl w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Animated Stats Bar */}
      <div className="relative border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 gap-6">
          {siteData.stats.map((stat, i) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
            const suffix = stat.value.replace(/[0-9]/g, "");
            return (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-1">{statIcons[i]}</div>
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  <AnimatedCounter target={numericValue} suffix={suffix} />
                </div>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
