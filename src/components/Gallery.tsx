import Image from "next/image";

const images = [
  { src: "/images/gallery/g3.jpg", alt: "Abacus class in session" },
  { src: "/images/gallery/g2.jpg", alt: "Students learning Vedic Maths" },
  { src: "/images/gallery/gallery1.jpg", alt: "Brain development activity" },
  { src: "/images/gallery/gallery2.jpg", alt: "Rubik's Cube training" },
  { src: "/images/gallery/gallery3.jpg", alt: "Holiday workshop fun" },
  { src: "/images/gallery/gallery4.jpg", alt: "Personality development session" },
  { src: "/images/gallery/g1.jpg", alt: "Students at Orion Classes" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
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

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="break-inside-avoid overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition duration-300 group relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={index % 3 === 1 ? 700 : 500}
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl flex items-end p-5">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
