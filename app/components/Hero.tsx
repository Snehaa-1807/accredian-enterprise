import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-blue-50 rounded-3xl overflow-hidden min-h-[420px] flex items-center shadow-sm">
          {/* Left content */}
          <div className="relative z-10 px-10 py-12 max-w-lg">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
              Next-Gen{" "}
              <span className="text-blue-500">Expertise</span>
              <br />
              For Your{" "}
              <span className="text-blue-500">Enterprise</span>
            </h1>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Cultivate high-performance<br />
              teams through expert learning.
            </p>

            {/* Feature checkmarks */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
              {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700 font-medium">{f}</span>
                </div>
              ))}
            </div>

            <Link
              href="#faqs"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base shadow"
            >
              Enquire Now
            </Link>
          </div>

          {/* Right - professionals image placeholder (real site has actual photo) */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden sm:flex items-end justify-end pointer-events-none">
            {/* Silhouette placeholder matching the two-person photo */}
            <div className="relative w-full h-full flex items-end justify-center gap-4 px-8 pb-0">
              {/* Person 1 - woman with laptop */}
              <div className="relative w-40 h-80 flex flex-col items-center justify-end">
                <div className="w-36 h-72 bg-blue-200/60 rounded-t-full flex flex-col items-center justify-end pb-2">
                  <div className="w-16 h-16 rounded-full bg-blue-300 mb-2" />
                  <div className="w-28 h-40 bg-white/60 rounded-lg flex items-center justify-center">
                    <svg className="w-16 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
                      <path strokeLinecap="round" strokeWidth="1.5" d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Person 2 - man with arms crossed */}
              <div className="relative w-36 h-64 flex flex-col items-center justify-end">
                <div className="w-32 h-64 bg-blue-300/50 rounded-t-full flex flex-col items-center justify-start pt-4">
                  <div className="w-14 h-14 rounded-full bg-blue-400/60 mb-3" />
                  <div className="w-20 h-10 bg-blue-500/30 rounded-lg mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute right-8 top-8 w-32 h-32 rounded-full bg-blue-200/30 pointer-events-none" />
          <div className="absolute right-24 bottom-4 w-20 h-20 rounded-full bg-blue-300/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
