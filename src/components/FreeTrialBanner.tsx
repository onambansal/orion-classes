"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function FreeTrialBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-700 to-orange-500 text-white py-3 px-4 text-center relative z-40">
      <p className="text-sm md:text-base font-medium">
        🎉 <strong>Book a FREE Trial Class Today!</strong> — Limited seats
        available.{" "}
        <a
          href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20free%20trial%20class%20for%20my%20child."
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-yellow-200 transition ml-1"
        >
          WhatsApp Now →
        </a>
      </p>
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
