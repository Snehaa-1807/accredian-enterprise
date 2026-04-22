"use client";
import { useState } from "react";

const testimonials = [
  {
    logo: "ADP",
    logoBg: "bg-red-600",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    logo: "BAYER",
    logoBg: "bg-green-600",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high quality service every step of the way.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Testimonials from <span className="text-blue-500">Our Partners</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          What <span className="text-blue-500">Our Clients</span> Are Saying
        </p>

        {/* Cards - show 2 on desktop, 1 on mobile */}
        <div className="hidden sm:grid grid-cols-2 gap-6 mb-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.logo} t={t} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="sm:hidden">
          <TestimonialCard t={testimonials[current]} />
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-blue-600" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: { logo: string; logoBg: string; quote: string } }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className={`inline-flex items-center justify-center ${t.logoBg} text-white font-black text-sm px-3 py-1 rounded mb-4`}>
        {t.logo}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">"{t.quote}"</p>
    </div>
  );
}
