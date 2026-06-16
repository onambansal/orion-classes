export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex gap-3">
      <a
        href="tel:+918800093436"
        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold text-sm transition"
      >
        📞 Call Now
      </a>
      <a
        href="https://wa.me/918800093436?text=Hi%20Sonam%20ma'am!%20I'd%20like%20to%20book%20a%20FREE%20trial%20class%20for%20my%20child."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 rounded-xl font-bold text-sm shadow-lg transition"
      >
        🎉 Trial Class
      </a>
    </div>
  );
}
