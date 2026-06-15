"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    childAge: "",
    program: "",
  });

  const programs = [
    "Abacus Training",
    "Vedic Mathematics",
    "Brain Development",
    "Personality Development",
    "Rubik's Cube Mastery",
    "Holiday Workshops",
    "Not sure yet",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Sonam ma'am! I'd like to enquire about Orion Classes.%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Child's Age:* ${encodeURIComponent(form.childAge)}%0A*Interested Program:* ${encodeURIComponent(form.program || "Not specified")}`;
    window.open(`https://wa.me/918800093436?text=${message}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-purple-50 to-orange-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Contact Orion Classes
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ready to give your child the gift of sharper thinking? Reach out
            today and book a free trial class!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Enquiry Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Quick Enquiry
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill in the details and we&apos;ll connect on WhatsApp instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 98765 43210"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Child&apos;s Age
                </label>
                <input
                  type="text"
                  name="childAge"
                  value={form.childAge}
                  onChange={handleChange}
                  placeholder="e.g. 8 years"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Program of Interest
                </label>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition bg-white"
                >
                  <option value="">Select a program...</option>
                  {programs.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 flex items-start gap-5">
              <div className="bg-purple-100 p-3 rounded-2xl shrink-0">
                <Phone className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                <a
                  href="tel:+918800093436"
                  className="text-gray-600 hover:text-purple-700 transition"
                >
                  +91 88000 93436
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 flex items-start gap-5">
              <div className="bg-orange-100 p-3 rounded-2xl shrink-0">
                <Mail className="text-orange-500" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                <a
                  href="mailto:sonambansal.sb@gmail.com"
                  className="text-gray-600 hover:text-orange-500 transition break-all"
                >
                  sonambansal.sb@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-lg border border-gray-100 flex items-start gap-5">
              <div className="bg-purple-100 p-3 rounded-2xl shrink-0">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">
                  Gaur Sportswood, Sector 79, Noida
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-orange-500 rounded-3xl p-7 text-white">
              <h3 className="font-bold text-lg mb-3">Multi Option Setup! 🏠</h3>
              <p className="text-purple-100 text-sm mb-1">
                Tuition available across Noida
              </p>
              <p className="text-purple-100 text-sm">
                Online Classes available Pan India 💻
              </p>
              <a
                href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20free%20trial%20class."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 bg-white text-purple-700 px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition shadow-md"
              >
                Book Free Trial →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
