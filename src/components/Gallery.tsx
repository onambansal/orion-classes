"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  { src: "/images/gallery/g3.jpg", alt: "Abacus class in session" },
  { src: "/images/gallery/g2.jpg", alt: "Students learning Vedic Maths" },
  { src: "/images/gallery/gallery1.jpg", alt: "Brain development activity" },
  { src: "/images/gallery/gallery3.jpg", alt: "Holiday workshop fun" },
  { src: "/images/gallery/gallery4.jpg", alt: "Personality development session" },
  { src: "/images/gallery/g5.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g6.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g7.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g8.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g9.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g10.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g17.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g11.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g12.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g13.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g14.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g15.jpeg", alt: "Students at Orion Classes" },
  { src: "/images/gallery/g16.jpeg", alt: "Students at Orion Classes" },
];

const VISIBLE = 3; // photos per page on desktop

export default function Gallery() {
  const [page, setPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const totalPages = Math.ceil(images.length / VISIBLE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visibleImages = images.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  // Lightbox navigation
  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") lightboxPrev();
      else if (e.key === "ArrowRight") lightboxNext();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, lightboxPrev, lightboxNext, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
            Our Classroom
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
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
            {visibleImages.map((image, i) => {
              const globalIndex = page * VISIBLE + i;
              return (
                <div
                  key={image.src}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition duration-300 group relative aspect-[4/3] cursor-zoom-in"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl flex items-end p-5">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                  {/* Zoom hint */}
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              );
            })}
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

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-center text-white/80 text-sm mt-3 font-medium">
              {images[lightboxIndex].alt}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
