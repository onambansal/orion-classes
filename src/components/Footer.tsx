import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/logo.png"
                alt="Orion Classes"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <div>
                <h3 className="text-white font-bold text-lg">Orion Classes</h3>
                <p className="text-xs text-gray-400">Nurturing Creative Minds</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Helping children aged 4–15 build concentration, memory, confidence
              and mental maths skills through structured, engaging programs.
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20know%20more%20about%20Orion%20Classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-purple-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-purple-400 mt-0.5 shrink-0" />
                <a href="tel:+918800093436" className="hover:text-white transition">
                  +91 88000 93436
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-purple-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:sonambansal.sb@gmail.com"
                  className="hover:text-white transition break-all"
                >
                  sonambansal.sb@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-1 text-sm text-gray-400">
              <p>🏠 Offline Classes — Noida</p>
              <p>💻 Online Classes — Pan India</p>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t-2 border-transparent" style={{ borderImage: "linear-gradient(to right, #9333ea, #f97316) 1" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Orion Classes. All rights reserved.</p>
          <p>Abacus · Vedic Maths · Maths Wizard · Noida</p>
        </div>
      </div>
    </footer>
  );
}
