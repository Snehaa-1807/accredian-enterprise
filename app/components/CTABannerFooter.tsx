import { Headphones } from "lucide-react";
import Link from "next/link";
import {
 FaFacebookF,
 FaLinkedinIn,
 FaTwitter,
 FaInstagram,
 FaYoutube
} from "react-icons/fa";
export default function CTABanner() {
  return (
    <section id="contact" className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-3xl px-14 py-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center shrink-0">
  <Headphones
    size={44}
    strokeWidth={2.2}
    className="text-white"
  />
</div>

            <div>
              <p className="text-white font-black text-4xl leading-tight">
                Want to Learn More About Our Training Solutions?
              </p>

              <p className="text-blue-100 text-xl mt-3">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>

          <Link
            href="mailto:enterprise@accredian.com"
            className="shrink-0 border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors text-xl"
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
      <div className="max-w-7xl mx-auto px-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="text-2xl font-bold text-blue-600 tracking-tight">
                accredian
              </span>
              <span className="text-[10px] text-gray-400 tracking-wide">
                credentials that matter
              </span>
            </div>

           <div className="flex gap-4 mt-4">
  <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl">
    <FaFacebookF />
  </a>

  <a href="#" className="text-gray-600 hover:text-blue-700 text-2xl">
    <FaLinkedinIn />
  </a>

  <a href="#" className="text-gray-600 hover:text-sky-500 text-2xl">
    <FaTwitter />
  </a>

  <a href="#" className="text-gray-600 hover:text-pink-500 text-2xl">
    <FaInstagram />
  </a>

  <a href="#" className="text-gray-600 hover:text-red-600 text-2xl">
    <FaYoutube />
  </a>
</div>
          </div>

          <div className="text-right">
            <Link
              href="#faqs"
              className="bg-blue-600 text-white font-semibold px-7 py-2.5 rounded-lg text-sm"
            >
              Enquire Now
            </Link>

            <p className="text-xs text-gray-400 mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        <hr className="border-gray-200 mb-6" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-3">Accredian</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Why Accredian"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-gray-500">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-gray-900 text-sm mb-3">
              Contact Us
            </h4>

            <ul className="space-y-2">
              <li className="text-sm text-gray-500">
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-blue-600"
                >
                  enterprise@accredian.com
                </a>
              </li>

              <li className="text-sm text-gray-500">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                Sector 18, Gurugram, Haryana
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