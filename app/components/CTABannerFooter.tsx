import Link from "next/link";

export default function CTABanner() {
  return (
    <section id="contact" className="py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-600 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl shrink-0">
              🎧
            </div>
            <div>
              <p className="text-white font-black text-lg leading-tight">
                Want to Learn More About Our Training Solutions?
              </p>
              <p className="text-blue-100 text-sm mt-1">Get Expert Guidance for Your Team's Success!</p>
            </div>
          </div>
          <Link
            href="mailto:enterprise@accredian.com"
            className="shrink-0 border-2 border-white text-white font-bold px-6 py-2.5 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-sm"
          >
            Contact Us &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6 mt-6">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="text-2xl font-bold text-blue-600 tracking-tight">accredian</span>
              <span className="text-[10px] text-gray-400 tracking-wide">credentials that matter</span>
            </div>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { label: "f", color: "bg-blue-600" },
                { label: "in", color: "bg-blue-700" },
                { label: "tw", color: "bg-sky-500" },
                { label: "ig", color: "bg-pink-500" },
                { label: "yt", color: "bg-red-600" },
              ].map((s) => (
                <a key={s.label} href="#"
                  className={`w-7 h-7 rounded-full ${s.color} flex items-center justify-center text-white text-[9px] font-bold hover:opacity-80 transition-opacity`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <Link
            href="#faqs"
            className="bg-blue-600 text-white font-semibold px-7 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Enquire Now
          </Link>
          <p className="text-xs text-gray-400">Speak with our Advisor</p>
        </div>

        <hr className="border-gray-200 mb-6" />

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-3">Accredian</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Why Accredian"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-gray-900 text-sm mb-3">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">
                Email us:{" "}
                <a href="mailto:enterprise@accredian.com" className="text-blue-600 hover:underline">
                  enterprise@accredian.com
                </a>
              </li>
              <li className="text-sm text-gray-500">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 mb-4" />
        <p className="text-center text-xs text-gray-400">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
