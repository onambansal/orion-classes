"use client";
import { useState } from "react";
import { Phone, Mail, Send, ChevronDown, ChevronUp } from "lucide-react";
import { siteData } from "@/data/siteData";

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {siteData.faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-purple-50 transition"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-900 text-sm pr-4">
              {faq.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="text-purple-600 shrink-0" size={18} />
            ) : (
              <ChevronDown className="text-gray-400 shrink-0" size={18} />
            )}
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 bg-purple-50 border-t border-purple-100">
              <p className="text-gray-700 text-sm leading-relaxed pt-3">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Floating label input component
function FloatingInput({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const isFloated = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={isFloated ? placeholder : ""}
        className={`w-full border rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none transition-all duration-200 bg-white ${
          focused
            ? "border-purple-400 ring-2 ring-purple-100"
            : "border-gray-200 hover:border-gray-300"
        }`}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium ${
          isFloated
            ? "top-2 text-xs text-purple-600"
            : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
        }`}
      >
        {label}
        {required && <span className="text-orange-500 ml-0.5">*</span>}
      </label>
    </div>
  );
}

// Floating label select component
function FloatingSelect({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);
  const isFloated = focused || value.length > 0;

  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full border rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none transition-all duration-200 bg-white appearance-none ${
          focused
            ? "border-purple-400 ring-2 ring-purple-100"
            : "border-gray-200 hover:border-gray-300"
        } ${!value ? "text-gray-400" : "text-gray-900"}`}
      >
        <option value="">Select a program...</option>
        {options.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium ${
          isFloated
            ? "top-2 text-xs text-purple-600"
            : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
        }`}
      >
        {label}
      </label>
      <ChevronDown
        size={16}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}

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
    "Maths Wizard",
    "Rubik's Cube",
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
      className="py-14 bg-gradient-to-br from-purple-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Contact Orion Classes
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ready to give your child the gift of sharper thinking? Reach out
            today and book a trial class!
          </p>
        </div>

        {/* Two-column: Form + Info */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">

          {/* Left: Enquiry Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Quick Enquiry
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill in the details and we&apos;ll connect on WhatsApp instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FloatingInput
                label="Your Name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
              />
              <FloatingInput
                label="Phone Number"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 98765 43210"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingInput
                  label="Child's Age"
                  name="childAge"
                  value={form.childAge}
                  onChange={handleChange}
                  placeholder="e.g. 8 years"
                />
                <FloatingSelect
                  label="Program"
                  name="program"
                  value={form.program}
                  onChange={(e) => setForm({ ...form, program: e.target.value })}
                  options={programs}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <Send size={18} className="relative z-10" />
                <span className="relative z-10">Send Enquiry on WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: Contact Info + CTA Banner */}
          <div className="flex flex-col gap-5">

            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex flex-col items-center text-center gap-2">
                <div className="bg-purple-100 p-2.5 rounded-xl">
                  <Phone className="text-purple-600" size={20} />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Call Us</p>
                <a
                  href="tel:+918800093436"
                  className="text-gray-600 text-xs hover:text-purple-700 transition"
                >
                  +91 88000 93436
                </a>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex flex-col items-center text-center gap-2">
                <div className="bg-orange-100 p-2.5 rounded-xl">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Email Us</p>
                <a
                  href="mailto:sonambansal.sb@gmail.com"
                  className="text-gray-600 text-xs hover:text-orange-500 transition break-all"
                >
                  sonambansal.sb@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-br from-purple-600 to-orange-500 rounded-3xl p-8 text-white flex-1">
              <h3 className="font-bold text-xl mb-3">We Come to You! 🏠</h3>
              <p className="text-purple-100 text-sm mb-2">
                Offline Classes available across Noida
              </p>
              <p className="text-purple-100 text-sm mb-6">
                Online Classes available Pan India 💻
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20free%20trial%20class."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-700 px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition shadow-md text-center"
                >
                  Book Free Trial →
                </a>
                <a
                  href="tel:+918800093436"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm transition text-center"
                >
                  📞 Call Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
              Got Questions?
            </span>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I%20have%20a%20question%20about%20Orion%20Classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
