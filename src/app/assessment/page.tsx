"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AssessmentPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Branded Header Bar */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm shrink-0 z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-purple-700 hover:text-purple-900 font-semibold text-sm transition group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          <span>Back to Orion Classes</span>
        </Link>

        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="Orion Classes"
            width={32}
            height={32}
            style={{ width: 32, height: "auto" }}
            className="rounded-lg"
          />
          <div className="hidden sm:block">
            <p className="font-bold text-gray-900 text-sm leading-none">
              Orion Classes
            </p>
            <p className="text-xs text-gray-400 leading-none">
              Free Maths Assessment
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I%20just%20completed%20the%20Maths%20Assessment%20and%20would%20like%20to%20know%20more%20about%20Orion%20Classes."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-xs shadow-md hover:scale-105 transition"
        >
          🎉 Book Trial Class
        </a>
      </header>

      {/* Full-screen iFrame */}
      <div className="flex-1 relative">
        <iframe
          src="https://mathematic-assessment.netlify.app/"
          title="Free Maths Assessment — Orion Classes"
          className="w-full h-full border-0"
          allow="fullscreen"
          loading="eager"
        />
      </div>

      {/* Footer strip */}
      <div className="shrink-0 bg-white border-t border-gray-100 px-4 py-2 flex items-center justify-between text-xs text-gray-400">
        <span>© {new Date().getFullYear()} Orion Classes</span>
        <Link href="/" className="hover:text-purple-600 transition font-medium">
          ← Return to main site
        </Link>
      </div>
    </div>
  );
}
