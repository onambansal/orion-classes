"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/gallery/g3.jpg", alt: "Abacus class in session" },
  { src: "/images/gallery/g2.jpg", alt: "Students learning Vedic Maths" },
  { src: "/images/gallery/gallery1.jpg", alt: "Brain development activity" },
  { src: "/images/gallery/gallery2.jpg", alt: "Rubik's Cube training" },
  { src: "/images/gallery/gallery3.jpg", alt: "Holiday workshop fun" },
  { src: "/images/gallery/gallery4.jpg", alt: "Personality development session" },
  { src: "/images/gallery/g5.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g6.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g7.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g8.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g9.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g10.jpeg", alt: "Students at Orion Classes" },
];

const VISIBLE = 3; // photos per page on desktop

export default function Gallery() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(images.length / VISIBLE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visibleImages = images.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  return (
    <section id="gallery" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            Our Classroom
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Learning in Action
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A glimpse into our engaging, activity-based learning sessions where
            every child thrives.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition duration-300 group relative aspect-[4/3]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl flex items-end p-5">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 text-purple-700 shadow-md transition disabled:opacity-40"
              aria-label="Previous photos"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === page
                      ? "bg-purple-600 w-6"
                      : "bg-gray-300 hover:bg-purple-300"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 text-purple-700 shadow-md transition"
              aria-label="Next photos"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Page counter */}
          <p className="text-center text-sm text-gray-400 mt-3">
            {page + 1} / {totalPages}
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20visit%20Orion%20Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-purple-600 text-purple-700 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            Visit Us or Book a Demo →
          </a>
        </div>

      </div>
    </section>
  );
}
