"use client";
import { useState } from "react";

type TabKey = "About the Course" | "About the Delivery" | "Miscellaneous";

const tabs: TabKey[] = ["About the Course", "About the Delivery", "Miscellaneous"];

const faqs: Record<TabKey, { q: string; a: string }[]> = {
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
  const [activeTab, setActiveTab] = useState<TabKey>("About the Course");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <div className="flex gap-14">
          <div className="flex flex-col gap-4 shrink-0 w-64">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => { setActiveTab(t); setOpenIdx(0); }}
                className={`text-left text-base font-medium px-6 py-4 rounded-lg border transition-colors ${
                  activeTab === t
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-gray-200 text-gray-600 hover:border-blue-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex-1 max-w-4xl">
            {faqs[activeTab].map((item, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex justify-between items-center py-6 text-left text-lg font-medium text-gray-800"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-5 h-5 ml-4 shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIdx === i && (
                  <p className="pb-6 text-base text-gray-500 leading-8">{item.a}</p>
                )}
              </div>
            ))}
            <div className="mt-8">
              <a href="#contact" className="inline-block bg-blue-600 text-white text-base font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}