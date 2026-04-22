"use client";
import { useState } from "react";

const tabs = ["About the Course", "About the Delivery", "Miscellaneous"];

const faqs: Record<string, { q: string; a: string }[]> = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian offers a wide range of corporate training programs including Data Science & AI, Product Management, Leadership, Business Analytics, Gen-AI, and more — all delivered by industry experts and certified by top institutions.",
    },
    {
      q: "What domain specializations are available?",
      a: "We specialize in Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab.",
    },
  ],
  "About the Delivery": [
    {
      q: "What are the delivery modes available?",
      a: "Programs are delivered both online and offline. Live instructor-led sessions are scheduled on weekends to minimize disruption to work schedules.",
    },
    {
      q: "How long does a typical program last?",
      a: "Programs range from 6 to 12 months depending on the domain and level. Custom durations can be arranged for enterprise cohorts.",
    },
  ],
  Miscellaneous: [
    {
      q: "Can programs be customized for our organization?",
      a: "Yes. Every enterprise engagement starts with a skill gap analysis, after which a fully customized curriculum is designed to address your team's specific goals.",
    },
    {
      q: "What certifications do learners receive?",
      a: "Learners receive co-certified credentials from Accredian's partner institutions (IITs, IIMs, XLRI, etc.), which are globally recognized and shareable on LinkedIn.",
    },
  ],
};

export default function FAQs() {
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>

        <div className="flex gap-6">
          {/* Tab sidebar */}
          <div className="flex flex-col gap-2 shrink-0 w-40">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => { setActiveTab(t); setOpenIdx(0); }}
                className={`text-left text-sm font-medium px-4 py-2.5 rounded-lg border transition-colors ${
                  activeTab === t
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-gray-200 text-gray-600 hover:border-blue-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="flex-1">
            {faqs[activeTab].map((item, i) => (
              <div key={i} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-4 h-4 shrink-0 ml-3 text-gray-400 transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIdx === i && (
                  <p className="pb-4 text-sm text-gray-500 leading-relaxed">{item.a}</p>
                )}
              </div>
            ))}

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
