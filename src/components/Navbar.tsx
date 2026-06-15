"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Orion Classes"
            width={52}
            height={52}
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Orion Classes</h1>
            <p className="text-xs text-gray-500">Nurturing Creative Minds</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-purple-700 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:scale-105 transition"
          >
            Free Trial Class
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-purple-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-purple-700 transition py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center px-5 py-3 rounded-xl font-semibold shadow-md"
          >
            Free Trial Class
          </a>
        </div>
      )}
    </nav>
  );
}
