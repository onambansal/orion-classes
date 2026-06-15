"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything parents want to know before enrolling their child.
          </p>
        </div>

        <div className="space-y-4">
          {siteData.faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-purple-50 transition"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-600 shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 shrink-0" size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 bg-purple-50 border-t border-purple-100">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re happy to help!
          </p>
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I%20have%20a%20question%20about%20Orion%20Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
