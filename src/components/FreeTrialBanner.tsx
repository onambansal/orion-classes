"use client";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const messages = [
  "🎉 Book a Trial Class Today! — Limited seats available.",
  "⭐ 150+ Happy Students across India!",
  "📍 Online Classes Pan India · Offline Classes in Noida",
  "🏆 10+ Years of Certified Teaching Experience",
  "🧠 Abacus · Vedic Maths · Maths Wizard · Rubik's Cube",
];

export default function FreeTrialBanner() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-700 to-orange-500 text-white py-3 px-4 text-center relative z-40 overflow-hidden">
      <div className="relative h-6 flex items-center justify-center">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={`absolute inset-0 flex items-center justify-center text-sm md:text-base font-medium transition-all duration-700 ${
              i === current
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            {msg}{" "}
            {i === 0 && (
              <a
                href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20free%20trial%20class%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold hover:text-yellow-200 transition ml-1"
              >
                WhatsApp Now →
              </a>
            )}
          </p>
        ))}
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition"
        aria-label="Close banner"
      >
        <X size={18} />
      </button>
    </div>
  );
}
