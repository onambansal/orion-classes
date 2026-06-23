"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const assessmentLink = { label: "🧠 Free Assessment", href: "/assessment" };

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/60 backdrop-blur-xl shadow-lg border-b border-white/30"
          : "bg-white/95 border-b border-gray-100"
      }`}
      style={
        scrolled
          ? {
              boxShadow:
                "0 4px 24px 0 rgba(147,51,234,0.08), 0 1.5px 0 0 rgba(249,115,22,0.10)",
            }
          : undefined
      }
    >
      {/* Gradient border line at bottom when scrolled */}
      {scrolled && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, #9333ea 30%, #f97316 70%, transparent)",
            opacity: 0.5,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Orion Classes"
            width={44}
            height={44}
            style={{ width: 44, height: "auto" }}
            className="rounded-xl"
          />
          <div>
            <span className="font-extrabold text-xl text-gray-900">Orion Classes</span>
            <p className="text-xs text-gray-400 leading-none">Nurturing Creative Minds</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition text-sm relative pb-0.5 ${
                  isActive
                    ? "text-purple-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-purple-600 after:rounded-full"
                    : "text-gray-600 hover:text-purple-700"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={assessmentLink.href}
            className="relative overflow-hidden border border-purple-300 text-purple-700 hover:bg-purple-50 px-4 py-2.5 rounded-xl font-semibold text-sm transition"
          >
            {assessmentLink.label}
          </a>
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20FREE%20trial%20class%20for%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition group"
          >
            <span className="relative z-10">🎉 Trial Class</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Back to Top Button — pill style */}
      <div
        className={`fixed bottom-24 right-4 z-50 transition-all duration-500 ${
          showBackToTop
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-16 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-white border border-purple-200 hover:border-purple-500 text-purple-700 hover:bg-purple-50 px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-200 hover:shadow-xl text-sm font-semibold group"
          aria-label="Back to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          <span>Back to top</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-purple-700 font-medium py-2 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href={assessmentLink.href}
            onClick={() => setMenuOpen(false)}
            className="block border border-purple-300 text-purple-700 px-5 py-3 rounded-xl font-semibold text-sm text-center"
          >
            {assessmentLink.label}
          </a>
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20FREE%20trial%20class%20for%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-5 py-3 rounded-xl font-semibold text-sm text-center"
          >
            🎉 Trial Class
          </a>
        </div>
      )}
    </nav>
  );
}
