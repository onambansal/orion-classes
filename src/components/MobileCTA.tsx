export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/80 backdrop-blur-md border-t border-white/40 shadow-2xl px-4 py-3 flex gap-3"
      style={{ boxShadow: "0 -4px 24px 0 rgba(147,51,234,0.10)" }}
    >
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
        className="relative flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 rounded-xl font-bold text-sm shadow-lg transition overflow-hidden group"
      >
        {/* Shimmer effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        {/* Pulse glow ring */}
        <span className="absolute inset-0 rounded-xl animate-pulse-glow pointer-events-none" />
        <span className="relative z-10">🎉 Trial Class</span>
      </a>
    </div>
  );
}
